"use client"
import Footer from "@/components/Footer";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import { useEffect, useState } from "react";

export default function MunicipioPage({params}: {params: {municipio: string}}){
    const [titleText, setTitleText] = useState("");

    const buildTitle = (municipio: string) => {
      fetch(`https://exoonero.org/data/inicial/${municipio}-inicial.json`, {})
        .then((res) => res.json())
        .then((data) => {
          const title = data.nome as string;
          setTitleText(title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
        });
    };

    useEffect(() => {
      buildTitle(params.municipio as string);
    }, []);

    return (
      <main>
        <MainLayout activeButton={"Home"}>
          <Municipio title={titleText} backActive={true}>
            <TotalAtos municipio={params.municipio as string} />
          </Municipio>
          <Footer />
        </MainLayout>
      </main>
    );
}