/**
 * ==========================================
 * Sleep Insight
 * router.js
 * SPA 路由管理
 * ==========================================
 */


import { Dashboard }
from "../modules/dashboard.js";


import { Record }
from "../modules/record.js";


import { Statistics }
from "../modules/statistics/index.js";


import { ExportModule }
from "../modules/export.js";



export const Router = {



    /**
     * 初始化路由
     */
    init(){


        this.load();



        window.addEventListener(
            "hashchange",
            ()=>{

                this.load();

            }
        );


    },





    /**
     * 加载页面
     */
    load(){



        const view =
            document.getElementById(
                "view"
            );



        const hash =
            location.hash ||
            "#dashboard";




        switch(hash){



            case "#dashboard":



                view.innerHTML =
                    Dashboard.render();



                Dashboard.init();



                break;







            case "#record":



                view.innerHTML =
                    Record.render();



                Record.init();



                break;







            case "#statistics":



                view.innerHTML =
                    Statistics.render();



                Statistics.init();



                break;







            case "#export":



                view.innerHTML =
                    ExportModule.render();



                break;







            default:



                location.hash =
                    "#dashboard";



        }



    }



};