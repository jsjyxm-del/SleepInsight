/**
 * ==========================================
 * Sleep Insight
 * record/service.js
 * 睡眠记录数据服务
 * ==========================================
 */


import { Storage }
from "../../core/storage.js";


import { calculateSleepScore }
from "./score.js";



export const RecordService = {



    /**
     * 获取全部记录
     */
    getRecords(){


        return Storage.getRecords();


    },






    /**
     * 保存记录
     */
    saveRecord(record){



        const records =
            this.getRecords();




        const duration =
            this.calculateDuration(
                record.bedtime,
                record.wakeTime
            );





        const score =
            calculateSleepScore(
                duration,
                record.quality
            );





        const newRecord = {



            id:
            Date.now(),




            date:
            record.date,




            bedtime:
            record.bedtime,




            wakeTime:
            record.wakeTime,




            duration,




            quality:
            Number(
                record.quality
            ),




            score,




            notes:
            record.notes || "",




            createdAt:
            new Date()
            .toISOString()



        };






        records.push(
            newRecord
        );





        Storage.saveRecords(
            records
        );





        return newRecord;



    },








    /**
     * 删除记录
     */
    removeRecord(id){



        const records =
            this.getRecords();




        const newRecords =
            records.filter(
                record =>
                record.id !== id
            );





        Storage.saveRecords(
            newRecords
        );



    },







    /**
     * 计算睡眠时长
     */
    calculateDuration(
        bedtime,
        wakeTime
    ){



        const start =
            new Date(
                `2000-01-01 ${bedtime}`
            );



        const end =
            new Date(
                `2000-01-01 ${wakeTime}`
            );





        if(end <= start){


            end.setDate(
                end.getDate()+1
            );


        }





        const hours =
            (
                end-start
            )
            /
            1000
            /
            60
            /
            60;






        return Number(
            hours.toFixed(1)
        );



    }



};