import React from 'react';
import Footer from "@/components/Footer";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import { If, Then, Else } from "react-if";
import { ano } from './consts';

interface Params {
  ano: string;
}
export async function generateStaticParams(): Promise<Params[]> {
  return ano;
}

interface AnoPageProps {
  params: Params;
}


const AnoPage: React.FC<AnoPageProps> = ({ params }: {params: {ano: string}}) => {
  
  return (
    
    <main>
      
          <MainLayout activeButton={"Home"}>
            <Municipio municipioId={"geral"} backActive={true} ano={params.ano}>
              <TotalAtos municipio={"geral"} ano={params.ano} />
            </Municipio>
            <Footer />
          </MainLayout>
    </main>
  );
};

export default AnoPage;