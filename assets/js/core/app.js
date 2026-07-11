/**
 * ==========================================
 * Sleep Insight
 * app.js
 * 应用启动器
 * ==========================================
 */

import { Router } from "./router.js";
import { Storage } from "./storage.js";

export const App = {

    /**
     * 初始化整个应用
     */
    init() {

        console.log("Sleep Insight 已启动");

        // 初始化本地数据库
        Storage.init();

        // 初始化路由
        Router.init();

    }

};