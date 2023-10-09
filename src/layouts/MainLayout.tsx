import Navbar from "@/components/Navbar";
import Link from "next/link";
import OKBRIcon from "@/assets/svgs/okbr-icon";
import { useMemo } from "react";
import { Source_Sans_Pro } from "next/font/google";
import { IfalIcon } from "@/assets/svgs/icons";

const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

interface MainLayoutProps {
  children: React.ReactNode;
  activeButton: "Home" | "About" | "News";
}

export function MainLayout({ children, activeButton }: MainLayoutProps) {
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
          <Navbar activeButton={activeButton} />
          <aside className="hidden xl:w-[28.875rem] 3xl:w-[30rem] bg-[#4AA381] pl-12 pr-9 3xl:pt-12 lg:pt-9 lg:flex flex-col 3xl:gap-y-[2.6175rem] lg:gap-y-[2.5rem] relative overflow-hidden ">
            <div className="w-full flex flex-col gap-y-3 3xl:gap-y-5">
              <h1 className="text-white text-5xl lg:text-[2.56rem] font-semibold max-w-[22rem]">
                Confira as nomeações e exonerações de Alagoas
              </h1>
              <div className="flex gap-x-3 items-center">
                <img
                  className="3xl:w-[7.56rem] lg:w-[6.301rem] 3xl:h-[2.31rem] lg:h-[1.92rem]"
                  src="https://exoonero.org/img-profiles.png"
                />
                <p className="text-white lg:text-base leading-4 font-normal ">
                  Juntos por uma sociedade mais transparente e participativa
                </p>
              </div>
              <p className="leading-[1.625rem] text-white lg:text-base 3xl:text-xl font-normal ">
                Coletamos os diários oficiais municipais, separamos por
                municípios e analisamos nomeações e exonerações. Com foco em
                simplicidade e replicabilidade, queremos impactar a forma como
                monitoramos atos do executivo municipal em Alagoas.
              </p>
              <Link
                href="/sobre"
                className="bg-[#EDDA46] hover:bg-[#dac83f] 3xl:w-[15.125rem] lg:w-[12.5rem] text-center text-[#376E59] hover:text-[#f3fffa] h-[3.625rem] flex items-center rounded-[5.125rem] shadow-md shadow-black/30 "
              >
                <span className="w-full font-normal">Sobre o projeto</span>
              </Link>
            </div>
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-col gap-y-2">
                <p className="text-white lg:text-base w-[7rem] font-normal">
                  Realização
                </p>
                <IfalIcon />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white lg:text-base w-[7rem] font-normal">
                  Apoio
                </p>
                <OKBRIcon />
              </div>
            </div>
            <img
              className="absolute hidden 2xl:block 3xl:max-w-none lg:-bottom-[18rem] md:-bottom-[200rem] lg:scale-[.62] xl:-bottom-[19rem] 2xl:scale-[.68] min-[1920]:scale-[.95] 3xl:-bottom-[28rem] left-2 3xl:-left-[6rem]"
              src="https://exoonero.org/girl-icon.png"
            />
          </aside>
        </div>
        <main className="bg-[#F5F7FB]  w-full overflow-y-auto px-[2.875rem] pt-[3.25rem] pb-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
