/**
 * ==========================================
 * Sleep Insight
 * dashboard.js
 *
 * Dashboard Experience v2
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






<!-- Welcome -->

<div class="dashboard-header">


<h1>

Good evening 🌙

</h1>


<p>

今天也来看看你的睡眠状态

</p>


</div>







<!-- Score Hero -->


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








<!-- Metrics -->


<div class="dashboard-grid">



<div class="stat-card">


<div class="stat-title">

平均睡眠

</div>



<div class="stat-value">

${averageSleep}

<span class="stat-unit">
h
</span>


</div>


</div>






<div class="stat-card">


<div class="stat-title">

连续记录

</div>



<div class="stat-value">

${days}

<span class="stat-unit">
天
</span>


</div>


</div>






<div class="stat-card">


<div class="stat-title">

最近状态

</div>



<div class="stat-value">

${status}

</div>


</div>



</div>









<!-- Detail -->


<div class="dashboard-content">



<div class="card">


<h2 class="section-title">

今日睡眠

</h2>



${
todayDetail

?

`

<p>

🌙 入睡：

${todayDetail.bedtime || "--"}

</p>



<p>

☀️ 起床：

${todayDetail.wakeTime || "--"}

</p>



<p>

⏱ 时长：

${todayDetail.duration}

h

</p>



<p>

⭐ 质量：

${todayDetail.quality}/10

</p>


`

:

`

<p>

今天暂无睡眠记录

</p>

`

}



</div>







<div class="insight-card">


<h2 class="section-title">

AI Insight

</h2>


<p>

${

score >= 85

?

"你的睡眠状态很好，继续保持稳定作息 🌙"

:

"建议保持固定睡眠时间，提高睡眠规律性"

}

</p>


</div>



</div>










<!-- Chart -->


<div class="card chart-card">


<h2 class="section-title">

睡眠趋势

</h2>



<canvas id="sleep-chart"></canvas>



</div>









</section>


`;



    },








    /**
     * 初始化
     */
    init(){


        SleepChart.init();


    }



};