import React, { Component } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts'
import './portfolioperf.css'
import axios from 'axios'
import { SportsMotorsportsSharp } from '@material-ui/icons';
// material
// import { Card, CardHeader, Box, Paper } from '@material-ui/core';
// import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
// import { BorderColor } from '@material-ui/icons';


// const RootStyle = styled(Paper)(({theme}) =>({
//     backgroundColor: theme.palette.background.default,
//     borderRadius:theme.shape.borderRadius,
//     borderColor:'#737373'
// }))
export default class PortfolioPerf extends Component {

    componentWillMount() {
        // const points = [{
        //     data: [

        //     ]
        // }];

        // this.setState({ series: points })
        this.getAddressChartHistory()

    }

    // Will return history of ethereum account address
    async getAddressChartHistory() {
        // const web3 = window.web3;
        // const accounts = await web3.eth.getAccounts();
        // this.setState({account:accounts[0]})
        var data = [];
        var points = [];
        let result = [];
        let c = {};
        // let points = {}
        await axios.get(`https://api2.ethplorer.io/getAddressChartHistory/0xf58d751CC07E55A7a64fe80b2A3D8880D03FEC39?apiKey=ethplorer.widget`, {}, {})
            .then(async (response) => {
                // result = JSON.parse(response.history);
                console.log('response:::' + response.data.history.timestamp);
                result = response.data.history.data;

                for (var i = 0; i < result.length; i++) {
                    var temp = [];
                    temp.push(result[i].date);
                    temp.push(result[i].max);
                    // console.log("temp:::"+temp)
                    data.push(temp);
                    // console.log("data array:::"+data.type);
                    // console.log(typeof data);

                }
                // this.setState({totalValue: total.toFixed(2)})
                // console.log(total)
                c = { data: data };
                // points
                points.push(c);
                console.log(c);
                this.setState({ series: points })
                console.log("account::" + this.state.account);
            })


    }

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            series: 0,
            options: {
                chart: {
                    id: 'area-datetime',
                    type: 'area',
                    height: 'auto',
                    zoom: {
                        autoScaleYaxis: true
                    },
                    sparkline: {
                        enabled: true,
                    },
                    toolbar: {
                        show: false
                    },

                },
                /*annotations: {
                    yaxis: [{
                        y: 30,
                        borderColor: '#999',
                        label: {
                            show: true,
                            text: 'Support',
                            style: {
                                color: "#fff",
                                background: '#00E396'
                            }
                        }
                    }],
                    xaxis: [{
                        x: new Date('14 Nov 2012').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Rally',
                            style: {
                                color: "#fff",
                                background: '#775DD0'
                            }
                        }
                    }]
                },*/

                dataLabels: {
                    enabled: false,
                    style: {
                        colors: ['#BB86FC'],
                    },
                },
                legend: {

                },
                markers: {
                    size: 0,
                    style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    // min: new Date('17 Jan 2020').getTime(),
                    tickAmount: 0,
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                yaxis: {
                    labels: {
                        show: false,
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },

                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    },
                    y: {
                        formatter: undefined,
                        title: {
                            formatter: (seriesName) => seriesName,
                        },
                    },
                },
                stroke: {
                    show:true,
                    curve: 'smooth',
                    width: 1,
                    colors: ['#BB86FC'],
                },
                fill: {
                    colors: ['#493864', '#291d41', '#1c515b'],
                    opacity: 0.4,
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 0,
                        type: "horizontal",
                        stops: [0, 100],
                        colorStops: [
                            {
                                offset: 0,
                                color: "#493864",
                                opacity: 0.4
                            },
                            {
                                offset: 35,
                                color: "#291d41",
                                opacity: 0.4
                            },
                            {
                                offset: 70,
                                color: "#1c515b",
                                opacity: 0.4
                            }
                        ]
                    }
                },
                title: {
                    text: "Portfolio Performance",
                    align: 'left',
                    margin: 20,
                    offsetX: 15,
                    offsetY: 10,
                    floating: false,
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#fff'
                    },
                },
                noData: {
                    text: "Your wallet is empty",
                    align: 'center',
                    verticalAlign: 'middle',
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                      color: '#fff',
                      fontSize: '14px',
                      fontFamily: undefined
                    }
                  },
                selection: 'one_month',
            },
        };
    }


    updateData(timeline) {
        const length = this.state.series[0].data.length;
        const firstDay = new Date(this.state.series[0].data[0][0]);
        const lastDay = new Date(this.state.series[0].data[length - 1][0]);
        const oneMonthBackDate = new Date();
        const oneDayBackDate = new Date();
        const oneYearBackDate = new Date();
        oneMonthBackDate.setMonth(lastDay.getMonth() - 1);
        oneDayBackDate.setDate(lastDay.getDate() - 2);
        oneYearBackDate.setFullYear(lastDay.getFullYear() - 1);
        console.log("example date:::" + new Date('12 Jun 2021').getTime())
        console.log("your result::" + oneMonthBackDate.getTime())

        this.setState({
            selection: timeline
        })

        switch (timeline) {
            case 'one_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    oneMonthBackDate.getTime(),
                    lastDay.getTime()
                )
                break

            case 'one_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    oneYearBackDate.getTime(),
                    lastDay.getTime()
                )
                break
            case 'ytd':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    oneDayBackDate.getTime(),
                    lastDay.getTime()
                )
                break
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    firstDay.getTime(),
                    lastDay.getTime()
                )
                break
            default:
        }
    }

    render() {
        return (
            <div id="chart" className='chart'>
                {/* <div >
                <button id="one_month"

                    onClick={() => this.updateData('one_month')} className={(this.state.selection === 'one_month' ? 'active' : '')}>
                    1M
                </button>
                &nbsp;
                <button id="one_year"


                    onClick={() => this.updateData('one_year')} className={(this.state.selection === 'one_year' ? 'active' : '')}>
                    1Y
                </button>
                &nbsp;
                <button id="ytd"

                    onClick={() => this.updateData('ytd')} className={(this.state.selection === 'ytd' ? 'active' : '')}>
                    YTD
                </button>
                &nbsp;
                <button id="all"

                    onClick={() => this.updateData('all')} className={(this.state.selection === 'all' ? 'active' : '')}>
                    ALL
                </button>
            </div> */}

                <div className='chart-timeline'>
                    
                    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={250} />
                </div>
            </div>


        )
    }
}

