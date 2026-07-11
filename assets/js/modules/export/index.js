/**
 * ==========================================
 * Sleep Insight
 * export/index.js
 * 导出报告模块入口
 * ==========================================
 */


import {
    renderExportTemplate
}
from "./template.js";



import {
    ExportService
}
from "./service.js";



import {
    PDFExporter
}
from "./pdf.js";





export const ExportModule = {




    /**
     * 页面渲染
     */
    render(){


        return renderExportTemplate();


    },







    /**
     * 页面初始化
     */
    init(){



        const data =
            ExportService
            .getReportData();




        const summary =
            ExportService
            .generateSummary();






        const sleepEl =
            document.getElementById(
                "report-average-sleep"
            );



        const scoreEl =
            document.getElementById(
                "report-score"
            );



        const daysEl =
            document.getElementById(
                "report-days"
            );



        const summaryEl =
            document.getElementById(
                "sleep-summary"
            );








        if(sleepEl){


            sleepEl.innerHTML =
            `
            ${data.overview.averageSleep}
            h
            `;


        }







        if(scoreEl){


            scoreEl.innerHTML =
                data.overview.averageScore;


        }







        if(daysEl){


            daysEl.innerHTML =
            `
            ${data.overview.continuousDays}
            天
            `;


        }







        if(summaryEl){


            summaryEl.innerHTML =
                summary;


        }








        const pdfBtn =
            document.getElementById(
                "export-pdf"
            );



        if(pdfBtn){


            pdfBtn.onclick =
            ()=>{


                PDFExporter.export();


            };


        }








        const jsonBtn =
            document.getElementById(
                "export-json"
            );



        if(jsonBtn){


            jsonBtn.onclick =
            ()=>{


                this.exportJSON();


            };


        }



    },









    /**
     * 导出JSON
     */
    exportJSON(){



        const data =
            ExportService
            .getReportData();





        const blob =
            new Blob(
                [
                    JSON.stringify(
                        data,
                        null,
                        2
                    )
                ],
                {
                    type:
                    "application/json"
                }
            );





        const url =
            URL.createObjectURL(
                blob
            );





        const a =
            document.createElement(
                "a"
            );



        a.href = url;



        a.download =
            "SleepInsight_Data.json";



        a.click();




        URL
        .revokeObjectURL(
            url
        );


    }





};