// ================ [Tampermonkey] ================ //

/*****************************************************************\
*                                                                 *
*  REF: https://www.tampermonkey.net/documentation.php?locale=en  *
*                                                                 *
\*****************************************************************/

/**
 * Adds the given style to the document and returns the injected style element.
 * @param {string} css
 * @returns {HTMLStyleElement}
 */
function GM_addStyle(css) { }

/**
 * Allows userscripts to access the text of a resource (such as a JavaScript or CSS file) 
 * that has been included in a userscript via `@resource`.
 * @param {string} resourceName 
 */
function GM_getResourceText(resourceName) { }

/**
 * @typedef GM_XHR_Response
 * @property {string} finalUrl the final url after all redirects from where the data was loaded
 * @property {number} readyState
 * @property {number} status
 * @property {string} statusText
 * @property {string} responseText
 * @property {string} responseHeaders
 * 
 * @callback GM_XHR_Onload_Function
 * @param {GM_XHR_Response} response
 * 
 * @typedef GM_XHR_GenericObject
 * @property {"GET"|"POST"} method
 * @property {string} url
 * @property {GM_XHR_Onload_Function} onload
 */
/**
 * The `GM_xmlhttpRequest` allows a userscripts to send an HTTP request and handle the response.  
 * The function takes a single parameter: 
 * - an object containing the details of the request to be sent and the callback functions 
 *   to be called when the response is received.
 * @param {GM_XHR_GenericObject} details
 * @returns {Promise<GM_XHR_Response>}
 */
function GM_xmlhttpRequest(details) { }

// ================ [core.user.js] ================ //

/**
 * @typedef EachSetting
 * @property {string} id
 * @property {string} color
 * @property {number} order
 */

/**
 * @typedef CoreSetting
 * @property {EachSetting[]} [order]
 * @property {EachSetting} [last]
 */

class RRToolCoreInterface {
    /** @type {string} */
    #id;
    /** @type {string} */
    #name;
    /** @type {HTMLDivElement} */
    #root;
    /** @type {HTMLDivElement} */
    #tag;
    /** @type {boolean} */
    #isLast = false;

    /**
     * @param {string} id 此工具的唯一識別值（僅接受以下字元 `A-Z`、`a-z`、`0-9`、`_`、`-`）
     * @param {string} name 工具名稱，僅供人識別，可重複
     * @param {string} tag_color 右上角書籤的預設顏色（使用者設定值會優於此值）
     * @param {string|HTMLElement} content 在工具區域的 html 或是 element
     * @param {string} [icon_src] 用於顯示右上角書籤的圖示（建議大小 32x32px，並建議使用 base64）
     */
    constructor(id, name, tag_color, content, icon_src = "") { }

    /**
     * 取得此工具的可讀名稱
     * @returns {string}
     */
    getToolName() { }

    /**
     * 取得此工具的唯一識別值
     * @returns {string}
     */
    getToolId() { }

    /**
     * 設定書籤順序
     * @param {number} order
     */
    setTagOrder(order) { }

    /**
     * 點擊書籤時開關浮窗
     */
    #toggle() { }

    /**
     * 讀取書籤設定（順序與顏色）
     * @param {string} id
     * @returns {EachSetting}
     */
    #readTagSetting(id) { }

    /**
     * 重新排序所有已註冊的工具
     */
    #reorderTags() { }

    /**
     * 從已註冊的工具陣列中確認是否存在 id 衝突
     * @param {string} id 
     * @returns 
     */
    #checkIdConflict(id) { }
}

/**
 * @typedef RRTool
 * @property {typeof RRToolCoreInterface} CoreInterface
 * @property {RRToolCoreInterface[]} list
 */
