
import Footer from '@/components/Footer'
import TotalAtos from '@/components/charts/TotalAtos'
import { MainLayout } from '@/layouts/MainLayout'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export default function Home() {
  const anos = useMemo(()=>["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"],[])
  const router = useRouter()
  if (router.isFallback) {
      return <div>Carregando...</div>
  }
  return (
    <main>
      <MainLayout activeButton={'Home'}>
        <header className="flex justify-between flex-col lg:flex-row gap-y-3 ">
            <h1 className=" text-2xl 2xl:text-3xl 3xl:text-[2.4375rem]  font-semibold lg:w-[42.93rem] leading-10">
                Acompanhe as nomeações e exonerações que aconteceram em <span className="text-[#4AA381]">Alagoas</span>
            </h1>
            <select className="h-[4.125rem] w-[11.43rem] text-center rounded-2xl text-[1.18rem] ">
                <option value="geral" selected className="font-normal">Todos os anos</option>
            {
                anos.map((e)=> <option key={e} value={e}>{e}</option>)    
            }
            </select>
        </header>
        <main>
            <div className="flex flex-wrap lg:gap-x-20 2xl:gap-x-[3%] justify-center">
              <TotalAtos/>
              <TotalAtos/>
              <TotalAtos/>
            </div>
        </main>
        <Footer/>
      </MainLayout>
    </main>
  )
}
