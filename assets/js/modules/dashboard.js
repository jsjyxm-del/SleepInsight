/**
 * ==========================================
 * Sleep Insight
 * dashboard.js
 * Dashboard 页面
 * ==========================================
 */

export const Dashboard = {

    /**
     * 渲染 Dashboard
     * @returns {string}
     */
    render() {

        return `
<section class="dashboard">

    <h1 class="page-title">
        Sleep Insight Dashboard
    </h1>

    <!-- 四张统计卡片 -->
    <div class="dashboard-grid">

        <div class="stat-card">
            <div class="stat-title">今日睡眠</div>
            <div class="stat-value">-- h</div>
        </div>

        <div class="stat-card">
            <div class="stat-title">平均睡眠</div>
            <div class="stat-value">-- h</div>
        </div>

        <div class="stat-card">
            <div class="stat-title">睡眠评分</div>
            <div class="stat-value">--</div>
        </div>

        <div class="stat-card">
            <div class="stat-title">连续记录</div>
            <div class="stat-value">0 天</div>
        </div>

    </div>

    <!-- 下半部分 -->
    <div class="dashboard-content">

        <!-- 最近睡眠 -->
        <div class="card">

            <h2 class="section-title">
                最近睡眠记录
            </h2>

            <div class="record-list">

                <div class="record-item">
                    暂无睡眠记录
                </div>

            </div>

        </div>

        <!-- 图表区域 -->
        <div class="card">

            <h2 class="section-title">
                睡眠趋势
            </h2>

            <div class="chart-placeholder">
                Chart.js 图表将在这里显示
            </div>

        </div>

    </div>

</section>
`;

    }

};