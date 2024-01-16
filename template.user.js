// ==UserScript==
// @name         範本
// @namespace    -
// @version      1.0.0-20240116d0
// @description  
// @author       You
// @match        https://rivalregions.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @grant        none
// @license      MIT
// ==/UserScript==

(async () => {
    /** @type {RRTool} */
    const RRTool = window.RRTool;

    if (RRTool === undefined) {
        throw new Error("此腳本不可獨立使用，必須搭配「RR Tools - 核心模組」使用。請確認您已安裝核心模組並啓用。");
    }

    const html = `<p>Hello World!</p>`;

    const root = document.createElement("div");
    root.innerHTML = html;

    new RRTool.CoreInterface("__Template__", "範本", "cornflowerblue", root);
})();