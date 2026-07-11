/**
 * ==========================================
 * Sleep Insight
 * utils.js
 * 公共工具函数
 * ==========================================
 */

export const Utils = {

    /**
     * 生成唯一ID
     */
    uuid() {

        return Date.now().toString(36)
            + Math.random().toString(36).substring(2);

    },

    /**
     * 格式化日期
     */
    formatDate(date) {

        return new Date(date)
            .toLocaleDateString("zh-CN");

    },

    /**
     * 保留两位小数
     */
    fixed(value) {

        return Number(value).toFixed(2);

    }

};