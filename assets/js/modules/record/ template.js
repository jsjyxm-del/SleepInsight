/**
 * ==========================================
 * Sleep Insight
 * 睡眠记录页面模板
 * ==========================================
 */

export function renderRecordTemplate() {

    return `
<section class="record">

    <h1 class="page-title">
        睡眠记录
    </h1>

    <div class="card">

        <form id="sleep-form">

            <div class="form-grid">

                <div class="form-item">

                    <label>日期</label>

                    <input
                        id="date"
                        class="input"
                        type="date"
                        required>

                </div>

                <div class="form-item">

                    <label>入睡时间</label>

                    <input
                        id="bedtime"
                        class="input"
                        type="time"
                        required>

                </div>

                <div class="form-item">

                    <label>起床时间</label>

                    <input
                        id="wakeTime"
                        class="input"
                        type="time"
                        required>

                </div>

                <div class="form-item">

                    <label>睡眠质量</label>

                    <input
                        id="quality"
                        class="input"
                        type="number"
                        min="1"
                        max="10"
                        value="8">

                </div>

            </div>

            <div class="form-item">

                <label>备注</label>

                <textarea
                    id="notes"
                    class="input"
                    rows="4"></textarea>

            </div>

            <button
                class="btn"
                type="submit">

                保存睡眠记录

            </button>

        </form>

    </div>

    <div class="card">

        <h2 class="section-title">

            最近记录

        </h2>

        <div id="record-list">

            暂无睡眠记录

        </div>

    </div>

</section>
`;

}