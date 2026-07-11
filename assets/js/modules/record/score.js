/**
 * ==========================================
 * Sleep Insight
 * record/score.js
 * 睡眠评分算法
 * ==========================================
 */



/**
 * 计算睡眠评分
 *
 * 参数:
 * duration 睡眠时长(h)
 * quality 睡眠质量(1-10)
 *
 * 返回:
 * 0-100 分
 */
export function calculateSleepScore(
    duration,
    quality
){



    /**
     * 睡眠时长评分
     *
     * 目标:
     * 7-9小时最佳
     */
    let durationScore;



    if(
        duration >= 7 &&
        duration <= 9
    ){

        durationScore = 100;


    }else if(
        duration < 7
    ){

        durationScore =
            duration / 7 * 100;


    }else{


        durationScore =
            Math.max(
                60,
                100 -
                (
                    duration - 9
                )
                *
                10
            );


    }





    /**
     * 睡眠质量评分
     *
     * 1-10 转换为100分
     */
    const qualityScore =
        Number(quality)
        *
        10;





    /**
     * 综合评分
     *
     * 睡眠时长 60%
     * 睡眠质量 40%
     */
    const score =
        durationScore * 0.6
        +
        qualityScore * 0.4;





    return Math.round(
        score
    );


}