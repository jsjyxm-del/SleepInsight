/**
 * ==========================================
 * Sleep Insight
 * statistics/charts.js
 * 统计图表
 * ==========================================
 */


import {
    StatisticsService
}
from "./service.js";



export const StatisticsCharts = {



    qualityChart:null,



    init(){


        this.renderQualityChart();


    },





    renderQualityChart(){


        const canvas =
            document.getElementById(
                "quality-chart"
            );



        if(!canvas){

            return;

        }



        const records =
            StatisticsService
            .getRecords();



        const labels =
            records
            .slice(-7)
            .map(
                item=>item.date
            );



        const values =
            records
            .slice(-7)
            .map(
                item=>item.quality
            );




        if(this.qualityChart){

            this.qualityChart.destroy();

        }





        this.qualityChart =
            new Chart(

                canvas,

                {


                    type:"bar",


                    data:{


                        labels,


                        datasets:[{


                            label:
                            "睡眠质量",


                            data:values


                        }]

                    },



                    options:{


                        responsive:true,


                        scales:{


                            y:{


                                beginAtZero:true,


                                max:10


                            }


                        }


                    }


                }


            );


    }



};