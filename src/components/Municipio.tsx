import { BackIcon } from "@/assets/svgs/icons";
import Link from "next/link";
import { If, Then } from "react-if";

interface MunicipioProps {
    title: string;
    children: React.ReactNode;
    backActive?: boolean;
  }
  
  export default function Municipio({title, children, backActive}: MunicipioProps) {
    
    return (
      <main>
        <header className="flex gap-x-6 flex-row lg:flex-row gap-y-3 ">
          <If condition={backActive}>
            <Then>
            <Link href="/" className="bg-[#5AB290] px-6 pt-5 rounded-[82px] w-[4.5rem] h-16">
                <BackIcon/>
            </Link></Then>
          </If>
          <h1 className=" text-2xl 2xl:text-3xl 3xl:text-[2.4375rem]  font-semibold lg:w-[42.93rem] leading-10">
            Acompanhe as nomeações e exonerações que aconteceram em
            <span className="text-[#4AA381]">{" " + title}</span>
          </h1>
        </header>
        <main className="flex flex-col gap-y-6 3xl:mb-14 mb-8">
          <div className="flex flex-wrap gap-y-4 lg:gap-x-20 2xl:gap-x-[3%] justify-center">
            {children}
          </div>
          <div className="flex flex-col gap-y-6 ">
            <h1 className="text-2xl 2xl:text-3xl 3xl:text-[2.4375rem] 4xl:w-[50rem] font-semibold  leading-10 mt-6 mx-auto text-center">
              Verifique também as nomeações e exonerações de qualquer de qualquer
              cidade de Alagoas
            </h1>
            <p className="font-normal text-[#7C828A] 3xl:mx-auto 4xl:w-[59rem]">
              Coletamos os diários oficiais municipais publicados pela Associação
              dos Municípios Alagoanos (AMA). Escolha abaixo uma cidade de Alagoas
              e um determinado período e te apresentaremos as nomeações e
              exonerações do município.
            </p>
          </div>
        </main>
      </main>
    );
  }
  