/**
 * ==========================================
 * Sleep Insight
 * model.js
 * 数据模型定义
 * ==========================================
 */

/**
 * 创建默认睡眠记录
 * @returns {Object}
 */
export function createSleepRecord() {
    return {
        // 唯一 ID
        id: "",

        // 睡眠日期（YYYY-MM-DD）
        date: "",

        // 入睡时间（HH:mm）
        bedtime: "",

        // 起床时间（HH:mm）
        wakeTime: "",

        // 睡眠时长（小时）
        duration: 0,

        // 睡眠质量（1~10）
        quality: 0,

        // 是否午睡
        nap: false,

        // 午睡时长（分钟）
        napDuration: 0,

        // 心情
        mood: "",

        // 标签
        tags: [],

        // 备注
        notes: "",

        // 创建时间
        createdAt: "",

        // 更新时间
        updatedAt: ""
    };
}

/**
 * 创建整个应用默认数据
 * @returns {Object}
 */
export function createAppData() {
    return {
        version: "1.0.0",

        records: [],

        settings: {
            theme: "light",
            language: "zh-CN"
        }
    };
}