/**
 * ==========================================
 * Sleep Insight
 *
 * router.js
 *
 * SPA Router System v2.0
 *
 * ==========================================
 */


import { Dashboard }
from "./modules/dashboard.js";


import { Record }
from "./modules/record.js";


import { Statistics }
from "./modules/statistics/index.js";


import { ExportModule }
from "./modules/export.js";





export const Router = {



    /**
     * 初始化
     */
    init(){


        this.bindEvents();


        this.load();


    },







    /**
     * 监听hash变化
     */
    bindEvents(){



        window.addEventListener(
            "hashchange",
            ()=>{


                this.load();


            }
        );



    },







    /**
     * 页面加载
     */
    load(){



        const view =
            document.getElementById(
                "view"
            );



        const hash =
            location.hash ||
            "#dashboard";







        let page = "";





        switch(hash){



            case "#dashboard":



                page =
                    Dashboard.render();



                break;






            case "#record":



                page =
                    Record.render();



                break;






            case "#statistics":



                page =
                    Statistics.render();



                break;






            case "#export":



                page =
                    ExportModule.render();



                break;






            default:



                location.hash =
                    "#dashboard";



                return;



        }








        /*
            页面切换动画
        */


        view.classList.remove(
            "page-enter"
        );



        void view.offsetWidth;



        view.innerHTML =
            page;



        view.classList.add(
            "page-enter"
        );









        /*
            初始化页面
        */


        this.initPage(
            hash
        );





        /*
            更新导航状态
        */


        this.updateActive(
            hash
        );



    },








    /**
     * 初始化模块
     */
    initPage(hash){



        switch(hash){



            case "#dashboard":


                Dashboard.init();


                break;





            case "#record":


                Record.init();


                break;





            case "#statistics":


                Statistics.init();


                break;



            case "#export":


                if(
                    ExportModule.init
                ){

                    ExportModule.init();

                }


                break;



        }


    },









    /**
     * 导航高亮
     */
    updateActive(hash){



        const links =
            document.querySelectorAll(
                "nav a"
            );





        links.forEach(
            link=>{


                const href =
                    link.getAttribute(
                        "href"
                    );



                if(
                    href === hash
                ){


                    link.classList.add(
                        "active"
                    );



                }
                else{


                    link.classList.remove(
                        "active"
                    );


                }


            }
        );



    }





};