/**
 * ==========================================
 * Sleep Insight
 * record/events.js
 * 睡眠记录事件处理
 * ==========================================
 */


import {
    RecordService
}
from "./service.js";



import {
    RecordList
}
from "./list.js";





export const RecordEvents = {



    /**
     * 初始化事件
     */
    init(){



        const form =
            document.getElementById(
                "sleep-form"
            );



        if(!form){

            return;

        }





        form.addEventListener(
            "submit",
            (event)=>{


                event.preventDefault();



                this.handleSubmit(
                    form
                );


            }
        );



    },





    /**
     * 保存表单
     */
    handleSubmit(form){



        const data = {



            date:
            document.getElementById(
                "date"
            )
            .value,



            bedtime:
            document.getElementById(
                "bedtime"
            )
            .value,



            wakeTime:
            document.getElementById(
                "wakeTime"
            )
            .value,



            quality:
            document.getElementById(
                "quality"
            )
            .value,



            notes:
            document.getElementById(
                "notes"
            )
            .value



        };





        if(
            !data.date ||
            !data.bedtime ||
            !data.wakeTime
        ){

            alert(
                "请填写完整睡眠信息"
            );

            return;

        }






        const record =
            RecordService
            .saveRecord(
                data
            );





        console.log(
            "保存成功:",
            record
        );





        form.reset();




        RecordList.render();



        alert(
            "睡眠记录保存成功"
        );



    }



};