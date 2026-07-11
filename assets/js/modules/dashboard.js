/**
 * ==========================================
 * Sleep Insight
 * dashboard.js
 * Dashboard 首页
 * ==========================================
 */


import { SleepAnalytics }
from "../services/sleepAnalytics.js";


import { SleepChart }
from "../charts/sleepChart.js";



export const Dashboard = {



    /**
     * 渲染 Dashboard
     */
    render() {



        const todaySleep =
            SleepAnalytics.getTodaySleep();



        const averageSleep =
            SleepAnalytics.getAverageSleep();



        const score =
            SleepAnalytics.getAverageScore();



        const days =
            SleepAnalytics.getContinuousDays();





        const html = `


<section class="dashboard">


    <h1 class="page-title">

        Sleep Insight Dashboard

    </h1>



    <div class="dashboard-grid">



        <div class="card stat-card">


            <h3>

                今日睡眠

            </h3>


            <div class="number">

                ${todaySleep} h

            </div>


        </div>





        <div class="card stat-card">


            <h3>

                平均睡眠

            </h3>


            <div class="number">

                ${averageSleep} h

            </div>


        </div>





        <div class="card stat-card">


            <h3>

                睡眠评分

            </h3>


            <div class="number">

                ${score}

            </div>


        </div>





        <div class="card stat-card">


            <h3>

                连续记录

            </h3>


            <div class="number">

                ${days} 天

            </div>


        </div>



    </div>





    <div class="card chart-card">


        <h2>

            最近睡眠趋势

        </h2>



        <canvas id="sleep-chart">

        </canvas>



    </div>



</section>


`;




        /**
         * 等待 DOM 插入后初始化图表
         */
        setTimeout(()=>{


            SleepChart.init();


        },0);




        return html;



    }


};