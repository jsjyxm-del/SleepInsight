/**
 * ==========================================
 * Sleep Insight
 * storage.js
 * 本地数据管理
 * ==========================================
 */

import { createAppData } from "../data/model.js";

const STORAGE_KEY = "sleepInsightData";

export const Storage = {

    /**
     * 初始化数据库
     */
    init() {

        const data = localStorage.getItem(STORAGE_KEY);

        if (!data) {
            const initData = createAppData();

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(initData)
            );
        }
    },

    /**
     * 获取全部数据
     * @returns {Object}
     */
    getData() {

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        );

    },

    /**
     * 保存全部数据
     * @param {Object} data
     */
    saveData(data) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    },

    /**
     * 获取睡眠记录
     * @returns {Array}
     */
    getRecords() {

        return this.getData().records;

    },

    /**
     * 保存睡眠记录
     * @param {Array} records
     */
    saveRecords(records) {

        const data = this.getData();

        data.records = records;

        this.saveData(data);

    }

};