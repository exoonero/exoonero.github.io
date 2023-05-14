"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CidadesNomeacao() {
  const [chartData, setChartData] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0.5,
        dashArray: 0,
      },
      plotOptions: {
        pie: {
          customScale: 1.08,
        },
      },
      series: [7292, 5215, 3459],
      chart: {
        type: "donut" as const,
        donut: {
          size: "85%",
        },
        height: 200,
        width: 500,
      },
      legend: {
        position: "bottom" as const,
        fontSize: "12px",
        formatter: function (val: string, opts: any) {
          return (
            val +
            " (<strong>" +
            opts.w.globals.series[opts.seriesIndex] +
            "</strong>)"
          );
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      labels: ["Maragogi", "Marechal Deodoro", "Delmiro Gouveia"],
      colors: ["#41acd3", "#57c5ed", "#8cdffd"],
    },
  });
  return (
    <section className="bg-white w-[100%] md:w-[48%] 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 font-bold text-xl text-center pt-5">
        Cidades que mais nomearam
      </h1>
      <Chart
        options={chartData.options}
        series={chartData.options.series}
        type="donut"
        width="100%"
        height="80%"
      />
    </section>
  );
}
