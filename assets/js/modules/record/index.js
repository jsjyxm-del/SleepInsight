/**
 * ==========================================
 * Sleep Insight
 * record/index.js
 * 睡眠记录模块入口
 * ==========================================
 */


import { renderRecordTemplate } 
from "./template.js";


import { bindRecordEvents } 
from "./events.js";


import { RecordList } 
from "./list.js";



export const Record = {



    /**
     * 页面渲染
     */
    render() {


        return renderRecordTemplate();


    },




    /**
     * 页面初始化
     */
    init() {



        // 绑定表单事件

        bindRecordEvents(
            () => {

                RecordList.render();

            }
        );



        // 加载记录列表

        RecordList.render();



    }


};