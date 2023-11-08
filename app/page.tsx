import { ProductInfo } from '@/components/ProductInfo'

import { Separator } from '@/components/ui/separator'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section id='home' className='w-full h-full bg-slate-50 flex justify-center'>
        <div className='max-w-5xl h-[1282px] flex flex-col justify-start pt-40 items-center gap-8'>
          <h1 className='font-black text-blue-950 text-5xl px-20 text-center'>Facturar e gerir stocks de forma automática nunca foi tão fácil!</h1>
          <p className='text-slate-700 text-base px-44 text-center'>A Solução ideal de facturação e gestão de stocks automática para pequenas, médias empresas e profissionais liberais</p>
          <div className='flex flex-row gap-4'>
            <Link href={"/"} className='px-4 py-2 bg-land-end rounded-full text-slate-50 border border-land-end hover:text-slate-700 transition-all'>Conheça-nos!</Link>
            <Link href={"/"} className='px-4 py-2 bg-transparent border border-blue-950 text-blue-950 rounded-full hover:text-land-end hover:border-land-end transition-all'>Download gratuito</Link>
          </div>
          <Image src={'/banner.png'} width={1200} height={969} alt='Banner' className='rounded-lg' />
        </div>
      </section>
      <section id='product' className='w-full h-full bg-gradient-to-b from-slate-50 to-land-end flex justify-center pb-10'>
        <div className='max-w-5xl h-full flex flex-col justify-start pt-44 items-center gap-4'>
          <h2 className='text-2xl font-semibold text-blue-950'>Programa de facturação certificado pela AGT</h2>
          <Separator className="my-1 h-[1px] rounded-full w-[200px] bg-blue-950" />
          <p className='text-center text-blue-950'>O SYDFACT é um programa de facturação certificado pela AGT, simples e prático. <br/> A Solução ideal de facturação e gestão de stocks automática para pequenas, médias empresas e profissionais liberais.</p>
          <div className='flex flex-col justify-start w-full bg-slate-100 rounded-md mt-6'>
            <ProductInfo />
          </div>
        </div>
      </section>
      <section id='contact-us' className='w-full h-full bg-gradient-to-t from-slate-50 to-land-end flex justify-center pb-10'>
        <div className='max-w-5xl h-[1000px] flex flex-col justify-start pt-44 items-center gap-4'>
          <div>
            <h3>Milhares de empresas confiam no SYDFACT!</h3>
            <div>a</div>
            <div>a</div>
          </div>
          <div></div>
        </div>
      </section>  
    </main>
  )
}
// bg-gradient-to-tr from-slate-100 to-blue-100
