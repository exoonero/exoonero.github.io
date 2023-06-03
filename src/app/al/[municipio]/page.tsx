"use client";
import Footer from "@/components/Footer";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import { useEffect, useState } from "react";
import { If, Then, Else } from "react-if";

export default function MunicipioPage({
  params,
}: {
  params: { municipio: string };
}) {
  const [titleText, setTitleText] = useState("");
  const [erro, setErro] = useState(false);
  const buildTitle = (municipio: string) => {
    fetch(`https://exoonero.org/data/inicial/${municipio}-inicial.json`, {})
      .then((response) => {
        if (response.status === 404) {
          setErro(true);
        }
        return response.json();
      })
      .then((data) => {
        const title = data.nome as string;
        setTitleText(
          title.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          })
        );
      });
  };

  useEffect(() => {
    buildTitle(params.municipio as string);
  }, []);

  return (
    <main>
      <If condition={erro === false}>
        <Then>
          <MainLayout activeButton={"Home"}>
            <Municipio title={titleText} backActive={true}>
              <TotalAtos municipio={params.municipio as string} />
            </Municipio>
            <Footer />
          </MainLayout>
        </Then>
        <Else>
          <header className="flex gap-x-6 flex-row lg:flex-row gap-y-3 "></header>
          <div className="flex flex-col mt-5 mb-5">
            <p className="text-6xl mx-auto 4xl:w-[59rem]">Página Inexistente</p>
          </div>
        </Else>
      </If>
    </main>
  );
}
