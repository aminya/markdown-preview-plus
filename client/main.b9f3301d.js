parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({5:[function(require,module,exports) {
"use strict";function e(e){e&&e.catch(function(e){console.error(e)})}exports.__esModule=!0,exports.handlePromise=e;var r=require("fs");function t(e){return!!r.existsSync(e)&&r.lstatSync(e).isFile()}function n(e,r){for(var t=e,n=0,o=r;n<o.length;n++){var s=o[n],i=t.querySelectorAll(":scope > "+s.tag).item(s.index);if(!i)break;t=i}if(t!==e)return t}exports.isFileSync=t,exports.resolveElement=n;
},{}],4:[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};exports.__esModule=!0;var n,r=require("path"),o=require("season"),i=require("fs"),a=require("./util"),u=global.require.resolve("mathjax")+"?delayStartupUntil=configured";function s(n){return e(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,d()];case 1:return e.sent(),[4,J(n)];case 2:return e.sent(),[2]}})})}function c(n){return e(this,void 0,void 0,function(){var e,r;return t(this,function(t){return e=document.getElementById("MathJax_SVG_Hidden"),null!==(r=e&&e.parentElement)?[2,r.innerHTML+n.innerHTML]:[2,n.innerHTML]})})}function l(){return e(this,void 0,void 0,function(){return t(this,function(e){return MathJax?[2,new Promise(function(e){MathJax.Hub.Queue(["Rerender",MathJax.Hub]),MathJax.Hub.Queue([e])})]:[2]})})}function d(){return e(this,void 0,void 0,function(){return t(this,function(e){return n?[2,n]:[2,n=M()]})})}function h(){n=void 0;var e=document.head.querySelector("script[src='"+u+"']");e&&e.remove()}function f(){return e(this,void 0,void 0,function(){var e,n;return t(this,function(t){switch(t.label){case 0:return[4,v()];case 1:return e=(e=t.sent())?x(e):{},[4,window.atomVars.mathJaxConfig];case 2:return[2,{extensions:(n=t.sent()).texExtensions,Macros:e,equationNumbers:n.numberEquations?{autoNumber:"AMS",useLabelIds:!1}:{}}]}})})}function m(){return e(this,void 0,void 0,function(){var e,n;return t(this,function(t){switch(t.label){case 0:return[4,window.atomVars.home];case 1:return e=t.sent(),[2,null!=(n=o.resolve(r.join(e,"markdown-preview-plus")))?n:r.join(e,"markdown-preview-plus.cson")]}})})}function p(e){return o.isObjectPath(e)?o.readFileSync(e,function(t,n){return void 0===n&&(n={}),void 0!==t&&(console.warn("Error reading Latex Macros file '"+e+"': "+(void 0!==t.stack?t.stack:t)),console.error("Failed to load Latex Macros from '"+e+"'",{detail:t.message,dismissable:!0})),n}):{}}function v(){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,m()];case 1:return e=t.sent(),a.isFileSync(e)?[2,p(e)]:(console.debug("Creating markdown-preview-plus.cson, this is a one-time operation."),b(e),[2,p(e)])}})})}function b(e){var t=r.join(__dirname,"../assets/macros-template.cson"),n=i.readFileSync(t,"utf8");i.writeFileSync(e,n)}function x(e){var t=/^[^a-zA-Z\d\s]$|^[a-zA-Z]*$/;for(var n in e){var r=e[n];n.match(t)&&w(r)||(delete e[n],console.error("Failed to load LaTeX macro named '"+n+"'. Please see the [LaTeX guide](https://github.com/atom-community/markdown-preview-plus/blob/master/docs/math.md#macro-names)"))}return e}function w(e){if(Array.isArray(e)){var t=e[0],n=e[1];return"number"==typeof n&&(n%1==0&&"string"==typeof t)}return"string"==typeof e}function y(){return e(this,void 0,void 0,function(){var e,n,r,o;return t(this,function(t){switch(t.label){case 0:return[4,window.atomVars.mathJaxConfig];case 1:return e=t.sent(),r=(n=MathJax.Hub).Config,o={jax:["input/TeX","output/"+e.renderer],extensions:[]},[4,f()];case 2:return r.apply(n,[(o.TeX=t.sent(),o["HTML-CSS"]={availableFonts:[],webFont:"TeX",imageFont:null,undefinedFamily:e.undefinedFamily,mtextFontInherit:!0},o.messageStyle="none",o.showMathMenu=!1,o.skipStartupTypeset=!0,o)]),MathJax.Hub.Configured(),console.log("Loaded maths rendering engine MathJax"),[2]}})})}function M(){return e(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return console.log("Loading maths rendering engine MathJax"),[4,Promise.all([g(u)])];case 1:return e.sent(),[4,y()];case 2:return e.sent(),[2]}})})}function g(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){return(e=document.createElement("script")).src=n,e.type="text/javascript",document.head.appendChild(e),[2,new Promise(function(t){e.addEventListener("load",function(){return t()})})]})})}function J(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return Array.from(document.querySelectorAll('script[type^="math/tex"]')).some(function(e){return!e.id})?[4,window.atomVars.mathJaxConfig]:[2];case 1:return e=t.sent(),[2,new Promise(function(t){MathJax.InputJax.TeX&&(MathJax.Hub.Queue(["resetEquationNumbers",MathJax.InputJax.TeX]),e.numberEquations&&(MathJax.Hub.Queue(["PreProcess",MathJax.Hub]),MathJax.Hub.Queue(["Reprocess",MathJax.Hub]))),MathJax.Hub.Queue(["Typeset",MathJax.Hub,n]),MathJax.Hub.Queue([t])})]}})})}exports.mathProcessor=s,exports.processHTMLString=c,exports.rerenderMath=l,exports.unloadMathJax=h,exports.jaxTeXConfig=f;
},{"./util":5}],3:[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};exports.__esModule=!0;var n=require("morphdom"),r=require("./mathjax-helper"),o=function(){function o(e){this.dom=e}return o.prototype.update=function(o,i){return e(this,void 0,void 0,function(){var e,a,u,c;return t(this,function(t){for(e=function(e){var t=e.firstElementChild;if(!t||"SCRIPT"!==t.nodeName)return"continue";e.isSameNode=function(e){if("SPAN"!==e.nodeName)return!1;var n=e;if(!n.classList.contains("math"))return!1;var r=n.querySelector("script");return!!r&&t.innerHTML===r.innerHTML}},a=0,u=Array.from(o.querySelectorAll("span.math"));a<u.length;a++)c=u[a],e(c);return n(this.dom,o,{childrenOnly:!0,onElUpdated:function(e){"LI"===e.tagName&&(e.innerHTML=e.innerHTML)}}),i?[2,r.mathProcessor(this.dom)]:[2]})})},o}();exports.UpdatePreview=o;
},{"./mathjax-helper":4}],6:[function(require,module,exports) {
"use strict";function e(e){return e.querySelectorAll("img[src],audio[src],video[src]")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMedia=e;
},{}],2:[function(require,module,exports) {
"use strict";var e=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,u)}c((n=n.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},o=this;exports.__esModule=!0;var i,a=require("electron"),u=require("./update-preview"),c=require("./mathjax-helper"),s=n(require("./util")),d=require("../src/util-common");function l(){var e,t=new Promise(function(t){return e=t});return t.resolve=e,t}window.atomVars={home:l(),mathJaxConfig:l(),sourceLineMap:new Map,revSourceMap:new WeakMap},a.ipcRenderer.on("init",function(t,r){var n=r.atomHome,o=r.mathJaxConfig,i=r.mathJaxRenderer;window.atomVars.home.resolve(n),window.atomVars.mathJaxConfig.resolve(e({},o,{renderer:i}))}),a.ipcRenderer.on("set-source-map",function(e,t){var r=t.map,n=document.querySelector("div.update-preview");if(!n)throw new Error("No root element!");for(var o=new Map,i=new WeakMap,a=0,u=Object.keys(r);a<u.length;a++){var c=u[a],d=parseInt(c,10),l=r[d],p=s.resolveElement(n,l);if(p){o.set(d,p);var m=i.get(p);m?m.push(d):i.set(p,[d])}}window.atomVars.sourceLineMap=o,window.atomVars.revSourceMap=i}),a.ipcRenderer.on("scroll-sync",function(e,t){var r,n,o=t.firstLine,i=t.lastLine,a=Math.floor(.5*(o+i)),u=window.atomVars.sourceLineMap;for(r=a;r>=0&&!(n=u.get(r));r-=1);if(n){var c,s,d=Math.max.apply(Math,Array.from(u.keys()));for(c=a+1;c<d&&!(s=u.get(c));c+=1);if(s){var l=n.getBoundingClientRect().top,p=s.getBoundingClientRect().top,m=(a-o)/(i-o),f=document.documentElement.scrollTop-document.documentElement.clientHeight/2+l+m*(p-l);window.scroll({top:f})}}}),a.ipcRenderer.on("style",function(e,t){var r=t.styles,n=document.head.querySelector("style#atom-styles");n||((n=document.createElement("style")).id="atom-styles",document.head.appendChild(n)),n.innerHTML=r.join("\n")}),a.ipcRenderer.on("update-images",function(e,t){for(var r=t.oldsrc,n=t.v,o=d.getMedia(document),i=0,a=Array.from(o);i<a.length;i++){var u=a[i],c=void 0,s=void 0,l=u.getAttribute("src"),p=l.match(/^(.*)\?v=(\d+)$/);p&&(l=p[1],c=p[2]),l===r&&(void 0!==c&&(s=parseInt(c,10)),n!==s&&(u.src=n?l+"?v="+n:""+l))}}),a.ipcRenderer.on("sync",function(e,t){var r=t.line;if(document.querySelector("div.update-preview")){var n=window.atomVars.sourceLineMap.get(r);if(!n)for(var o=r-1;o>=0&&!(n=window.atomVars.sourceLineMap.get(r));o-=1);n&&(n.scrollIntoViewIfNeeded(!0),n.classList.add("flash"),setTimeout(function(){return n.classList.remove("flash")},1e3))}}),a.ipcRenderer.on("use-github-style",function(e,t){var r=t.value,n=document.querySelector("markdown-preview-plus-view");if(!n)throw new Error("Can't find MPP-view");r?n.setAttribute("data-use-github-style",""):n.removeAttribute("data-use-github-style")}),a.ipcRenderer.on("update-preview",function(e,n){var d=n.id,l=n.html,p=n.renderLaTeX,m=document.querySelector("div.update-preview");if(m){i||(i=new u.UpdatePreview(m));var f=(new DOMParser).parseFromString(l,"text/html");s.handlePromise(i.update(f.body,p).then(function(){return t(o,void 0,void 0,function(){var e,t,n,o;return r(this,function(r){switch(r.label){case 0:return t=(e=a.ipcRenderer).sendToHost,n=["request-reply"],o={id:d,request:"update-preview"},[4,c.processHTMLString(m)];case 1:return t.apply(e,n.concat([(o.result=r.sent(),o)])),[2]}})})}));var h=document;if(h&&f.head.hasChildNodes){var v=h.head.querySelector("original-elements");v||(v=h.createElement("original-elements"),h.head.appendChild(v)),v.innerHTML="";for(var w=0,y=Array.from(f.head.childNodes);w<y.length;w++){var g=y[w];v.appendChild(g)}}}});var p,m=document.createElement("base");document.head.appendChild(m),a.ipcRenderer.on("set-base-path",function(e,t){var r=t.path;m.href=r||""}),a.ipcRenderer.on("error",function(e,t){var r=t.msg,n=document.querySelector("div.update-preview");if(n){var o=document.createElement("div");o.innerHTML="<h2>Previewing Markdown Failed</h2><h3>"+r+"</h3>",n.appendChild(o)}}),document.addEventListener("mousewheel",function(e){e.ctrlKey&&(e.wheelDeltaY>0?a.ipcRenderer.sendToHost("zoom-in",void 0):e.wheelDeltaY<0&&a.ipcRenderer.sendToHost("zoom-out",void 0),e.preventDefault(),e.stopPropagation())}),document.addEventListener("scroll",function(e){var t=document.documentElement.clientHeight,r=Array.from(window.atomVars.sourceLineMap.entries()).filter(function(e){e[0];var r=e[1].getBoundingClientRect(),n=r.top,o=r.bottom;return n>0&&o<t}).map(function(e){var t=e[0];e[1];return t});a.ipcRenderer.sendToHost("did-scroll-preview",{max:Math.max.apply(Math,r),min:Math.min.apply(Math,r)})}),document.addEventListener("contextmenu",function(e){p=e.target}),a.ipcRenderer.on("sync-source",function(e,t){for(var r=t.id,n=p,o=window.atomVars.revSourceMap,i=o.get(n);!i&&n.parentElement;)n=n.parentElement,i=o.get(n);i&&a.ipcRenderer.sendToHost("request-reply",{id:r,request:"sync-source",result:Math.min.apply(Math,i)})}),a.ipcRenderer.on("reload",function(e,t){var r=t.id;window.onbeforeunload=null,a.ipcRenderer.sendToHost("request-reply",{id:r,request:"reload",result:void 0})}),window.onbeforeunload=function(){return!1},a.ipcRenderer.on("get-tex-config",function(e,n){var i=n.id;return t(o,void 0,void 0,function(){var e,t,n,o;return r(this,function(r){switch(r.label){case 0:return t=(e=a.ipcRenderer).sendToHost,n=["request-reply"],o={id:i,request:"get-tex-config"},[4,c.jaxTeXConfig()];case 1:return t.apply(e,n.concat([(o.result=r.sent(),o)])),[2]}})})}),a.ipcRenderer.on("set-width",function(e,n){var i=n.id,u=n.width;return t(o,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return void 0===u?document.documentElement.style.removeProperty("width"):document.documentElement.style.setProperty("width",u+"mm","important"),[4,c.rerenderMath()];case 1:return e.sent(),a.ipcRenderer.sendToHost("request-reply",{id:i,request:"set-width",result:void 0}),[2]}})})});
},{"./update-preview":3,"./mathjax-helper":4,"./util":5,"../src/util-common":6}]},{},[2])
//# sourceMappingURL=main.b9f3301d.map