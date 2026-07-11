/**
 * ==========================================
 * Sleep Insight
 * seedData.js
 * 开发测试数据生成器
 * ==========================================
 */


import { Storage } from "../core/storage.js";



export const SeedData = {


    /**
     * 生成测试睡眠数据
     */
    generate() {


        const records = [];



        for(
            let i = 30;
            i >= 0;
            i--
        ){


            const date =
                new Date();



            date.setDate(
                date.getDate() - i
            );



            const dateString =
                date
                .toISOString()
                .split("T")[0];



            const duration =
                Number(
                    (
                        6 +
                        Math.random()*2.5
                    )
                    .toFixed(1)
                );



            const quality =
                Math.floor(
                    Math.random()*3
                )
                + 7;



            records.push({


                id:
                Date.now()+i,


                date:
                dateString,


                duration,


                quality,


                notes:
                "测试睡眠数据"


            });



        }



        Storage.saveRecords(
            records
        );



        console.log(
            "Sleep Insight 测试数据生成完成"
        );


    }



};