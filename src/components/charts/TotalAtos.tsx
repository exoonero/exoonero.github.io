"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
var seriesGeral: any[] = [];
fetch("/data/inicial/geral-inicial.json", {})
    .then((res) => res.json())
    .then((data) => {
      const detalhe = data.detalhe;
      seriesGeral = [
        {
          name: "Nomeações" as const,
          data: []
        } as any,
        {
          name: "Exonerações" as const,
          data: []
        } as any,
      ];
      Object.values(detalhe).forEach((elemento: any, indice) => {
        let nomeacao = elemento.num_nomeacoes;
        seriesGeral[0]["data"].push(nomeacao);
        let exoneracao = elemento.num_exoneracoes;
        seriesGeral[1]["data"].push(exoneracao);
      });
    });
export default function TotalAtos() {
  
  
  const [chartData, setChartData] = useState({
    options: {
      series: seriesGeral,
      legend: {
        position: "top" as const,
        horizontalAlign: "center" as const,
        markers: {
          width: 8,
          height: 8,
          padding: 8,
          radius: 12,
          offsetX: -4,
        },
        itemMargin: {
          horizontal: 12,
        },
        fontSize: "16" as string,
        fontFamily: "Source Sans Pro, sans-serif",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          columnWidth: "60%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        labels: {
          style: {
            fontFamily: "Source Sans Pro, sans-serif",
            fontSize: "10" as const,
            fontWeight: 800,
          },
        },
      },
      tooltip: {
        intersect: false,
        shared: true,
      },
      grid: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#57C5ED", "#EC6666"],
    },
  });
  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 font-bold text-xl text-center pt-5">
        Atos no período
      </h1>
      <Chart
        options={chartData.options}
        series={seriesGeral}
        type="bar"
        width="100%"
        height="70%"
      />
    </section>
  );
}
