/**
 * ==========================================
 * Sleep Insight
 * export/pdf.js
 *
 * PDF报告生成 v2
 * ==========================================
 */


import { ExportService }
from "./service.js";


import { SleepInsight }
from "./report/insight.js";



export const PDFExporter = {



    /**
     * 导出PDF
     */
    export(){



        /**
         * 获取基础数据
         */
        const data =
            ExportService
            .getReportData();




        /**
         * 获取智能分析
         */
        const insight =
            SleepInsight
            .generate();





        /**
         * 获取 jsPDF
         */
        const jsPDF =
            window.jspdf?.jsPDF ||
            window.jsPDF;




        if(!jsPDF){


            console.error(
                "jsPDF 未加载",
                window.jspdf
            );


            alert(
                "PDF组件未加载"
            );


            return;


        }





        const doc =
            new jsPDF();






        /**
         * 标题
         */
        doc.setFontSize(20);


        doc.text(
            "Sleep Insight Report",
            20,
            20
        );






        /**
         * 基础概览
         */
        doc.setFontSize(12);



        doc.text(
            "Sleep Overview",
            20,
            40
        );



        doc.text(
            `Average Sleep: ${data.overview.averageSleep} h`,
            20,
            55
        );



        doc.text(
            `Sleep Score: ${data.overview.averageScore}`,
            20,
            65
        );



        doc.text(
            `Continuous Days: ${data.overview.continuousDays}`,
            20,
            75
        );







        /**
         * 智能分析
         */
        doc.text(
            "Sleep Analysis",
            20,
            100
        );





        doc.text(
            "Trend:",
            20,
            115
        );


        doc.text(
            insight.trend,
            35,
            115,
            {
                maxWidth:150
            }
        );







        doc.text(
            "Quality:",
            20,
            135
        );



        doc.text(
            insight.quality,
            35,
            135,
            {
                maxWidth:150
            }
        );







        doc.text(
            "Best Sleep Day:",
            20,
            155
        );



        doc.text(
            insight.bestDay,
            35,
            155,
            {
                maxWidth:150
            }
        );








        /**
         * 建议
         */
        doc.text(
            "Suggestion:",
            20,
            180
        );



        doc.text(
            insight.suggestion,
            35,
            180,
            {
                maxWidth:150
            }
        );







        /**
         * 最近记录
         */
        if(data.latestRecord){



            doc.text(
                "Latest Record:",
                20,
                215
            );



            doc.text(
                `${data.latestRecord.date}  ${data.latestRecord.duration} h`,
                35,
                215
            );


        }







        /**
         * 保存
         */
        doc.save(
            "SleepInsight_Report.pdf"
        );



    }



};