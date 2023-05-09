
import { MainLayout } from '@/layouts/MainLayout'
import { useMemo } from 'react'

export default function Home() {
  const anos = useMemo(()=>["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"],[])
  return (
    <main>
      <MainLayout activeButton={'Home'}>
        <header className="flex justify-between flex-col lg:flex-row gap-y-3 ">
            <h1 className="min-[1792px]:text-[2.4375rem] 2xl:text-3xl text-2xl font-semibold lg:w-[42.93rem] leading-10">
                Acompanhe as nomeações e exonerações que aconteceram em <span className="text-[#4AA381]">Alagoas</span>
            </h1>
            <select className="h-[4.125rem] w-[11.43rem] text-center rounded-2xl text-[1.18rem] ">
                <option value="geral" selected className="font-normal">Todos os anos</option>
            {
                anos.map((e)=> <option key={e} value={e}>{e}</option>)    
            }
            </select>
        </header>
        <footer className="">
            Gráficos
        </footer>
      </MainLayout>
    </main>
  )
}
