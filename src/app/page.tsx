"use client";
import Footer from "@/components/Footer";
import CidadesExoneracao from "@/components/charts/CidadesExoneracao";
import CidadesNomeacao from "@/components/charts/CidadesNomeacao";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import Head from "next/head";


export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MainLayout activeButton={"Home"}>
        <Municipio municipioId={"Alagoas"} backActive={false}>
          <TotalAtos municipio={"geral"} ano={"todos"} />
          <CidadesNomeacao />
          <CidadesExoneracao />
        </Municipio>
        <Footer />
      </MainLayout>
    </main>
  );
}
