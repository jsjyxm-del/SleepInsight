/**
 * ==========================================
 * Sleep Insight
 * export/pdf.js
 * PDF报告生成
 * ==========================================
 */


import { ExportService }
from "./service.js";



export const PDFExporter = {



    /**
     * 导出PDF
     */
    export(){



        const data =
            ExportService
            .getReportData();



        const summary =
            ExportService
            .generateSummary();





        /**
         * 兼容不同版本 jsPDF
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






        doc.setFontSize(20);


        doc.text(
            "Sleep Insight Report",
            20,
            20
        );






        doc.setFontSize(12);



        doc.text(
            `Average Sleep: ${data.overview.averageSleep} h`,
            20,
            40
        );



        doc.text(
            `Sleep Score: ${data.overview.averageScore}`,
            20,
            50
        );



        doc.text(
            `Continuous Days: ${data.overview.continuousDays}`,
            20,
            60
        );







        doc.text(
            "Sleep Summary:",
            20,
            80
        );



        doc.text(
            summary,
            20,
            95,
            {
                maxWidth:160
            }
        );







        if(data.latestRecord){



            doc.text(
                "Latest Record:",
                20,
                125
            );



            doc.text(
                `${data.latestRecord.date}  ${data.latestRecord.duration} h`,
                20,
                140
            );



        }







        doc.save(
            "SleepInsight_Report.pdf"
        );



    }




};