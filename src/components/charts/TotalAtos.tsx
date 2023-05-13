"use client";
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ChartBox } from './ChartBox';

const TotalAtos = () => {
  const [chartData, setChartData] = useState({
    options: {
        series:[
          {
            name: "Nomeações",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 24, 56]
          },
          {
            name: "Exonerações",
            data: [23, 31, 33, 42, 48, 32, 51, 36, 30, 56]
          }
        ],
        chart: {
          type: 'bar',
        },
        legend: {
          position: 'top',
          horizontalAlign: 'center',
          markers: {
            width: 8,
            height: 8,
            padding: 8,
            radius: 12,
            offsetX: -4,
          },
          itemMargin: {
            horizontal: 12
          },
          fontSize: 16,
          fontFamily: "Source Sans Pro, sans-serif"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: '60%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 3,
          colors:   ['transparent']
        },
        xaxis: {
          categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
          labels: {
            style: {
                fontFamily: 'Source Sans Pro, sans-serif',
                fontSize: 9,
                fontWeight: 800,
            }},


        },
        grid: {
          show: false
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val: string) {
              return val + " pessoas"
            }
          }
        },
        colors: ['#57C5ED', '#EC6666']
      } as any })
    return (
      <>
        <ChartBox>
            <h1 className="mb-3 font-bold text-xl text-center pt-5">Atos no período</h1>
            <Chart options={chartData.options} series={chartData.options.series} type='bar' width="100%" height="70%"/>
        </ChartBox>
        
      </>);
};


export default TotalAtos;