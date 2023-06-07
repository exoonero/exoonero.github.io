import React from 'react';
import Footer from "@/components/Footer";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import { If, Then, Else } from "react-if";
import { municipios } from './consts';
interface Params {
  municipio: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return municipios;
}

interface MunicipioPageProps {
  params: Params;
}

const MunicipioPage: React.FC<MunicipioPageProps> = ({ params }) => {
  
  return (
    <main>
          <MainLayout activeButton={"Home"}>
            <Municipio title={params.municipio} backActive={true}>
              <TotalAtos municipio={params.municipio as string} />
            </Municipio>
            <Footer />
          </MainLayout>
    </main>
  );
};

export default MunicipioPage;