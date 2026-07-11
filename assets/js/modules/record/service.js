/**
 * ==========================================
 * Sleep Insight
 * record/service.js
 * 睡眠记录业务逻辑
 * ==========================================
 */

import { Storage } from "../../core/storage.js";
import { Utils } from "../../core/utils.js";

export const RecordService = {

    /**
     * 获取全部记录
     */
    getAll() {

        return Storage.getRecords();

    },

    /**
     * 保存一条记录
     */
    save(record) {

        const records = Storage.getRecords();

        records.unshift(record);

        Storage.saveRecords(records);

    },

    /**
     * 删除记录
     */
    remove(id) {

        const records = Storage
            .getRecords()
            .filter(item => item.id !== id);

        Storage.saveRecords(records);

    },

    /**
     * 计算睡眠时长
     */
    calculateDuration(bedtime, wakeTime) {

        if (!bedtime || !wakeTime) {

            return 0;

        }

        const start = new Date(`2000-01-01 ${bedtime}`);

        let end = new Date(`2000-01-01 ${wakeTime}`);

        // 跨天睡眠
        if (end < start) {

            end.setDate(end.getDate() + 1);

        }

        return Number(((end - start) / 3600000).toFixed(1));

    },

    /**
     * 创建记录对象
     */
    createRecord(formData) {

        return {

            id: Utils.uuid(),

            date: formData.date,

            bedtime: formData.bedtime,

            wakeTime: formData.wakeTime,

            duration: this.calculateDuration(
                formData.bedtime,
                formData.wakeTime
            ),

            quality: Number(formData.quality),

            notes: formData.notes,

            createdAt: new Date().toISOString()

        };

    }

};