/**
 * ==========================================
 * Sleep Insight
 * export/service.js
 * 报告数据服务
 * ==========================================
 */


import { SleepAnalytics }
from "../../services/sleepAnalytics.js";



export const ExportService = {



    /**
     * 获取报告数据
     */
    getReportData(){



        return {


            generatedAt:
                new Date()
                .toISOString(),



            overview:{


                averageSleep:
                    SleepAnalytics
                    .getAverageSleep(),



                averageScore:
                    SleepAnalytics
                    .getAverageScore(),



                continuousDays:
                    SleepAnalytics
                    .getContinuousDays()



            },



            latestRecord:
                SleepAnalytics
                .getLatestRecord(),



            bestRecord:
                SleepAnalytics
                .getBestSleepDay(),



            quality:
                SleepAnalytics
                .getQualityDistribution()



        };


    },








    /**
     * 生成睡眠总结
     */
    generateSummary(){



        const score =
            SleepAnalytics
            .getAverageScore();



        const average =
            SleepAnalytics
            .getAverageSleep();





        let summary = "";





        if(score >= 90){



            summary =
            "你的睡眠质量非常优秀，保持当前作息规律。";



        }
        else if(score >=75){



            summary =
            "你的睡眠状态良好，建议继续保持稳定睡眠时间。";



        }
        else if(score >=60){



            summary =
            "你的睡眠一般，可以尝试优化入睡时间和睡眠环境。";



        }
        else{


            summary =
            "近期睡眠质量需要改善，建议关注睡眠习惯。";


        }






        if(
            average < 7
        ){



            summary +=
            " 平均睡眠时间偏短，建议增加睡眠时长。";



        }
        else{


            summary +=
            " 平均睡眠时长达到较好水平。";


        }




        return summary;



    }






};