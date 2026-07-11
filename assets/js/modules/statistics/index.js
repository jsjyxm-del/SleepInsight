/**
 * ==========================================
 * Sleep Insight
 * statistics/index.js
 * 数据统计模块入口
 * ==========================================
 */


import {
    renderStatisticsTemplate
}
from "./template.js";



import {
    StatisticsService
}
from "./service.js";



import {
    StatisticsCharts
}
from "./charts.js";




export const Statistics = {



    /**
     * 渲染页面
     */
    render(){


        return renderStatisticsTemplate();


    },





    /**
     * 页面初始化
     */
    init(){



        const week =
            StatisticsService
            .getWeekAverage();



        const month =
            StatisticsService
            .getMonthAverage();




        const best =
            StatisticsService
            .getBestSleep();





        const weekEl =
            document.getElementById(
                "week-average"
            );



        const monthEl =
            document.getElementById(
                "month-average"
            );



        const bestEl =
            document.getElementById(
                "best-sleep"
            );





        if(weekEl){


            weekEl.innerHTML =
                `${week} h`;


        }





        if(monthEl){


            monthEl.innerHTML =
                `${month} h`;


        }





        if(bestEl){


            bestEl.innerHTML =
                best
                ?
                `${best.date}`
                :
                "--";


        }





        /**
         * 初始化统计图表
         *
         * 等待DOM生成以后执行
         */
        setTimeout(()=>{


            StatisticsCharts.init();


        },0);



    }



};