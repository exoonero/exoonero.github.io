import React, { useMemo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Detalhe {
  num_nomeacoes: number;
  num_exoneracoes: number;
}
interface TotalAtosProps {
  municipio: string;
}

export default function TotalAtos({ municipio }: TotalAtosProps) {
  const [dataNomeacoes, setDataNomeacoes] = useState<number[]>([]);
  const [dataExoneracoes, setDataExoneracoes] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const url =
      municipio === 'geral'
        ? 'https://exoonero.org/data/inicial/geral-inicial.json'
        : `https://exoonero.org/data/inicial/${municipio}-inicial.json`;
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        const detalhe = data.detalhe as Record<string, Detalhe>;
        const nomeacoes: number[] = [];
        const exoneracoes: number[] = [];
        Object.values(detalhe).forEach((elemento) => {
          let nomeacao = elemento.num_nomeacoes;
          nomeacoes.push(nomeacao);
          let exoneracao = elemento.num_exoneracoes;
          exoneracoes.push(exoneracao);
        });
        setDataNomeacoes(nomeacoes);
        setDataExoneracoes(exoneracoes);
        setCategories(Object.keys(detalhe).sort());
      });
  }, [municipio]);

  const chartData = useMemo(() => {
    return {
      options: {
        series: [
          {
            "name": "Nomeações" as const,
            "data":  dataNomeacoes,
          },
          {
            "name": "Exoneracoes",
            "data": dataExoneracoes,
          }
        ] as any,
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
          categories: categories,
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
    };
  }, [dataNomeacoes, dataExoneracoes, categories]);

  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 font-bold text-xl text-center pt-5">Atos no período</h1>
      <Chart options={chartData.options} series={chartData.options.series} type="bar" width="100%" height="70%" />
    </section>
  );
}