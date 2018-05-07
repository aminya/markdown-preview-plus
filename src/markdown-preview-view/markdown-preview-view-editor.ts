import { TextEditor, Grammar, Range } from 'atom'
import * as util from './util'
import { MarkdownPreviewView, SerializedMPV } from './markdown-preview-view'
import { handlePromise } from '../util'

export class MarkdownPreviewViewEditor extends MarkdownPreviewView {
  private static editorMap = new WeakMap<
    TextEditor,
    MarkdownPreviewViewEditor
  >()

  private constructor(private editor: TextEditor) {
    super()
    this.handleEditorEvents()
  }

  public static create(editor: TextEditor) {
    let mppv = MarkdownPreviewViewEditor.editorMap.get(editor)
    if (!mppv) {
      mppv = new MarkdownPreviewViewEditor(editor)
      MarkdownPreviewViewEditor.editorMap.set(editor, mppv)
    }
    return mppv
  }

  public static viewForEditor(editor: TextEditor) {
    return MarkdownPreviewViewEditor.editorMap.get(editor)
  }

  public destroy() {
    super.destroy()
    MarkdownPreviewViewEditor.editorMap.delete(this.editor)
  }

  public serialize(): SerializedMPV {
    return {
      deserializer: 'markdown-preview-plus/MarkdownPreviewView',
      editorId: this.editor && this.editor.id,
    }
  }

  public getTitle() {
    return `${this.editor.getTitle()} Preview`
  }

  public getURI() {
    return `markdown-preview-plus://editor/${this.editor.id}`
  }

  public getPath() {
    return this.editor.getPath()
  }

  protected async getMarkdownSource() {
    return this.editor.getText()
  }

  protected getGrammar(): Grammar {
    return this.editor.getGrammar()
  }

  protected editorScroll(min: number, max: number) {
    const pane = atom.workspace.paneForItem(this)
    if (pane && !pane.isActive()) return
    if (min === 0) {
      this.editor.scrollToBufferPosition([min, 0])
    } else if (max >= this.editor.getLastBufferRow() - 1) {
      this.editor.scrollToBufferPosition([max, 0])
    } else {
      // const mid = Math.floor(0.5 * (min + max))
      // this.editor.scrollToBufferPosition([mid, 0], { center: true })
      const range = Range.fromObject([[min, 0], [max, 0]])
      this.editor.scrollToScreenRange(
        this.editor.screenRangeForBufferRange(range),
        { center: false },
      )
    }
  }

  private handleEditorEvents() {
    this.disposables.add(
      atom.workspace.onDidChangeActiveTextEditor((ed) => {
        if (
          atom.config.get('markdown-preview-plus.activatePreviewWithEditor')
        ) {
          if (ed === this.editor) {
            const pane = atom.workspace.paneForItem(this)
            if (!pane) return
            pane.activateItem(this)
          }
        }
      }),
      this.editor.getBuffer().onDidStopChanging(() => {
        if (atom.config.get('markdown-preview-plus.liveUpdate')) {
          this.changeHandler()
        }
        if (atom.config.get('markdown-preview-plus.syncPreviewOnChange')) {
          handlePromise(this.syncPreviewHelper())
        }
      }),
      this.editor.onDidChangePath(() => {
        this.emitter.emit('did-change-title')
      }),
      this.editor.onDidDestroy(() => {
        if (atom.config.get('markdown-preview-plus.closePreviewWithEditor')) {
          util.destroy(this)
        }
      }),
      this.editor.getBuffer().onDidSave(() => {
        if (!atom.config.get('markdown-preview-plus.liveUpdate')) {
          this.changeHandler()
        }
      }),
      this.editor.getBuffer().onDidReload(() => {
        if (!atom.config.get('markdown-preview-plus.liveUpdate')) {
          this.changeHandler()
        }
      }),
      atom.views.getView(this.editor).onDidChangeScrollTop(() => {
        const pane = atom.workspace.paneForItem(this.editor)
        if (pane && !pane.isActive()) return
        const [first, last] = this.editor.getVisibleRowRange()
        this.element.send<'scroll-sync'>('scroll-sync', {
          firstLine: this.editor.bufferRowForScreenRow(first),
          lastLine: this.editor.bufferRowForScreenRow(last),
        })
      }),
      atom.commands.add(atom.views.getView(this.editor), {
        'markdown-preview-plus:sync-preview': this.syncPreviewHelper,
      }),
    )
  }

  private syncPreviewHelper = async () => {
    const pos = this.editor.getCursorBufferPosition().row
    this.syncPreview(pos)
  }
}
