/**
 * ==========================================
 * Sleep Insight
 * record.js
 * 睡眠记录页面
 * ==========================================
 */

import { Storage } from "../core/storage.js";
import { Utils } from "../core/utils.js";

export const Record = {

    render() {

        return `
<section class="record">

    <h1 class="page-title">睡眠记录</h1>

    <div class="card">

        <form id="sleep-form">

            <div class="form-grid">

                <div class="form-item">
                    <label>日期</label>
                    <input id="date" class="input" type="date" required>
                </div>

                <div class="form-item">
                    <label>入睡时间</label>
                    <input id="bedtime" class="input" type="time" required>
                </div>

                <div class="form-item">
                    <label>起床时间</label>
                    <input id="wakeTime" class="input" type="time" required>
                </div>

                <div class="form-item">
                    <label>睡眠质量</label>
                    <input id="quality" class="input" type="number" min="1" max="10" value="8">
                </div>

            </div>

            <div class="form-item">

                <label>备注</label>

                <textarea
                    id="notes"
                    class="input"
                    rows="4"></textarea>

            </div>

            <button class="btn" type="submit">

                保存睡眠记录

            </button>

        </form>

    </div>

    <div class="card">

        <h2 class="section-title">

            最近记录

        </h2>

        <div id="record-list"></div>

    </div>

</section>
`;

    },

    init() {

        this.bindEvents();

        this.renderList();

    },

    bindEvents() {

        const form = document.getElementById("sleep-form");

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            this.saveRecord();

        });

    },

    saveRecord() {

        const records = Storage.getRecords();

        const bedtime = document.getElementById("bedtime").value;
        const wakeTime = document.getElementById("wakeTime").value;

        let duration = 0;

        if (bedtime && wakeTime) {

            const start = new Date(`2000-01-01 ${bedtime}`);

            let end = new Date(`2000-01-01 ${wakeTime}`);

            if (end < start) {

                end.setDate(end.getDate() + 1);

            }

            duration = (end - start) / 1000 / 60 / 60;

        }

        records.unshift({

            id: Utils.uuid(),

            date: document.getElementById("date").value,

            bedtime,

            wakeTime,

            duration,

            quality: Number(document.getElementById("quality").value),

            notes: document.getElementById("notes").value,

            createdAt: new Date().toISOString()

        });

        Storage.saveRecords(records);

        document.getElementById("sleep-form").reset();

        this.renderList();

    },

    renderList() {

        const list = document.getElementById("record-list");

        const records = Storage.getRecords();

        if (records.length === 0) {

            list.innerHTML = "暂无睡眠记录";

            return;

        }

        list.innerHTML = records.map(record => `

<div class="record-row">

    <div class="record-info">

        <strong>${record.date}</strong>

        <span>${record.duration.toFixed(1)} h</span>

        <span>⭐ ${record.quality}</span>

    </div>

</div>

`).join("");

    }

};