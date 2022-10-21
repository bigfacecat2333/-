// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"awEvQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _prettyPrintJson = require("pretty-print-json");
var _copyToClipboard = require("copy-to-clipboard");
var _copyToClipboardDefault = parcelHelpers.interopDefault(_copyToClipboard);
var _gotpl = require("gotpl");
var _gotplDefault = parcelHelpers.interopDefault(_gotpl);
const regexQuestionSplit = /\n\s*\n/gm;
const regexQuestionRowSplit = /\n/gm;
const regexTitle1 = /(?<index>\d+)[.、][\s]*(?<title>[^\n]*)$/;
const retexTitle2 = /(?<index>\d+)[.、][\s]*(?<title>[^\[【]*)[\[【](?<type>\W+)[\]】]$/;
let resultObj = {
    id: 0,
    name: "",
    questions: []
};
let resultJson = "";
const tpl = `
<div class="question">
  <div class="row">
    问卷ID：<%= id %>
  </div>
  <div class="row">
    问卷名称：<%= name %>
  </div>
  <% for(var i=0, l=questions.length; i<l; ++i){ %>
    <% var item = questions[i]; %>
    <div class="question-wrap">
      <div class="question-title"><%= item.id %>. <%= item.title %>【<%=item.question_type_text %>】</div>
      <% if(item.question_type === 'input'){ %>
        <div class="input">
          <input type="text" name="<%= item.id %>" />
        </div>
      <% }else if(item.question_type === 'radio'){ %>
        <div class="radio">
          <% for(var j=0, k=item.options.length; j<k; ++j){ %>
            <label class="label">
              <input type="radio" name="<%= item.id %>" value="<%= item.options[j].option_id %>" />
              <%= item.options[j].option_id %>.
              <%= item.options[j].option_value %>
            </label>
          <% } %>
        </div>
      <% }else if(item.question_type === 'checkbox'){ %>
        <div class="checkbox">
          <% for(var j=0, k=item.options.length; j<k; ++j){ %>
            <label class="label">
              <input type="checkbox" name="<%= item.id %>" value="<%= item.options[j].option_id %>" />
              <%= item.options[j].option_id %>.
              <%= item.options[j].option_value %>
            </label>
          <% } %>
        </div>
      <% } %>
    </div>
  <% } %>
</div>
`;
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z", 
];
const type_map = {
    填空题: "input",
    单选题: "radio",
    多选题: "checkbox"
};
function getQuestionType(questionType) {
    return type_map[questionType] || "类型错误";
}
function formatQuestion(index, title, typeText, options = null) {
    // console.log(index, title, questionType);
    const questionType = getQuestionType(typeText);
    let question = {
        id: +index,
        title: title,
        question_type: questionType,
        question_type_text: typeText
    };
    // console.log(options);
    if (options && options.length) {
        let tmpOptions = [];
        options.forEach((item, index)=>{
            tmpOptions.push({
                option_id: alphabet[index],
                option_value: item
            });
        });
        question.options = tmpOptions;
    }
    return question;
}
document.getElementById("btn").addEventListener("click", function() {
    resultObj.id = +document.getElementById("qid").value.trim();
    resultObj.name = document.getElementById("qname").value.trim();
    // 用户输入的字符串
    let text = document.getElementById("text").value;
    // console.log(text);
    // 按空行分割题目
    let questionArr = text.split(regexQuestionSplit);
    // console.log(questionArr);
    let questions = [];
    // 开始对每个题目进行处理
    questionArr.forEach((q)=>{
        // 分割每一行
        let rows = q.split(regexQuestionRowSplit);
        // console.log(JSON.stringify(rows));
        // 去掉空行
        rows = rows.filter((item)=>item.trim() !== "");
        // console.log(JSON.stringify(rows));
        // 全部去掉前后空格
        rows = rows.reduce((acc, cur)=>{
            return [
                ...acc,
                cur.trim()
            ];
        }, []);
        // console.log(JSON.stringify(rows));
        // 如果是单行，是填空题
        if (rows.length === 1) {
            if (regexTitle1.test(rows[0])) {
                let matches = rows[0].match(regexTitle1);
                // console.log(matches);
                let { index , title  } = matches.groups;
                questions.push(formatQuestion(index, title, "填空题"));
            }
        }
        // console.log(questions);
        // 多行，可能是单选或多选
        if (rows.length > 1) {
            // 第一行是标题，其他行是选项
            let [titleRow, ...options] = rows;
            // console.log("titleRow", titleRow);
            // console.log("options", options);
            // 先验证带题目类型的格式
            if (retexTitle2.test(titleRow)) {
                let matches1 = titleRow.match(retexTitle2);
                //  console.log(matches)
                let { index: index1 , title: title1 , type  } = matches1.groups;
                questions.push(formatQuestion(index1, title1, type, options));
            } else if (regexTitle1.test(titleRow)) {
                // 没有设置类型的，当成单选题
                let matches2 = titleRow.match(regexTitle1);
                let { index: index2 , title: title2  } = matches2.groups;
                console.log(index2, title2, options);
                questions.push(formatQuestion(index2, title2, "单选题", options));
            }
        // console.log(questions);
        }
    });
    resultObj.questions = questions;
    resultJson = JSON.stringify(resultObj);
    console.log(resultObj);
    document.getElementById("json-preview").innerHTML = (0, _prettyPrintJson.prettyPrintJson).toHtml(resultObj);
    document.getElementById("html-preview").innerHTML = (0, _gotplDefault.default).render(tpl, resultObj);
});
document.getElementById("copy").onclick = ()=>{
    (0, _copyToClipboardDefault.default)(resultJson);
    alert("已复制到剪贴板");
};

},{"pretty-print-json":"7pQ5a","copy-to-clipboard":"fLPFI","gotpl":"MiibU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pQ5a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prettyPrintJson", ()=>prettyPrintJson);
//! pretty-print-json v1.3.1 ~~ https://pretty-print-json.js.org ~~ MIT License
const prettyPrintJson = {
    version: "1.3.1",
    toHtml (thing, options) {
        const defaults = {
            indent: 3,
            lineNumbers: false,
            linkUrls: true,
            linksNewTab: true,
            quoteKeys: false
        };
        const settings = Object.assign(Object.assign({}, defaults), options);
        const htmlEntities = (text)=>text.replace(/&/g, "&amp;").replace(/\\"/g, "&bsol;&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const spanTag = (type, display)=>display ? "<span class=json-" + type + ">" + display + "</span>" : "";
        const buildValueHtml = (value)=>{
            const strType = /^"/.test(value) && "string";
            const boolType = [
                "true",
                "false"
            ].includes(value) && "boolean";
            const nullType = value === "null" && "null";
            const type = boolType || nullType || strType || "number";
            const urlPattern = /https?:\/\/[^\s"]+/g;
            const target = settings.linksNewTab ? " target=_blank" : "";
            const makeLink = (link)=>`<a class=json-link href="${link}"${target}>${link}</a>`;
            const display = strType && settings.linkUrls ? value.replace(urlPattern, makeLink) : value;
            return spanTag(type, display);
        };
        const replacer = (match, p1, p2, p3, p4)=>{
            const part = {
                indent: p1,
                key: p2,
                value: p3,
                end: p4
            };
            const findName = settings.quoteKeys ? /(.*)(): / : /"([\w$]+)": |(.*): /;
            const indentHtml = part.indent || "";
            const keyName = part.key && part.key.replace(findName, "$1$2");
            const keyHtml = part.key ? spanTag("key", keyName) + spanTag("mark", ": ") : "";
            const valueHtml = part.value ? buildValueHtml(part.value) : "";
            const endHtml = spanTag("mark", part.end);
            return indentHtml + keyHtml + valueHtml + endHtml;
        };
        const jsonLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([{}[\],]*)?$/mg;
        const json = JSON.stringify(thing, null, settings.indent) || "undefined";
        const html = htmlEntities(json).replace(jsonLine, replacer);
        const makeLine = (line)=>`   <li>${line}</li>`;
        const addLineNumbers = (html)=>[
                "<ol class=json-lines>",
                ...html.split("\n").map(makeLine),
                "</ol>"
            ].join("\n");
        return settings.lineNumbers ? addLineNumbers(html) : html;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fLPFI":[function(require,module,exports) {
"use strict";
var deselectCurrent = require("toggle-selection");
var clipboardToIE11Formatting = {
    "text/plain": "Text",
    "text/html": "Url",
    "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
    var debug, message, reselectPrevious, range, selection, mark, success = false;
    if (!options) options = {};
    debug = options.debug || false;
    try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        // avoid screen readers from reading out loud the text
        mark.ariaHidden = "true";
        // reset user styles for span element
        mark.style.all = "unset";
        // prevents scrolling to the end of the page
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        // used to preserve spaces and line breaks
        mark.style.whiteSpace = "pre";
        // do not inherit user-select (it may be `none`)
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
            e.stopPropagation();
            if (options.format) {
                e.preventDefault();
                if (typeof e.clipboardData === "undefined") {
                    debug && console.warn("unable to use e.clipboardData");
                    debug && console.warn("trying IE specific stuff");
                    window.clipboardData.clearData();
                    var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
                    window.clipboardData.setData(format, text);
                } else {
                    e.clipboardData.clearData();
                    e.clipboardData.setData(options.format, text);
                }
            }
            if (options.onCopy) {
                e.preventDefault();
                options.onCopy(e.clipboardData);
            }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) throw new Error("copy command was unsuccessful");
        success = true;
    } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(options.format || "text", text);
            options.onCopy && options.onCopy(window.clipboardData);
            success = true;
        } catch (err1) {
            debug && console.error("unable to copy using clipboardData: ", err1);
            debug && console.error("falling back to prompt");
            message = format("message" in options ? options.message : defaultMessage);
            window.prompt(message, text);
        }
    } finally{
        if (selection) {
            if (typeof selection.removeRange == "function") selection.removeRange(range);
            else selection.removeAllRanges();
        }
        if (mark) document.body.removeChild(mark);
        reselectPrevious();
    }
    return success;
}
module.exports = copy;

},{"toggle-selection":"jmaua"}],"jmaua":[function(require,module,exports) {
module.exports = function() {
    var selection = document.getSelection();
    if (!selection.rangeCount) return function() {};
    var active = document.activeElement;
    var ranges = [];
    for(var i = 0; i < selection.rangeCount; i++)ranges.push(selection.getRangeAt(i));
    switch(active.tagName.toUpperCase()){
        case "INPUT":
        case "TEXTAREA":
            active.blur();
            break;
        default:
            active = null;
            break;
    }
    selection.removeAllRanges();
    return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) ranges.forEach(function(range) {
            selection.addRange(range);
        });
        active && active.focus();
    };
};

},{}],"MiibU":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function unwrapExports(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
    }
    function createCommonjsModule(fn, module1) {
        return module1 = {
            exports: {}
        }, fn(module1, module1.exports), module1.exports;
    }
    var jsTokens = createCommonjsModule(function(module1, exports) {
        // Copyright 2014, 2015, 2016, 2017, 2018 Simon Lydell
        // License: MIT. (See LICENSE.)
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        // This regex comes from regex.coffee, and is inserted here by generate-index.js
        // (run `npm run build`).
        exports.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
        exports.matchToToken = function(match) {
            var token = {
                type: "invalid",
                value: match[0],
                closed: undefined
            };
            if (match[1]) token.type = "string", token.closed = !!(match[3] || match[4]);
            else if (match[5]) token.type = "comment";
            else if (match[6]) token.type = "comment", token.closed = !!match[7];
            else if (match[8]) token.type = "regex";
            else if (match[9]) token.type = "number";
            else if (match[10]) token.type = "name";
            else if (match[11]) token.type = "punctuator";
            else if (match[12]) token.type = "whitespace";
            return token;
        };
    });
    var jsTokens$1 = unwrapExports(jsTokens);
    var jsTokens_1 = jsTokens.matchToToken;
    // List extracted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
    var reservedKeywords = {
        "abstract": true,
        "await": true,
        "boolean": true,
        "break": true,
        "byte": true,
        "case": true,
        "catch": true,
        "char": true,
        "class": true,
        "const": true,
        "continue": true,
        "debugger": true,
        "default": true,
        "delete": true,
        "do": true,
        "double": true,
        "else": true,
        "enum": true,
        "export": true,
        "extends": true,
        "false": true,
        "final": true,
        "finally": true,
        "float": true,
        "for": true,
        "function": true,
        "goto": true,
        "if": true,
        "implements": true,
        "import": true,
        "in": true,
        "instanceof": true,
        "int": true,
        "interface": true,
        "let": true,
        "long": true,
        "native": true,
        "new": true,
        "null": true,
        "package": true,
        "private": true,
        "protected": true,
        "public": true,
        "return": true,
        "short": true,
        "static": true,
        "super": true,
        "switch": true,
        "synchronized": true,
        "this": true,
        "throw": true,
        "transient": true,
        "true": true,
        "try": true,
        "typeof": true,
        "var": true,
        "void": true,
        "volatile": true,
        "while": true,
        "with": true,
        "yield": true
    };
    var isKeywordJs = function(str) {
        return reservedKeywords.hasOwnProperty(str);
    };
    /*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */ /**
	 * Module variables.
	 * @private
	 */ var matchHtmlRegExp = /["'&<>]/;
    /**
	 * Module exports.
	 * @public
	 */ var escapeHtml_1 = escapeHtml;
    /**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */ function escapeHtml(string) {
        var str = "" + string;
        var match = matchHtmlRegExp.exec(str);
        if (!match) return str;
        var escape;
        var html = "";
        var index = 0;
        var lastIndex = 0;
        for(index = match.index; index < str.length; index++){
            switch(str.charCodeAt(index)){
                case 34:
                    escape = "&quot;";
                    break;
                case 38:
                    escape = "&amp;";
                    break;
                case 39:
                    escape = "&#39;";
                    break;
                case 60:
                    escape = "&lt;";
                    break;
                case 62:
                    escape = "&gt;";
                    break;
                default:
                    continue;
            }
            if (lastIndex !== index) html += str.substring(lastIndex, index);
            lastIndex = index + 1;
            html += escape;
        }
        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    /*!
	 * gotpl
	 * https://github.com/Lanfei/gotpl
	 * @author  Jealous
	 * @license MIT
	 */ var version = "8.4.5";
    // Patterns
    var LINE_RE = /\r?\n/g;
    var INDENT_RE = /([\r\n])+\s+/g;
    /**
	 * Default Options
	 */ var defOpts = {
        /** The root of template files */ root: "",
        /** Rendering context, defaults to `global` in node, `window` in browser */ scope: window,
        /** Enable debug information output, defaults to `false` */ debug: false,
        /** Enable caching, defaults to `true` */ cache: true,
        /** Minify indents, defaults to `true` */ minify: true,
        /** Open tag, defaults to `<%` */ openTag: "<%",
        /** Close tag, defaults to `%>` */ closeTag: "%>"
    };
    /**
	 * Update the default options.
	 * @param  {Object} [options] The properties to merge in default options
	 * @return {Object}           Latest default options
	 */ function config(options) {
        if (options) merge(defOpts, options);
        return defOpts;
    }
    /**
	 * Merge giving objects into the first object.
	 * @param  {Object}    target  The object to merge
	 * @param  {...Object} objects Additional objects to merge
	 * @return {Object}            The merged object
	 */ function merge(target, /*...*/ objects) {
        var arguments$1 = arguments;
        var loop = function(i, l) {
            var object = arguments$1[i];
            if (!object) return;
            Object.keys(object).forEach(function(key) {
                target[key] = object[key];
            });
        };
        for(var i = 1, l = arguments.length; i < l; ++i)loop(i, l);
        return target;
    }
    /**
	 * Render the giving template.
	 * @param   {string} template  Template source
	 * @param   {Object} [data]    Template data
	 * @param   {Object} [options] Rendering options
	 * @returns {string}
	 */ function render(template, data, options) {
        options = merge({}, defOpts, options);
        return compile(template, options)(data);
    }
    /**
	 * Return the compiled function.
	 * @param {string} template  Template source
	 * @param {Object} [options] Rendering options
	 * @return {Function}
	 */ function compile(template, options) {
        options = merge({}, defOpts, options);
        var lines = 1;
        var variables = [];
        var scope = options.scope;
        var debug = options.debug;
        var minify = options.minify;
        var openTag = options.openTag;
        var closeTag = options.closeTag;
        var codes = "var $$res = '';\n";
        if (debug) codes = "var $$line;\n" + codes + "try{\n$$line = 1;	";
        // Parse the template
        template.split(closeTag).forEach(function(segment) {
            var split = segment.split(openTag);
            var html = split[0];
            var logic = split[1];
            if (html) {
                var htmlCode;
                if (minify) htmlCode = html.replace(INDENT_RE, "$1");
                else htmlCode = html;
                htmlCode = parseHTML(htmlCode);
                codes += htmlCode + ";\n";
                if (debug) {
                    lines += html.split(LINE_RE).length - 1;
                    codes += "$$line = " + lines + ";	";
                }
            }
            if (logic) {
                var logicCode;
                if (logic.indexOf("=") === 0) {
                    logic = logic.slice(1);
                    logicCode = parseValue(logic, true);
                } else if (logic.indexOf("-") === 0) {
                    logic = logic.slice(1);
                    logicCode = parseValue(logic);
                } else logicCode = logic.trim();
                codes += logicCode + "\n";
                variables = getVariables(logic, variables);
                if (debug) {
                    lines += logic.split(LINE_RE).length - 1;
                    codes += "$$line = " + lines + ";	";
                }
            }
        });
        codes += "return $$res;\n";
        codes = parseVariables(variables) + codes;
        if (debug) codes += "}catch(e){\n$$rethrow(e, $$template, $$line);\n}\n";
        codes = "return function($$data){\n'use strict';\n" + codes + "}";
        function include(path, data) {
            return render(document.getElementById(path).innerHTML.trim(), data, options);
        }
        return new Function("$$scope", "$$template, $$merge, $$escape, $$include, $$rethrow", codes)(scope, template, merge, escapeHtml_1, include, rethrow);
    }
    function parseHTML(codes) {
        return "$$res += " + JSON.stringify(codes);
    }
    function parseValue(codes, escape) {
        if (escape) return "$$res += $$escape(" + codes.trim() + ")";
        else return "$$res += (" + codes + ")";
    }
    function getVariables(codes, variables) {
        var ignore = false;
        codes.match(jsTokens$1).map(function(keyword) {
            jsTokens$1.lastIndex = 0;
            return jsTokens_1(jsTokens$1.exec(keyword));
        }).forEach(function(token) {
            var type = token.type;
            var value = token.value;
            if (!ignore && type === "name" && !isKeywordJs(value) && variables.indexOf(value) < 0) variables.push(value);
            ignore = type === "punctuator" && value === ".";
        });
        return variables;
    }
    function parseVariables(variables) {
        var codes = "$$data = $$data || {};\n$$data.__proto__ = $$scope;\n";
        variables.forEach(function(variable) {
            if (variable === "include") codes += "var include = function (path, data) {return $$include(path, $$merge({}, $$data, data));};\n";
            else codes += "var " + variable + " = $$data['" + variable + "'];\n";
        });
        return codes;
    }
    function rethrow(err, template, line) {
        var lines = template.split(LINE_RE);
        var start = Math.max(line - 3, 0);
        var end = Math.min(lines.length, line + 3);
        err.line = line;
        err.message += "\n\n" + lines.slice(start, end).map(function(codes, i) {
            var curLine = start + i + 1;
            return (curLine === line ? " >> " : "    ") + curLine + "| " + codes;
        }).join("\n") + "\n";
        throw err;
    }
    var gotpl = {
        config: config,
        compile: compile,
        render: render,
        escapeHTML: escapeHtml_1,
        version: version
    };
    return gotpl;
});

},{}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequire1114")

//# sourceMappingURL=index.3d214d75.js.map
