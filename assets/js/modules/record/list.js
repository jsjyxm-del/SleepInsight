/**
 * ==========================================
 * Sleep Insight
 * record/list.js
 * 睡眠记录列表
 * ==========================================
 */


import {
    RecordService
}
from "./service.js";



export const RecordList = {



    render(){



        const records =
            RecordService.getRecords();



        const container =
            document.getElementById(
                "record-list"
            );



        if(!container){

            return;

        }





        if(
            !records ||
            records.length === 0
        ){


            container.innerHTML = `

                <div class="empty">

                    暂无睡眠记录

                </div>

            `;


            return;

        }






        /**
         * 最新记录排序
         * 兼容旧数据
         */
        records.sort(
            (a,b)=>{


                const timeA =
                    a.createdAt
                    ?
                    new Date(a.createdAt)
                    :
                    new Date(a.date);



                const timeB =
                    b.createdAt
                    ?
                    new Date(b.createdAt)
                    :
                    new Date(b.date);



                return timeB - timeA;


            }
        );







        container.innerHTML =

        records.map(
            record=>`


            <div class="record-row">


                <div class="record-info">


                    <h3>
                        ${record.date}
                    </h3>



                    ${
                        record.bedtime
                        ?
                        `
                        <p>
                        睡眠时间：
                        ${record.bedtime}
                        -
                        ${record.wakeTime}
                        </p>
                        `
                        :
                        ""
                    }




                    <p>

                        睡眠时长：

                        ${record.duration}

                        小时

                    </p>




                    <p>

                        睡眠质量：

                        ⭐

                        ${record.quality}/10

                    </p>




                    ${
                        record.score
                        ?
                        `
                        <p>
                        睡眠评分：
                        ${record.score}/100
                        </p>
                        `
                        :
                        ""
                    }




                    ${
                        record.notes
                        ?
                        `
                        <p>
                        备注：
                        ${record.notes}
                        </p>
                        `
                        :
                        ""
                    }



                </div>




                <button

                    class="delete-btn"

                    data-id="${record.id}">

                    删除

                </button>



            </div>


            `
        )
        .join("");





        this.bindDelete();



    },






    bindDelete(){



        const buttons =
            document.querySelectorAll(
                ".delete-btn"
            );



        buttons.forEach(
            button=>{


                button.onclick =
                ()=>{


                    const id =
                        Number(
                            button.dataset.id
                        );



                    if(
                        confirm(
                            "确定删除这条记录吗？"
                        )
                    ){


                        RecordService
                        .removeRecord(
                            id
                        );



                        this.render();


                    }


                };


            }
        );



    }



};