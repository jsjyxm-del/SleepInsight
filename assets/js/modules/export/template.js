/**
 * ==========================================
 * Sleep Insight
 * export/template.js
 * 报告页面模板
 * ==========================================
 */


export function renderExportTemplate(){


    return `
    
    
    <section class="export-page">
    
    
    
    <h1 class="page-title">
    
    Sleep Insight Report
    
    </h1>
    
    
    
    
    
    <div class="dashboard-grid">
    
    
    
    <div class="card stat-card">
    
    
    <h3>
    
    平均睡眠
    
    </h3>
    
    
    <div
    class="number"
    id="report-average-sleep">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    
    <div class="card stat-card">
    
    
    <h3>
    
    睡眠评分
    
    </h3>
    
    
    <div
    class="number"
    id="report-score">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    
    <div class="card stat-card">
    
    
    <h3>
    
    连续记录
    
    </h3>
    
    
    <div
    class="number"
    id="report-days">
    
    --
    
    </div>
    
    
    </div>
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    <div class="card">
    
    
    <h2>
    
    睡眠总结
    
    </h2>
    
    
    
    <div id="sleep-summary">
    
    --
    
    </div>
    
    
    
    </div>
    
    
    
    
    
    
    
    <div class="card export-actions">
    
    
    
    <button
    id="export-pdf"
    class="primary-btn">
    
    导出 PDF
    
    </button>
    
    
    
    
    
    <button
    id="export-json"
    class="secondary-btn">
    
    下载 JSON
    
    </button>
    
    
    
    
    </div>
    
    
    
    
    
    </section>
    
    
    
    `;
    
    
    
    }