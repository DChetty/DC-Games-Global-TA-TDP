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
})({"86oZd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Function to output text to the display output
parcelHelpers.export(exports, "outputText", ()=>outputText);
// Function to set an image source on an element
parcelHelpers.export(exports, "replaceImg", ()=>replaceImg);
var _droneJs = require("./drone.js"); // Import the Drone class
var _droneJsDefault = parcelHelpers.interopDefault(_droneJs);
var _projectileJs = require("./projectile.js"); // Import the Projectile class
var _projectileJsDefault = parcelHelpers.interopDefault(_projectileJs);
const board = document.getElementById("board"); // Reference to the game board element
const commandList = document.querySelector(".commandListText"); // Reference to the command list display element
const commandListLinks = document.querySelector(".flexbox-left"); // Reference to the command button container
const outputBox = document.querySelector(".outputDisplay"); // Reference to the output display
const submitButton = document.querySelector(".submit-button"); // Reference to the submit button
const inputField = document.querySelector(".input-field"); // Reference to the input field for commands
const drone = new (0, _droneJsDefault.default)(board); // Create an instance of Drone
const projectile = new (0, _projectileJsDefault.default)(board); // Create an instance of Projectile
let commandInput = true; // Flag to track if initial "PLACE" command has been given
// Setting up the command list UI
commandList.innerHTML = `
    <h5 class="commandList__header">Commands</h5>
        <ul class="commandList">
            <li class="commandButton linkstyle">Place</li>
            <li class="commandButton linkstyle">Move</li>
            <li class="commandButton linkstyle">Left</li>
            <li class="commandButton linkstyle">Right</li>
            <li class="commandButton linkstyle">Attack</li>
            <li class="commandButton linkstyle">Report</li>
        </ul>
 `;
outputBox.innerHTML = `
    <h5 class="output__header">Output</h5>
        <div class="display_output"></div>
 `;
// Event listener for the submit button
submitButton.addEventListener("click", function() {
    const inputValue = inputField.value.toUpperCase(); // Get input value in uppercase
    if (inputValue.includes("PLACE") || inputValue.includes("ATTACK")) {
        const [command, options] = inputValue.split(" "); // Split input into command and options
        commandListRun(command, options); // Run the command with options
    } else commandListRun(inputValue); // Run command without options
    inputField.value = ""; // Clear the input field
});
// Function to allow further commands only after "PLACE"
function notPlaced(input) {
    if (input === "PLACE") commandInput = false; // Unlock command input after "PLACE"
}
function outputText(text) {
    const displayOutput = document.querySelector(".display_output");
    displayOutput.innerHTML += text + "</br>"; // Append text to output area
}
// Function to handle command execution
function commandListRun(command, options = "0,0,NORTH") {
    notPlaced(command); // Check if the drone has been placed first
    if (commandInput) outputText(`Error - Place command should be completed first`); // Show error if "PLACE" is missing
    else {
        switch(command){
            case "PLACE":
                const [x, y, facing] = options.split(","); // Parse options for PLACE command
                if (drone.collition()) return outputText(`Collision - Cannot complete ${command}`);
                drone.update({
                    x,
                    y,
                    facing
                }); // Update drone position
                projectile.update({
                    x: drone.x,
                    y: drone.y,
                    facing: drone.facing
                }); // Update projectile position
                break;
            case "MOVE":
                if (drone.collition()) return outputText(`Collision - Cannot complete ${command}`);
                drone.move(); // Move drone in the current facing direction
                projectile.update({
                    x: drone.x,
                    y: drone.y,
                    facing: drone.facing
                });
                outputText(`${command} Drone moved 1 space forward`);
                break;
            case "LEFT":
                outputText(`${command} Drone turned left`);
                drone.left(); // Rotate drone to the left
                projectile.update({
                    x: drone.x,
                    y: drone.y,
                    facing: drone.facing
                });
                break;
            case "RIGHT":
                outputText(`${command} Drone turned right`);
                drone.right(); // Rotate drone to the right
                projectile.update({
                    x: drone.x,
                    y: drone.y,
                    facing: drone.facing
                });
                break;
            case "ATTACK":
                if (projectile.collition()) return outputText(`Collision - Cannot complete ${command}`);
                projectile.attack(); // Execute attack action with the projectile
                break;
            case "REPORT":
                outputText(`${command} ${drone.x},${drone.y},${drone.facing}`); // Display drone's position and facing direction
                break;
        }
        // Draw the drone and projectile on the board after each command
        drone.draw();
        projectile.draw();
    }
}
// Event handler for command button clicks
const buttonEvent = function(e) {
    const element = e.target.closest("li");
    if (element === null) return;
    if (element.classList[0] === "commandButton") {
        const command = element.innerText.toUpperCase(); // Get command text in uppercase
        if (command === "PLACE") commandListRun(command, "0,0,NORTH"); // Default PLACE coordinates
        else commandListRun(command);
    }
};
// Attach event listeners to the command buttons for click and touch events
commandListLinks.addEventListener("click", buttonEvent);
commandListLinks.addEventListener("touch", buttonEvent);
// Array of image file names to load
let images = [
    "droneEAST.png",
    "droneNORTH.png",
    "droneSOUTH.png",
    "droneWEST.png",
    "explosionEAST.png",
    "explosionNORTH.png",
    "explosionSOUTH.png",
    "explosionWEST.png",
    "projectileEAST.png",
    "projectileNORTH.png",
    "projectileSOUTH.png",
    "projectileWEST.png"
];
// Preloader setup for loading images and showing progress
let bar_percentage = document.getElementById("bar_percentage");
let percentage_number = document.getElementById("percentage_number");
let loaderOverlay = document.getElementById("loaderOverlay");
let img_queue = new createjs.LoadQueue();
let completedProgress = 0;
img_queue.addEventListener("progress", (event)=>{
    let progress_percentage = Math.floor(event.progress * 100);
    bar_percentage.style.width = progress_percentage + "%"; // Update progress bar width
    percentage_number.innerHTML = progress_percentage + "%"; // Update percentage text
    console.log("progress " + Math.floor(event.progress * 100));
    if (progress_percentage === 100) preloaderComplete();
});
// Load each image file in the queue
images.forEach((element)=>{
    img_queue.loadFile(`img/${element}`);
});
// Function to hide the loader overlay after preloading completes
function preloaderComplete() {
    loaderOverlay.remove();
}
let loadedImages = new Map(); // Map to store loaded images
// Add loaded image files to the map
img_queue.addEventListener("fileload", (e)=>{
    addImg(e.item.id, e.loader._rawResult);
});
function replaceImg(element, id) {
    const imgBlob = loadedImages.get(id);
    if (imgBlob) {
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(imgBlob);
        element.src = imageUrl; // Set image URL as source
    }
}
// Add image data to the loadedImages map if not already present
function addImg(id, loadedImg) {
    if (!loadedImages.has(id)) loadedImages.set(id, loadedImg);
}

},{"./drone.js":"9bz5M","./projectile.js":"lOA3z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bz5M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scriptJs = require("./script.js");
const maxColumns = 10;
const maxRows = 10;
const yMap = new Map();
const xMap = new Map();
let j = maxRows;
// invert Y axes to follow documentation so that y start at bottom of screen
for(let i = 0; i < maxRows; i++)yMap.set(i, j--);
yMap.set(maxRows, -1);
for(let i = 0; i < maxColumns; i++)xMap.set(i, i + 1);
xMap.set(maxColumns, -1);
console.log("drone");
console.log(xMap, yMap);
class Drone {
    constructor(board){
        this.board = board;
        this.x;
        this.y;
        this.facing = "NORTH";
        this.incorrectPlace = false;
    }
    draw(delta) {
        if (this.incorrectPlace) return;
        this.board.innerHTML = "";
        let drone = document.createElement("img");
        (0, _scriptJs.replaceImg)(drone, `img/drone${this.facing}.png`);
        drone.style.gridRowStart = yMap.get(Number(this.y));
        drone.style.gridColumnStart = xMap.get(Number(this.x));
        drone.classList.add("drone");
        this.board.appendChild(drone);
    }
    update(options) {
        if (options.x < 0 || options.x > maxColumns - 1 || options.y < 0 || options.y > maxRows - 1) {
            this.incorrectPlace = true;
            return (0, _scriptJs.outputText)(`Incorrect values - Value must be possitive or on the board (${maxColumns}x${maxRows}. The value start at 0 until 9).
             Input value: ${options.x} , ${options.y} , ${options.facing}`);
        } else {
            this.incorrectPlace = false;
            this.x = options.x == null ? this.x : Number(options.x);
            this.y = options.y == null ? this.y : Number(options.y);
            this.facing = options.facing == null ? this.facing : options.facing;
        }
    }
    left() {
        this.rotate(true);
    }
    right() {
        this.rotate(false);
    }
    // rotate either left or right
    rotate(isLeft) {
        switch(this.facing){
            case "NORTH":
                this.update({
                    facing: isLeft ? "WEST" : "EAST"
                });
                break;
            case "SOUTH":
                this.update({
                    facing: isLeft ? "EAST" : "WEST"
                });
                break;
            case "WEST":
                this.update({
                    facing: isLeft ? "SOUTH" : "NORTH"
                });
                break;
            case "EAST":
                this.update({
                    facing: isLeft ? "NORTH" : "SOUTH"
                });
                break;
        }
    }
    // Move 1 space in current facing direction
    move() {
        switch(this.facing){
            case "NORTH":
                this.update({
                    y: this.y + 1
                });
                break;
            case "SOUTH":
                this.update({
                    y: this.y - 1
                });
                break;
            case "WEST":
                this.update({
                    x: this.x - 1
                });
                break;
            case "EAST":
                this.update({
                    x: this.x + 1
                });
                break;
        }
    }
    collition() {
        return this.x < 0 || this.x > maxColumns - 1 || this.y < 0 || this.y > maxRows - 1;
    }
} //dc
exports.default = Drone;

},{"./script.js":"6rimH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"lOA3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scriptJs = require("./script.js"); // Import function to replace the image source
const maxColumns = 10; // Define the maximum number of columns on the board
const maxRows = 10; // Define the maximum number of rows on the board
const yMap = new Map(); // Map to store the y-axis values in inverted order
const xMap = new Map(); // Map to store the x-axis values
let j = maxRows;
// Invert Y axes to follow documentation so that y starts at the bottom of the screen
for(let i = 0; i < maxRows; i++)yMap.set(i, j--);
yMap.set(maxRows, -1); // Set an out-of-bounds row index for maxRows
// Initialize xMap with 1-based column indices
for(let i = 0; i < maxColumns; i++)xMap.set(i, i + 1);
xMap.set(maxColumns, -1); // Set an out-of-bounds column index for maxColumns
console.log("projectile"); // Log to verify this module loads
console.log(xMap, yMap); // Log maps to confirm setup
class Projectile {
    constructor(board){
        this.board = board; // Reference to the game board element
        this.projectileElem = document.createElement("img"); // Element representing the projectile
        this.x; // X-coordinate for projectile
        this.y; // Y-coordinate for projectile
        this.facing = "North"; // Default direction for the projectile
        this.explosion = false; // Flag to track if projectile has exploded
    }
    // Draws the projectile on the board
    draw() {
        if (!this.explosion) (0, _scriptJs.replaceImg)(this.projectileElem, `img/projectile${this.facing}.png`);
        // Position the projectile on the grid
        this.projectileElem.style.gridRowStart = yMap.get(Number(this.y));
        this.projectileElem.style.gridColumnStart = xMap.get(Number(this.x));
        this.projectileElem.classList.add("projectile"); // Add class for styling
        this.board.appendChild(this.projectileElem); // Append to board
    }
    // Update projectile's position and direction
    update(options) {
        this.x = options.x == null ? this.x : Number(options.x);
        this.y = options.y == null ? this.y : Number(options.y);
        this.facing = options.facing == null ? this.facing : options.facing;
        this.draw(); // Redraw projectile after update
    }
    // Animates the projectile movement and explosion
    // Uses nested timeouts to handle the sequence of movements and explosion
    shoot(pos1, pos2) {
        this.projectileElem.style.display = "block";
        setTimeout(()=>{
            this.update(pos1);
            setTimeout(()=>{
                this.update(pos2);
                setTimeout(()=>{
                    this.explosion = true;
                    (0, _scriptJs.replaceImg)(this.projectileElem, `img/explosion${this.facing}.png`);
                    setTimeout(()=>{
                        this.explosion = false;
                        this.projectileElem.style.display = "none"; // Hide projectile after explosion
                    }, "500"); // Duration of explosion
                }, "500"); // Duration for second position
            }, "500"); // Duration for first position
        }, "500"); // Initial delay for animation
    }
    // Triggers an attack based on the direction the projectile is facing
    attack() {
        switch(this.facing){
            case "NORTH":
                this.shoot({
                    y: this.y + 1
                }, {
                    y: this.y + 2
                });
                break;
            case "SOUTH":
                this.shoot({
                    y: this.y - 1
                }, {
                    y: this.y - 2
                });
                break;
            case "WEST":
                this.shoot({
                    x: this.x - 1
                }, {
                    x: this.x - 2
                });
                break;
            case "EAST":
                this.shoot({
                    x: this.x + 1
                }, {
                    x: this.x + 2
                });
                break;
        }
    }
    // Checks if the projectile is near the edges of the board
    collision() {
        console.log(this.y);
        return this.x <= 1 || this.x >= maxColumns - 2 || this.y <= 1 || this.y >= maxRows - 2;
    }
}
exports.default = Projectile;

},{"./script.js":"6rimH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["86oZd","6rimH"], "6rimH", "parcelRequiredbe8")

//# sourceMappingURL=index.8cfc62b9.js.map
