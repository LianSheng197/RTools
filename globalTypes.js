// ================ [core.user.js (v1.18.0-20240121d0)] ================ //

/**
 * @typedef EachSetting
 * @property {string} id
 * @property {string} color
 * @property {number} order
 */

/**
 * @typedef CoreSetting
 * @property {EachSetting[]} order
 * @property {EachSetting} last
 */

class RRToolCoreInterface {
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
     * 在書籤上追加點擊事件監聽器
     * @param {CallableFunction} handler
     */
    addTagClickEventListener(handler) { }

    /**
     * 在書籤上刪除點擊事件監聽器
     * @param {CallableFunction} handler
     */
    removeTagClickEventListener(handler) { }

    /**
     * 取得書籤順序
     */
    getTagOrder() { }

    /**
     * 設定書籤順序
     * @param {number} order
     */
    setTagOrder(order) { }

    /**
     * 取得書籤顏色
     */
    getTagColor() { }

    /**
     * 保存書籤排序設定
     * @param {number} value
     */
    saveTagOrder(value) { }

    /**
     * 保存書籤顏色設定
     * @param {string} value 
     */
    saveTagColor(value) { }

    /**
     * 確認此工具是否可以排序
     * @returns {boolean}
     */
    isSortable() { }
}

/**
 * @typedef RRTool
 * @property {typeof RRToolCoreInterface} CoreInterface
 * @property {RRToolCoreInterface[]} list
 */
