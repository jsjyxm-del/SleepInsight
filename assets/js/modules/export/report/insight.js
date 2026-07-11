/**
 * ==========================================
 * Sleep Insight
 * export/report/insight.js
 *
 * 睡眠智能分析
 * ==========================================
 */


import { SleepAnalytics }
from "../../../services/sleepAnalytics.js";



export const SleepInsight = {



    /**
     * 生成完整分析报告
     */
    generate(){


        return {


            trend:
                this.analyzeTrend(),


            quality:
                this.analyzeQuality(),


            bestDay:
                this.getBestDay(),


            suggestion:
                this.generateSuggestion()


        };


    },





    /**
     * 睡眠趋势分析
     */
    analyzeTrend(){


        const average =
            SleepAnalytics
            .getWeeklyAverage();



        if(average >= 7){


            return `最近7天平均睡眠 ${average} 小时，睡眠时长保持良好。`;


        }



        if(average >= 6){


            return `最近7天平均睡眠 ${average} 小时，睡眠时间略低，建议增加休息时间。`;


        }



        return `最近7天平均睡眠 ${average} 小时，睡眠不足，需要关注睡眠习惯。`;



    },







    /**
     * 睡眠质量分析
     */
    analyzeQuality(){



        const distribution =
            SleepAnalytics
            .getQualityDistribution();



        const excellent =
            distribution.excellent || 0;



        const good =
            distribution.good || 0;



        const total =
            excellent +
            good +
            (distribution.normal || 0) +
            (distribution.poor || 0);





        if(!total){


            return "暂无足够睡眠质量数据";


        }





        const rate =
            Math.round(
                (
                    (excellent + good)
                    /
                    total
                )
                *
                100
            );





        if(rate >= 80){


            return `睡眠质量较好，${rate}% 的记录达到良好水平。`;


        }




        if(rate >= 60){


            return `睡眠质量一般，${rate}% 的记录达到良好水平。`;


        }





        return `睡眠质量需要改善，目前仅 ${rate}% 的记录达到良好水平。`;



    },







    /**
     * 获取最佳睡眠日
     */
    getBestDay(){



        const record =
            SleepAnalytics
            .getBestSleepDay();



        if(!record){


            return "暂无最佳睡眠记录";


        }





        return `${record.date}，睡眠 ${record.duration} 小时，质量评分 ${record.quality}`;



    },







    /**
     * 生成建议
     */
    generateSuggestion(){



        const average =
            SleepAnalytics
            .getWeeklyAverage();




        if(average >= 7){


            return "当前睡眠状态稳定，建议保持规律作息，继续维持固定入睡时间。";


        }





        return "建议减少睡前刺激，保持规律睡眠时间，并逐步增加睡眠时长。";



    }



};