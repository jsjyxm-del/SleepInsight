/**
 * ==========================================
 * Sleep Insight
 * statistics/template.js
 * 数据统计页面模板
 * ==========================================
 */


export function renderStatisticsTemplate(){



    return `
    
    
    
    <section class="statistics">
    
    
    
    <h1 class="page-title">
    
    Sleep Insight Statistics
    
    </h1>
    
    
    
    
    
    
    
    <div class="dashboard-grid">
    
    
    
    
    
    <div class="card stat-card">
    
    
    <h3>
    
    平均睡眠
    
    </h3>
    
    
    <div 
    class="number"
    id="average-sleep">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    
    
    <div class="card stat-card">
    
    
    <h3>
    
    最近7天平均
    
    </h3>
    
    
    <div 
    class="number"
    id="week-average">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    
    
    
    <div class="card stat-card">
    
    
    <h3>
    
    平均评分
    
    </h3>
    
    
    <div 
    class="number"
    id="average-score">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    
    
    
    <div class="card stat-card">
    
    
    <h3>
    
    最佳睡眠
    
    </h3>
    
    
    <div 
    class="number"
    id="best-sleep">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    <div class="card chart-card">
    
    
    <h2>
    
    睡眠趋势
    
    </h2>
    
    
    <canvas id="statistics-trend-chart"></canvas>
    
    
    </div>
    
    
    
    
    
    
    
    
    
    <div class="card chart-card">
    
    
    <h2>
    
    睡眠质量分布
    
    </h2>
    
    
    <canvas id="quality-chart"></canvas>
    
    
    </div>
    
    
    
    
    
    
    
    
    <div class="card">
    
    
    <h2>
    
    质量统计
    
    </h2>
    
    
    <div id="quality-distribution">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    
    
    </section>
    
    
    
    `;
    
    
    
    }