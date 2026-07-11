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
     * 今日睡眠
     */
    getTodaySleep(){


        const today =
            new Date()
            .toISOString()
            .split("T")[0];



        const record =
            this.getRecords()
            .find(
                item =>
                item.date === today
            );



        return record
            ?
            Number(record.duration)
            :
            0;


    },







    /**
     * 平均睡眠
     */
    getAverageSleep(){


        const records =
            this.getRecords();



        if(!records.length){

            return 0;

        }



        const total =
            records.reduce(
                (
                    sum,
                    item
                ) =>
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
     * 平均评分
     */
    getAverageScore(){


        const records =
            this.getRecords();



        if(!records.length){

            return 0;

        }




        const total =
            records.reduce(
                (
                    sum,
                    item
                ) =>
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


        const dates =
            this.getRecords()
            .map(
                item =>
                item.date
            )
            .sort()
            .reverse();




        if(!dates.length){

            return 0;

        }



        let days = 1;




        for(
            let i=1;
            i<dates.length;
            i++
        ){



            const diff =
                (
                    new Date(
                        dates[i-1]
                    )
                    -
                    new Date(
                        dates[i]
                    )
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
     * 最近一次记录
     */
    getLatestRecord(){


        const records =
            this.getRecords();



        if(!records.length){

            return null;

        }



        return [
            ...records
        ]
        .sort(
            (a,b)=>
            new Date(b.date)
            -
            new Date(a.date)
        )[0];


    },








    /**
     * 睡眠状态
     */
    getSleepStatus(){



        const score =
            this.getAverageScore();




        if(score >= 90){

            return "优秀 🌙";

        }



        if(score >=75){

            return "良好 🙂";

        }



        if(score >=60){

            return "一般 😐";

        }



        return "需要改善 😴";


    },









    /**
     * 今日详情
     */
    getTodayDetail(){



        const today =
            new Date()
            .toISOString()
            .split("T")[0];



        return this.getRecords()
        .find(
            item =>
            item.date === today
        )
        ||
        null;


    },









    /**
     * 最近7天平均睡眠
     */
    getWeeklyAverage(){



        const records =
            this.getRecords();



        const latest =
            [
                ...records
            ]
            .sort(
                (a,b)=>
                new Date(b.date)
                -
                new Date(a.date)
            )
            .slice(
                0,
                7
            );




        if(!latest.length){

            return 0;

        }




        const total =
            latest.reduce(
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
                latest.length
            )
            .toFixed(1)
        );


    },









    /**
     * 最佳睡眠日
     */
    getBestSleepDay(){



        const records =
            this.getRecords();



        if(!records.length){

            return null;

        }




        return [
            ...records
        ]
        .sort(
            (a,b)=>
            Number(
                b.duration
            )
            -
            Number(
                a.duration
            )
        )[0];


    },









    /**
     * 睡眠质量分布
     */
    getQualityDistribution(){



        const records =
            this.getRecords();




        const result = {


            excellent:0,

            good:0,

            normal:0,

            poor:0


        };




        records.forEach(
            item=>{


                const quality =
                    Number(
                        item.quality
                    );



                if(quality >= 9){

                    result.excellent++;

                }
                else if(
                    quality >= 7
                ){

                    result.good++;

                }
                else if(
                    quality >=5
                ){

                    result.normal++;

                }
                else{

                    result.poor++;

                }


            }
        );




        return result;


    },









    /**
     * 趋势图数据
     */
    getTrendData(){



        return [
            ...
            this.getRecords()
        ]
        .sort(
            (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
        )
        .map(
            item=>({


                date:
                item.date,


                duration:
                Number(
                    item.duration || 0
                )


            })
        );


    }



};