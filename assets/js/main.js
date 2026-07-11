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





/**
 * 页面加载完成以后启动应用
 */
document.addEventListener(
    "DOMContentLoaded",
    () => {


        App.init();


    }
);





/**
 * ==========================================
 * 开发环境工具
 * ==========================================
 *
 * 浏览器 Console:
 *
 * SeedData.generate()
 *
 * ==========================================
 */


window.SeedData = SeedData;