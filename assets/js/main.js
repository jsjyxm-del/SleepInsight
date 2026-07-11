/**
 * ==========================================
 * Sleep Insight
 * main.js
 * 应用入口文件
 * ==========================================
 */


import { SeedData }
from "./dev/seedData.js";


import { App }
from "./core/app.js";


import { SleepAnalytics }
from "./services/sleepAnalytics.js";



document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        App.init();


    }
);



// 开发环境测试工具

window.SeedData =
    SeedData;



window.SleepAnalytics =
    SleepAnalytics;