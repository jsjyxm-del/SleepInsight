/**
 * ==========================================
 * Sleep Insight
 * sleepAnalytics.js
 * 睡眠数据分析服务
 * ==========================================
 */


import { Storage }
from "../core/storage.js";



export const SleepAnalytics = {



    /**
     * 获取全部记录
     */
    getRecords(){


        return Storage.getRecords();


    },






    /**
     * 获取今日睡眠时长
     */
    getTodaySleep(){



        const records =
            this.getRecords();




        const today =
            new Date()
            .toISOString()
            .split("T")[0];




        const record =
            records.find(
                item =>
                item.date === today
            );




        return record
            ?
            record.duration
            :
            0;



    },







    /**
     * 平均睡眠时间
     */
    getAverageSleep(){



        const records =
            this.getRecords();




        if(
            records.length === 0
        ){

            return 0;

        }





        const total =
            records.reduce(
                (
                    sum,
                    item
                )=>
                    sum +
                    Number(
                        item.duration || 0
                    ),
                0
            );





        return Number(
            (
                total /
                records.length
            )
            .toFixed(1)
        );



    },








    /**
     * 平均睡眠评分
     */
    getAverageScore(){



        const records =
            this.getRecords();




        if(
            records.length === 0
        ){

            return 0;

        }





        const total =
            records.reduce(
                (
                    sum,
                    item
                )=>
                    sum +
                    Number(
                        item.score
                        ||
                        item.quality * 10
                    ),
                0
            );





        return Math.round(
            total /
            records.length
        );



    },









    /**
     * 连续记录天数
     */
    getContinuousDays(){



        const records =
            this.getRecords();




        if(
            records.length === 0
        ){

            return 0;

        }






        const dates =
            records
            .map(
                item =>
                item.date
            )
            .sort()
            .reverse();





        let days = 1;





        for(
            let i = 1;
            i < dates.length;
            i++
        ){



            const current =
                new Date(
                    dates[i-1]
                );



            const previous =
                new Date(
                    dates[i]
                );



            const diff =
                (
                    current -
                    previous
                )
                /
                86400000;




            if(diff === 1){

                days++;

            }
            else{

                break;

            }



        }





        return days;



    },









    /**
     * 获取最近一次记录
     */
    getLatestRecord(){



        const records =
            this.getRecords();




        if(
            records.length === 0
        ){

            return null;

        }





        const sorted =
            [...records]
            .sort(
                (
                    a,
                    b
                )=>{


                    return new Date(
                        b.date
                    )
                    -
                    new Date(
                        a.date
                    );


                }
            );





        return sorted[0];



    },









    /**
     * 睡眠状态评价
     */
    getSleepStatus(){



        const score =
            this.getAverageScore();





        if(score >= 90){


            return "优秀 🌙";


        }



        if(score >= 75){


            return "良好 🙂";


        }



        if(score >= 60){


            return "一般 😐";


        }




        return "需要改善 😴";



    },









    /**
     * 今日详细信息
     */
    getTodayDetail(){



        const records =
            this.getRecords();




        const today =
            new Date()
            .toISOString()
            .split("T")[0];





        return (
            records.find(
                item =>
                item.date === today
            )
            ||
            null
        );



    }



};