/**
 * ==========================================
 * Sleep Insight
 * statistics/charts.js
 * 数据统计图表
 * ==========================================
 */


import { SleepAnalytics }
from "../../services/sleepAnalytics.js";




export const StatisticsCharts = {



    charts:{},





    init(){



        this.createTrendChart();


        this.createQualityChart();



    },








    createTrendChart(){



        const canvas =
            document.getElementById(
                "statistics-trend-chart"
            );



        if(!canvas){

            return;

        }





        const data =
            SleepAnalytics
            .getTrendData();





        this.charts.trend =
            new Chart(
                canvas,
                {


                    type:"line",


                    data:{


                        labels:
                        data.map(
                            item =>
                            item.date
                        ),



                        datasets:[{


                            label:
                            "睡眠时长(h)",



                            data:
                            data.map(
                                item =>
                                item.duration
                            ),


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



    },









    createQualityChart(){



        const canvas =
            document.getElementById(
                "quality-chart"
            );



        if(!canvas){

            return;

        }




        const quality =
            SleepAnalytics
            .getQualityDistribution();





        this.charts.quality =
            new Chart(
                canvas,
                {


                    type:"bar",



                    data:{


                        labels:[

                            "优秀",
                            "良好",
                            "一般",
                            "较差"

                        ],



                        datasets:[{


                            label:
                            "次数",



                            data:[

                                quality.excellent,

                                quality.good,

                                quality.normal,

                                quality.poor

                            ]


                        }]


                    },


                    options:{


                        responsive:true


                    }


                }

            );



    }




};