/**
 * ==========================================
 * Sleep Insight
 * record/index.js
 * 睡眠记录模块入口
 * ==========================================
 */


import {
    renderRecordTemplate
}
from "./template.js";


import {
    RecordEvents
}
from "./events.js";


import {
    RecordList
}
from "./list.js";



export const Record = {



    /**
     * 页面渲染
     */
    render(){


        return renderRecordTemplate();


    },





    /**
     * 页面初始化
     */
    init(){



        // 初始化表单事件

        RecordEvents.init();



        // 初始化记录列表

        RecordList.render();



    }



};