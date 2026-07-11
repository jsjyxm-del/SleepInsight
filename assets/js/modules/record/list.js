/**
 * ==========================================
 * Sleep Insight
 * record/list.js
 * 睡眠记录列表
 * ==========================================
 */

import { RecordService } from "./service.js";


export const RecordList = {


    /**
     * 渲染记录列表
     */
    render() {


        const records = RecordService.getAll();


        const container =
            document.getElementById("record-list");


        if (!container) {

            return;

        }



        if (records.length === 0) {


            container.innerHTML = `

                <div class="empty">

                    暂无睡眠记录

                </div>

            `;


            return;

        }



        container.innerHTML = records.map(record => {


            return `

            <div class="record-row">


                <div class="record-info">


                    <strong>

                        ${record.date}

                    </strong>


                    <span>

                        ${record.duration} 小时

                    </span>


                    <span>

                        ⭐ ${record.quality}

                    </span>


                </div>



                <button

                    class="delete-btn"

                    data-id="${record.id}">

                    删除

                </button>


            </div>


            `;


        }).join("");



        this.bindDelete();

    },




    /**
     * 删除事件
     */
    bindDelete() {


        const buttons =
            document.querySelectorAll(".delete-btn");



        buttons.forEach(button => {


            button.addEventListener(
                "click",
                () => {


                    const id =
                        button.dataset.id;



                    if (
                        confirm(
                            "确定删除这条记录吗？"
                        )
                    ) {


                        RecordService.remove(id);


                        this.render();


                    }


                }
            );


        });


    }


};