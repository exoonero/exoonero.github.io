"use client";
import Footer from "@/components/Footer";
import CidadesExoneracao from "@/components/charts/CidadesExoneracao";
import CidadesNomeacao from "@/components/charts/CidadesNomeacao";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import Link from "next/link";
import Head from "next/head";

import { Else, If, Then } from "react-if";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MainLayout activeButton={"Home"}>
        <Municipio title={"Alagoas"} backActive={false}>
          <TotalAtos municipio={"geral"} />
          <CidadesNomeacao />
          <CidadesExoneracao />
        </Municipio>

        <Footer />
      </MainLayout>
    </main>
  );
}
