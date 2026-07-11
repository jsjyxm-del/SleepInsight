/**
 * ==========================================
 * Sleep Insight
 * core/migration.js
 * 数据迁移
 * ==========================================
 */


import { Storage }
from "./storage.js";


import { calculateSleepScore }
from "../modules/record/score.js";



export const Migration = {



    /**
     * 初始化迁移
     */
    run(){



        const data =
            Storage.getData();



        if(
            !data ||
            !data.records
        ){

            return;

        }




        let changed = false;




        const records =
            data.records.map(
                record=>{



                    /**
                     * 判断是否旧数据
                     */
                    if(
                        !record.id ||
                        !record.createdAt
                    ){


                        changed = true;




                        return {


                            id:
                            record.id
                            ||
                            Date.now()
                            +
                            Math.random(),




                            date:
                            record.date,



                            bedtime:
                            record.bedtime
                            ||
                            "--",




                            wakeTime:
                            record.wakeTime
                            ||
                            "--",




                            duration:
                            record.duration
                            ||
                            0,




                            quality:
                            record.quality
                            ||
                            0,




                            score:
                            calculateSleepScore(
                                record.duration || 0,
                                record.quality || 0
                            ),




                            notes:
                            record.notes
                            ||
                            "",




                            createdAt:
                            new Date(
                                record.date
                            )
                            .toISOString()



                        };


                    }





                    return record;



                }
            );






        if(changed){


            Storage.saveRecords(
                records
            );


            console.log(
                "Sleep Insight 数据迁移完成"
            );


        }



    }



};