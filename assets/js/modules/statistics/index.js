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
    SleepAnalytics
}
from "../../services/sleepAnalytics.js";



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



        const weekly =
            SleepAnalytics
            .getWeeklyAverage();




        const average =
            SleepAnalytics
            .getAverageSleep();




        const score =
            SleepAnalytics
            .getAverageScore();




        const best =
            SleepAnalytics
            .getBestSleepDay();




        const quality =
            SleepAnalytics
            .getQualityDistribution();







        const weeklyEl =
            document.getElementById(
                "week-average"
            );



        const averageEl =
            document.getElementById(
                "average-sleep"
            );



        const scoreEl =
            document.getElementById(
                "average-score"
            );



        const bestEl =
            document.getElementById(
                "best-sleep"
            );



        const qualityEl =
            document.getElementById(
                "quality-distribution"
            );








        if(weeklyEl){


            weeklyEl.innerHTML =
                `${weekly} h`;


        }






        if(averageEl){


            averageEl.innerHTML =
                `${average} h`;


        }






        if(scoreEl){


            scoreEl.innerHTML =
                score;


        }







        if(bestEl){


            bestEl.innerHTML =
                best
                ?
                `
                ${best.date}
                <br>
                ${best.duration} h
                `
                :
                "--";


        }







        if(qualityEl){


            qualityEl.innerHTML =
            `

            <p>
            ⭐优秀：
            ${quality.excellent}
            次
            </p>


            <p>
            🙂良好：
            ${quality.good}
            次
            </p>


            <p>
            😐一般：
            ${quality.normal}
            次
            </p>


            <p>
            😴较差：
            ${quality.poor}
            次
            </p>

            `;


        }








        setTimeout(()=>{


            StatisticsCharts.init();



        },0);




    }



};