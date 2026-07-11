/**
 * ==========================================
 * Sleep Insight
 * record/events.js
 * 页面事件
 * ==========================================
 */

import { RecordService } from "./service.js";

export function bindRecordEvents(refreshList) {

    const form = document.getElementById("sleep-form");

    if (!form) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = {

            date: document.getElementById("date").value,

            bedtime: document.getElementById("bedtime").value,

            wakeTime: document.getElementById("wakeTime").value,

            quality: document.getElementById("quality").value,

            notes: document.getElementById("notes").value

        };

        const record = RecordService.createRecord(formData);

        RecordService.save(record);

        form.reset();

        refreshList();

    });

}