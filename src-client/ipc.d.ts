import * as MarkdownIt from 'markdown-it'

declare interface ChannelMap {
  style: { styles: string[] }
  'update-images': { oldsrc: string; v: number | undefined }
  sync: { line: number; flash: boolean }
  'update-preview': {
    id: number
    html: string
    renderLaTeX: boolean
  }
  error: { msg: string }
  init: {
    atomHome: string
    mathJaxConfig: MathJaxConfig
    mathJaxRenderer: MathJaxRenderer
    context: 'live-preview' | 'copy-html'
  }
  'set-base-path': { path?: string }
  'set-source-map': {
    map: { [line: number]: Array<{ tag: string; index: number }> }
  }
  'scroll-sync': { firstLine: number; lastLine: number }
  // actual requests
  'get-tex-config': { id: number }
  'sync-source': { id: number }
  reload: { id: number }
  'prepare-pdf-export': {
    id: number
    width: number
  }
  'finished-pdf-export': { id: number }
  'get-selection': { id: number }
}
declare interface ReplyMap {
  'zoom-in': void
  'zoom-out': void
  'uncaught-error': { message: string; name: string; stack?: string }
  'did-scroll-preview': { max: number; min: number }
  // actual replies
  'request-reply': RequestReplyType[keyof RequestReplyMap]
}
declare interface RequestReplyMap {
  'update-preview': string
  'get-tex-config': MathJax.TeXInputProcessor
  reload: void
  'sync-source': number | undefined
  'prepare-pdf-export': void
  'finished-pdf-export': void
  'get-selection': string | undefined
}
declare type RequestReplyType = {
  [K in keyof RequestReplyMap]: {
    id: number
    request: K
    result: RequestReplyMap[K]
  }
}
declare type ReplyMapEvents = {
  [K in keyof ReplyMap]: Electron.IpcMessageEventCustomFixed<K>
}
declare global {
  namespace Electron {
    interface IpcRenderer {
      on<T extends keyof ChannelMap>(
        channel: T,
        cb: (evt: Event, value: ChannelMap[T]) => void,
      ): IpcRenderer
      sendToHost<T extends keyof ReplyMap>(ch: T, arg: ReplyMap[T]): void
    }
    interface WebviewTag {
      send<T extends keyof ChannelMap>(channel: T, value: ChannelMap[T]): void
      addEventListener(
        s: 'ipc-message',
        h: (e: IpcMessageEventCustom) => void,
      ): void
    }
    type IpcMessageEventCustom = ReplyMapEvents[keyof ReplyMapEvents]
    type IpcMessageEventCustomFixed<T extends keyof ReplyMap> = {
      channel: T
      args: [ReplyMap[T]]
    }
  }

  type MathJaxRenderer = 'SVG' | 'HTML-CSS'

  interface MathJaxConfig {
    numberEquations: boolean
    texExtensions: string[]
    undefinedFamily: string
  }

  interface MathJaxConfigWithRenderer extends MathJaxConfig {
    renderer: MathJaxRenderer
  }
}
