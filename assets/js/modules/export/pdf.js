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





        const {
            jsPDF
        } = window.jspdf;





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
            `平均睡眠: ${data.overview.averageSleep} h`,
            20,
            40
        );



        doc.text(
            `睡眠评分: ${data.overview.averageScore}`,
            20,
            50
        );



        doc.text(
            `连续记录: ${data.overview.continuousDays} 天`,
            20,
            60
        );






        doc.text(
            "睡眠总结:",
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
                "最近一次记录:",
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