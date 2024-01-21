// ================ [core.user.js (v1.18.0-20240121d2)] ================ //
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
     * @param {number} order 預設排序
     * @param {string|HTMLElement} content 在工具區域的 html 或是 element
     * @param {string} [icon_src] 用於顯示右上角書籤的圖示（建議大小 32x32px，並建議使用 base64）
     */
    constructor(id, name, tag_color, order, content, icon_src = "") { }

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
