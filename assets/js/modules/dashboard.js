/**
 * ==========================================
 * Sleep Insight
 *
 * dashboard.js
 *
 * Dashboard V2
 *
 * ==========================================
 */


import { SleepAnalytics }
from "../services/sleepAnalytics.js";


import { SleepChart }
from "../charts/sleepChart.js";




export const Dashboard = {



    render(){


        const score =
            SleepAnalytics.getAverageScore();



        const averageSleep =
            SleepAnalytics.getAverageSleep();



        const days =
            SleepAnalytics.getContinuousDays();



        const status =
            SleepAnalytics.getSleepStatus();



        const today =
            SleepAnalytics.getTodayDetail();



        const latest =
            SleepAnalytics.getLatestRecord();






        return `



<section class="dashboard">





<header class="dashboard-header">


<h1>

Good evening 🌙

</h1>


<p>

看看今天你的睡眠状态

</p>


</header>








<div class="sleep-score-card">


<div class="sleep-score">

${score}

</div>



<div class="sleep-score-label">

Sleep Score

</div>




<div class="sleep-status">

${status}

</div>


</div>









<div class="dashboard-grid">





<div class="stat-card">


<div class="stat-title">

平均睡眠

</div>


<div class="metric-value">

${averageSleep}

<span class="metric-unit">

h

</span>


</div>


</div>






<div class="stat-card">


<div class="stat-title">

连续记录

</div>


<div class="metric-value">

${days}

<span class="metric-unit">

天

</span>

</div>


</div>






<div class="stat-card">


<div class="stat-title">

睡眠评分

</div>


<div class="metric-value">

${score}

<span class="metric-unit">

分

</span>

</div>


</div>




</div>









<div class="dashboard-content">






<div class="detail-card">


<h2 class="section-title">

今日睡眠

</h2>



${
today
?

`

<p>
睡眠时间：
${today.bedtime || "--"}
-
${today.wakeTime || "--"}
</p>


<p>
睡眠时长：
${today.duration} h
</p>


<p>
睡眠质量：
⭐ ${today.quality}/10
</p>

`

:

`

<p>
暂无今日记录
</p>

`

}




</div>









<div class="insight-card">


<h2 class="section-title">

AI Insight

</h2>



<p>

根据你的最近睡眠数据，
保持稳定作息有助于提升恢复质量。

</p>


</div>







</div>








<div class="card chart-card">


<h2 class="section-title">

睡眠趋势

</h2>


<canvas id="sleep-chart"></canvas>


</div>









</section>


`;



    },







    init(){


        SleepChart.init();


    }



};