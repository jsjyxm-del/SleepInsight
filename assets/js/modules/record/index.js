/**
 * ==========================================
 * Sleep Insight
 * Record 页面入口
 * ==========================================
 */

import { renderRecordTemplate } from "./template.js";

export const Record = {

    render() {

        return renderRecordTemplate();

    },

    init() {

        console.log("Record 初始化");

    }

};