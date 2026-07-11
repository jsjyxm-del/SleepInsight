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
     * 页面渲染
     */
    render(){



        const todaySleep =
            SleepAnalytics.getTodaySleep();



        const averageSleep =
            SleepAnalytics.getAverageSleep();



        const score =
            SleepAnalytics.getAverageScore();



        const days =
            SleepAnalytics.getContinuousDays();



        const status =
            SleepAnalytics.getSleepStatus();



        const todayDetail =
            SleepAnalytics.getTodayDetail();



        const latestRecord =
            SleepAnalytics.getLatestRecord();







        return `


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

${todaySleep}

h

</div>


</div>






<div class="card stat-card">


<h3>

平均睡眠

</h3>


<div class="number">

${averageSleep}

h

</div>


</div>






<div class="card stat-card">


<h3>

睡眠评分

</h3>


<div class="number">

${score}

</div>



<p>

${status}

</p>


</div>






<div class="card stat-card">


<h3>

连续记录

</h3>


<div class="number">

${days}

天

</div>


</div>





</div>









<div class="card detail-card">


<h2>

今日睡眠详情

</h2>



${
    todayDetail
    ?

    `

    <p>

    睡眠时间：

    ${todayDetail.bedtime || "--"}

    -

    ${todayDetail.wakeTime || "--"}

    </p>



    <p>

    睡眠时长：

    ${todayDetail.duration}

    h

    </p>



    <p>

    睡眠质量：

    ⭐

    ${todayDetail.quality}/10

    </p>

    `

    :

    `

    <p>

    今日暂无睡眠记录

    </p>

    `

}



</div>










<div class="card detail-card">


<h2>

最近一次睡眠

</h2>




${
    latestRecord
    ?

    `


    <p>

    日期：

    ${latestRecord.date}

    </p>



    <p>

    时长：

    ${latestRecord.duration}

    h

    </p>



    <p>

    质量：

    ⭐

    ${latestRecord.quality}/10

    </p>



    <p>

    ${latestRecord.notes || ""}

    </p>


    `

    :

    `

    <p>

    暂无记录

    </p>

    `

}




</div>









<div class="card chart-card">


<h2>

最近睡眠趋势

</h2>



<canvas id="sleep-chart"></canvas>



</div>






</section>


`;



    },







    /**
     * 页面初始化
     */
    init(){



        SleepChart.init();



    }



};