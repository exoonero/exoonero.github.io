import Navbar from "@/components/Navbar";
import profiles from "@/assets/images/img-profiles@2x.png";
import girlIcon from "@/assets/images/girl-icon.png";
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
}

export function MainLayout({ children }: MainLayoutProps) {
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
          <Navbar/>
          <aside className="w-[33.875rem] bg-[#4AA381] pl-12 pr-9 pt-12 flex flex-col gap-y-[2.6175rem] relative overflow-hidden">
            <div className="w-full flex flex-col gap-y-5 ">
              <h1 className="text-white text-5xl font-semibold">
                Confira as nomeações e exonerações de Alagoas{" "}
              </h1>
              <div className="flex gap-x-3 items-center">
                <Image
                  src={profiles}
                  alt={""}
                  className="w-[7.56rem] h-[2.31rem]"
                />
                <p className="text-white leading-4 font-normal">
                  Juntos por uma sociedade mais transparente e participativa
                </p>
              </div>
              <p className="leading-[1.625rem] text-white font-normal">
                Coletamos os diários oficiais municipais, separamos por
                municípios e analisamos nomeações e exonerações. Com foco em
                simplicidade e replicabilidade, queremos impactar a forma como
                monitoramos atos do executivo municipal em Alagoas.
              </p>
              <Link
                href=""
                className="bg-[#EDDA46] w-[15.125rem] text-center h-[3.625rem] flex items-center rounded-[5.125rem] shadow-md shadow-black/30"
              >
                <span className="w-full text-[#376E59] font-normal">
                  Sobre o projeto
                </span>
              </Link>
            </div>
            <div className="flex gap-x-1 items-center ">
              <p className="text-white w-[7rem] font-normal">
                Uma iniciativa apoiada por
              </p>
              <OKBRIcon />
            </div>
            <Image
              className="absolute scale-125 -bottom-[25rem] left-2"
              src={girlIcon}
              alt={""}
            ></Image>
          </aside>
        </div>
        <main className="bg-[#F5F7FB] w-full overflow-y-auto px-[2.875rem] pt-[3.25rem] pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
