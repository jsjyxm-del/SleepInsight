/**
 * ==========================================
 * Sleep Insight
 * chartService.js
 * 图表服务
 * ==========================================
 */


import { Storage } from "../core/storage.js";



export const ChartService = {



    /**
     * 获取最近7天睡眠数据
     */
    getWeeklySleepData() {


        const records =
            Storage.getRecords();



        const result =
            records
            .slice(0,7)
            .reverse();



        return {


            labels:
                result.map(
                    item => item.date
                ),



            values:
                result.map(
                    item => item.duration
                )


        };


    }





};