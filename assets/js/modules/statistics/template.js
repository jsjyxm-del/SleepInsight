/**
 * ==========================================
 * Sleep Insight
 * statistics/template.js
 * 数据统计页面模板
 * ==========================================
 */


export function renderStatisticsTemplate() {


    return `


<section class="statistics">


    <h1 class="page-title">

        数据统计

    </h1>



    <div class="dashboard-grid">



        <div class="card stat-card">


            <h3>

                本周平均睡眠

            </h3>


            <div 
                id="week-average"
                class="number">

                -- h

            </div>


        </div>




        <div class="card stat-card">


            <h3>

                本月平均睡眠

            </h3>


            <div 
                id="month-average"
                class="number">

                -- h

            </div>


        </div>




        <div class="card stat-card">


            <h3>

                最佳睡眠

            </h3>


            <div 
                id="best-sleep"
                class="number">

                --

            </div>


        </div>



    </div>




    <div class="card chart-card">


        <h2>

            睡眠质量趋势

        </h2>



        <canvas id="quality-chart"></canvas>



    </div>



</section>



    `;


}