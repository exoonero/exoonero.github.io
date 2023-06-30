import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CidadesNomeacao() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/exoonero/extrator/main/docs/site/dados/geral.json", {})
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const series = useMemo(() => {
    if (!data) return [];
    const rankingNomeacoes = data["ranking_nomeacoes"];
    return Object.values(rankingNomeacoes).map((elemento: any) => elemento.num);
  }, [data]);

  const labels = useMemo(() => {
    if (!data) return [];
    const rankingNomeacoes = data["ranking_nomeacoes"];
    return Object.values(rankingNomeacoes).map((elemento: any) => elemento.nome);
  }, [data]);

  const chartData = useMemo(()=>{
    return {
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
        series: series,
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
        labels: labels,
        colors: ["#41acd3", "#57c5ed", "#8cdffd", "#3daee9", "#2ca0d3"],
      },
    };
  }, [labels, series]);
  return (
    <section className="bg-white w-[100%] 2xl:w-[48%] 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
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
