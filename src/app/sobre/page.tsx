import { LogoGreenExonera } from '@/assets/svgs/icons'
import { MainLayout } from '@/layouts/MainLayout'

export default function Sobre() {

  return (
    <MainLayout activeButton={'About'}>
      <div className="flex flex-col gap-y-4">
        <header className="flex gap-x-5 font-semibold leading-10 items-center">
          <LogoGreenExonera/>
          <h1 className="lg:text-[2.4375rem] w-[21.37rem]">Conheça um pouco mais sobre o projeto</h1>
        </header>
        <section className="text-xl flex flex-col gap-y-6">
          <p className="font-normal ">Este projeto é financiado pelo <span className="underline decoration-solid">Instituto Federal de Alagoas (IFAL)</span>
            através do projeto de pesquisa PVA328-2022. Além do financiamento, o projeto conta com apoio da <span className="underline decoration-solid">Open Knowledge Brasil (OKBR)</span>, no âmbito de uma parceria com foco no <span className="underline decoration-solid">projeto Querido Diário.</span></p>
          <h3 className="font-bold">
            O projeto conta com os seguintes integrantes:
          </h3>
          <div></div>
        </section>
      </div>
      
    </MainLayout>
  )
}
