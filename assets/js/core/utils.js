/**
 * ==========================================
 * Sleep Insight
 * utils.js
 * 通用工具函数
 * ==========================================
 */

export const Utils = {

    /**
     * 生成唯一ID
     */
    uuid() {

        return "id_" +
            Date.now() +
            "_" +
            Math.random().toString(36).substring(2, 9);

    },

    /**
     * 获取今天日期（YYYY-MM-DD）
     */
    today() {

        return new Date().toISOString().split("T")[0];

    },

    /**
     * 保留一位小数
     */
    round(value) {

        return Number(value.toFixed(1));

    }

};