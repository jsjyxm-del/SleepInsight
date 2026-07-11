/**
 * ==========================================
 * Sleep Insight
 * sleepChart.js
 * 睡眠趋势图
 * ==========================================
 */


import { ChartService }
from "../services/chartService.js";



export const SleepChart = {



    instance:null,



    /**
     * 初始化图表
     */
    init(){



        const canvas =
            document.getElementById(
                "sleep-chart"
            );



        if(!canvas){

            return;

        }



        const data =
            ChartService
            .getWeeklySleepData();



        if(this.instance){

            this.instance.destroy();

        }



        this.instance =
            new Chart(
                canvas,
                {

                    type:"line",


                    data:{


                        labels:
                            data.labels,


                        datasets:[{

                            label:
                            "睡眠时间(h)",


                            data:
                            data.values,


                            tension:0.3


                        }]

                    },


                    options:{


                        responsive:true,


                        scales:{


                            y:{


                                beginAtZero:true


                            }


                        }


                    }


                }

            );


    }


};