/**
 * ==========================================
 * Sleep Insight
 * statistics/service.js
 * 统计分析服务
 * ==========================================
 */


import { Storage }
from "../../core/storage.js";



export const StatisticsService = {



    /**
     * 获取所有记录
     */
    getRecords(){


        return Storage.getRecords();


    },




    /**
     * 本周平均睡眠
     */
    getWeekAverage(){


        const records =
            this.getRecords();



        const data =
            records.slice(-7);



        if(!data.length){

            return 0;

        }



        const total =
            data.reduce(
                (sum,item)=>
                sum + item.duration,
                0
            );



        return Number(
            (
                total /
                data.length
            )
            .toFixed(1)
        );


    },




    /**
     * 本月平均睡眠
     */
    getMonthAverage(){


        const records =
            this.getRecords();



        const data =
            records.slice(-30);



        if(!data.length){

            return 0;

        }



        const total =
            data.reduce(
                (sum,item)=>
                sum + item.duration,
                0
            );



        return Number(
            (
                total /
                data.length
            )
            .toFixed(1)
        );


    },





    /**
     * 最佳睡眠记录
     */
    getBestSleep(){


        const records =
            this.getRecords();



        if(!records.length){

            return null;

        }



        return records.reduce(
            (best,current)=>{


                return current.duration >
                best.duration
                ?
                current
                :
                best;


            }
        );


    }



};