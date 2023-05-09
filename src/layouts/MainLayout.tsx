import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import OKBRIcon from "@/assets/svgs/okbr-icon";
import { useMemo } from "react";
import { Source_Sans_Pro } from "next/font/google";

const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

interface MainLayoutProps {
  children: React.ReactNode;
  activeButton: "Home" | "About" | "News"  
}

export function MainLayout({ children, activeButton}: MainLayoutProps) {
  const anos = useMemo(
    () => [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
    ],
    []
  );

  return (
    <div className={sourceSansPro.className}>
      <div className="h-screen flex">
        <div className="flex flex-1">
          <Navbar activeButton={activeButton}/>
          <aside className="hidden xl:w-[33.875rem]  bg-[#4AA381] pl-12 pr-9 min-[1792px]:pt-12 lg:pt-10 lg:flex flex-col min-[1792px]:gap-y-[2.6175rem] lg:gap-y-[2.5rem] relative overflow-hidden ">
            <div className="w-full flex flex-col gap-y-3 min-[1792px]:gap-y-5">
              <h1 className="text-white text-5xl lg:text-[2.56rem] font-semibold max-w-[22rem]">
                Confira as nomeações e exonerações de Alagoas
              </h1>
              <div className="flex gap-x-3 items-center">
                <Image
                  src="https://github.com/alex-custodio/exoneraa/blob/main/src/assets/images/img-profiles%402x.png"
                  alt={""}
                  className="min-[1792px]:w-[7.56rem] lg:w-[6.301rem] min-[1792px]:h-[2.31rem] lg:h-[1.92rem]"
                />
                <p className="text-white lg:text-base leading-4 font-normal ">
                  Juntos por uma sociedade mais transparente e participativa
                </p>
              </div>
              <p className="leading-[1.625rem] text-white lg:text-base min-[1792px]:text-xl font-normal ">
                Coletamos os diários oficiais municipais, separamos por
                municípios e analisamos nomeações e exonerações. Com foco em
                simplicidade e replicabilidade, queremos impactar a forma como
                monitoramos atos do executivo municipal em Alagoas.
              </p>
              <Link
                href=""
                className="bg-[#EDDA46] hover:bg-[#dac83f] min-[1792px]:w-[15.125rem] lg:w-[12.5rem] text-center text-[#376E59] hover:text-[#f3fffa] h-[3.625rem] flex items-center rounded-[5.125rem] shadow-md shadow-black/30 "
              >
                <span className="w-full font-normal">
                  Sobre o projeto
                </span>
              </Link>
            </div>
            <div className="flex gap-x-1 items-center ">
              <p className="text-white lg:text-base w-[7rem] font-normal">
                Uma iniciativa apoiada por
              </p>
              <OKBRIcon className="lg:w-[11.33rem]"/>
            </div>
            <img
              className="absolute min-[1792px]:max-w-none lg:-bottom-[18rem] md:-bottom-[200rem] lg:scale-75 xl:-bottom-[22rem] xl:scale-75 min-[1792px]:scale-100 min-[1792px]:-bottom-[28rem] left-2 min-[1792px]:-left-[6rem]"
              src="https://github.com/alex-custodio/exoneraa/blob/main/src/assets/images/girl-icon.png"
              alt={""}
            ></img>
          </aside>
        </div>
        <main className="bg-[#F5F7FB]  w-full overflow-y-auto px-[2.875rem] pt-[3.25rem] pb-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
