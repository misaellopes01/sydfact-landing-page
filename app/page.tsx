import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-gradient-to-bl from-slate-100 to-land-end pt-20">
      <div className='max-w-5xl h-[1342px]'>
        <section className='w-full h-full flex flex-col justify-start pt-28 items-center gap-8'>
          <h1 className='font-black text-slate-800 text-6xl px-52 text-center'>Facturar nunca foi tão fácil!</h1>
          <p className='text-slate-800 text-base'>A solução ideal de facturação para pequenas, médias empresas e profissionais liberais</p>
          <div className='flex flex-row gap-4'>
            <Link href={"/"} className='px-4 py-2 bg-slate-800 rounded-full text-land-end border border-slate-900 hover:bg-land-end hover:text-slate-50 hover:border-slate-50 transition-all'>Conheça-nos!</Link>
            <Link href={"/"} className='px-4 py-2 bg-transparent border border-slate-900 text-slate-800 rounded-full hover:text-land-end hover:border-land-end transition-all'>Download gratuito</Link>
          </div>
          <Image src={'/cover.png'} width={1000} height={500} alt='Banner' className='shadow-2xl' />
        </section>
      </div>
      
    </main>
  )
}
