import { ContactForm } from '@/components/ContactForm'
import { ProductInfo } from '@/components/ProductInfo'
import { Button } from '@/components/ui/button'

import { Separator } from '@/components/ui/separator'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section id='home' className='w-full h-full bg-slate-50 flex justify-center'>
        <div className='max-w-5xl h-[1282px] flex flex-col justify-start pt-40 items-center gap-8'>
          <h1 className='font-black text-land-end text-5xl px-20 text-center'>Facturar e gerir stocks de forma automática nunca foi tão fácil!</h1>
          <p className='text-slate-700 text-base px-44 text-center'>A Solução ideal de facturação e gestão de stocks automática para pequenas, médias empresas e profissionais liberais</p>
          <div className='flex flex-row gap-4'>
            <Link href={"/"} className='px-4 py-2 bg-land-end rounded-full text-slate-50 border border-land-end hover:text-slate-700 transition-all'>Conheça-nos!</Link>
            <Link href={"/"} className='px-4 py-2 bg-transparent border border-blue-950 text-blue-950 rounded-full hover:text-land-end hover:border-land-end transition-all'>Download gratuito</Link>
          </div>
          <Image src={'/banner.png'} width={1200} height={969} alt='Banner' className='rounded-lg' />
        </div>
      </section>
      <section id='product' className='w-full h-full bg-slate-50 flex justify-center pb-10'>
        <div className='max-w-5xl h-full flex flex-col justify-start pt-44 items-center gap-4'>
          <h2 className='text-2xl font-semibold text-blue-950'>Programa de facturação certificado pela AGT</h2>
          <Separator className="my-1 h-[1px] rounded-full w-[200px] bg-blue-950" />
          <p className='text-center text-blue-950'>O SYDFACT é um programa de facturação certificado pela AGT, simples e prático. <br/> A Solução ideal de facturação e gestão de stocks automática para pequenas, médias empresas e profissionais liberais.</p>
          <div className='w-full flex flex-col justify-start bg-slate-50 rounded-md mt-6'>
            <ProductInfo />
          </div>
        </div>
      </section>
      <section className='w-full bg-gradient-to-r from-cyan-500 to-land-end  flex flex-row items-center justify-center p-4 py-14 gap-12'>
        <div className="flex flex-col gap-4">
          <h4 className='text-2xl text-slate-100'>Não espere mais, comece ainda hoje a facturar!</h4>
          <p className='text-sm text-slate-50 font-light'>Experimente o SYDFACT gratuitamente com todas as funcionalidades</p>
        </div>
        <Link className='text-lg text-blue-950 px-12 py-2 bg-white rounded-lg hover:text-land-end transition-all' href={'#product'}>
          Experimentar gratis
        </Link>
      </section>
      <section id='why-us' className='w-full h-full bg-slate-50 flex justify-center pb-10'>
        <div className='max-w-5xl h-full flex flex-row justify-start pt-28 items-center gap-2'>
          <div className='w-[70%]'>
            <h3 className='pl-4 pb-4 text-2xl text-sky-900'>Porque é que o SYDFACT é a solução indicada?</h3>
            <div className='px-2 py-4 flex flex-col gap-2'>
              <strong className='text-sky-900 border-b border-land-end'>Criado a pensar em nós</strong>
              <p className='text-slate-600 break-words'>
              O SYDFACT nasceu em 2007 quando a nossa própria equipa sentiu necessidade de ter um programa de facturação simples, eficaz e que nos fizesse poupar tempo. Numa altura em que qualquer outro programa apresentava soluções demasiado complexas, criámos o nosso próprio programa de facturação que rapidamente se estendeu a milhares de PMEs, profissionais liberais e até contabilistas.
              </p>
            </div>
            <div className='px-2 py-4 flex flex-col gap-2'>
              <strong className='text-sky-900 border-b border-land-end'>Vender muito – facturar rápido</strong>
              <p className='text-slate-600 break-words'>
              O SYDFACT foi desenvolvido para que a facturação da sua empresa seja fácil, libertando tempo para que se possa ocupar com outras tarefas, tal como vendas e angariação de novos clientes.
              </p>
            </div>
            <div className='px-2 py-4 flex flex-col gap-2'>
              <strong className='text-sky-900 border-b border-land-end'>Os nossos clientes falam por nós!</strong>
              <p className='text-slate-600 break-words'>
              O SYDFACT é um programa robusto mas muito simples e fácil de utilizar, com funcionalidades de extrema utilidade e desenhado para lhe facilitar a vida.
              </p>
            </div>
          </div>
          <div className='w-[30%]'>
            <Image src={'/fsydfact.png'} alt='Visualizacao da Factura' width={642} height={854} className='shadow-2xl' />
          </div>
        </div>
      </section>
      <section id='contact-us' className='w-full h-full bg-slate-50 flex justify-center pb-10'>
        <div className='max-w-5xl h-[647px] flex flex-row justify-start pt-28 items-center gap-2 shadow-lg'>
          <div className='w-[40%] h-full bg-land-end rounded-bl-lg rounded-tl-lg p-3'>
            <div className='px-2 py-2 flex flex-col gap-2'>
              <h3 className='pl-4 pb-4 text-2xl text-sky-900'>Contact Information</h3>
              <span>Say something to start a live chat!</span>
            </div>
            <ul className='px-2 py-2 flex flex-col gap-2'>
              <li>
                <span>+1012 3456 789</span>
              </li>
              <li>
                <span>demo@gmail.com</span>
              </li>
              <li>
                <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
              </li>
            </ul>
            <div className='px-2 py-2 flex flex-col gap-2'>
              <Link href={'#'}></Link>
              <Link href={'#'}></Link>
              <Link href={'#'}></Link>
            </div>
          </div>
          <div className='w-[60%] h-full'>
            <ContactForm />
          </div>
        </div>
      </section>    
    </main>
  )
}
// bg-gradient-to-tr from-slate-100 to-blue-100
