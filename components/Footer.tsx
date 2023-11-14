import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { EnvelopeSimple, MapPin, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export function Footer() {
  return(
    <section id='contact-us' className='w-full h-[479px] bg-land-footer flex justify-center mt-16'>
      <div className='max-w-7xl h-full flex flex-col justify-center items-center gap-2'>
        <Image src={'/sydfact.png'} width={200} height={50} alt="Sydfact Oficial Logo" className="mb-6"/>
        <Separator className='bg-land-end' />
        <div className="w-full flex flex-row justify-between gap-4 mt-2">
          <div className="p-2 flex flex-col gap-4">
            <strong className="text-land-end font-medium leading-relaxed">Encontre-nos!</strong>
            <ul className='flex flex-col gap-3 text-slate-100 font-light text-sm'>
              <li>
                <Link href={'tel:+244938782078'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  <PhoneCall size={24} />
                  +244 938 782 078
                </Link>
              </li>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  <EnvelopeSimple size={24} />
                  demo@gmail.com
                </Link>
              </li>
              <li>
                <span className='flex flex-row gap-2 hover:text-land-end transition-all cursor-pointer'>
                  <MapPin size={24} />
                  132 Dartmouth Street Boston
                </span>
              </li>
            </ul>
          </div>
          <div className="p-2 flex flex-col gap-4">
            <strong className="text-land-end font-medium leading-relaxed">Producto</strong>
            <ul className='flex flex-col gap-3 text-slate-200 font-light text-sm'>
              <li>
                <Link href={'tel:+244938782078'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  About
                </Link>
              </li>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Contact
                </Link>
              </li>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-2 flex flex-col gap-4">
            <strong className="text-land-end font-medium leading-relaxed">Legal</strong>
            <ul className='flex flex-col gap-3 text-slate-200 font-light text-sm'>
              <li>
                <Link href={'tel:+244938782078'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Politicas de Privacidade
                </Link>
              </li>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Termos e Serviços
                </Link>
              </li>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Politicas de Reembolso
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-2 flex flex-col gap-4">
            <strong className="text-land-end font-medium leading-relaxed">Links Rápidos</strong>
            <ul className='flex flex-col gap-3 text-slate-200 font-light text-sm'>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Download
                </Link>
              </li>
              <li>
                <Link href={'mailto:demo@gmail.com'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href={'tel:+244938782078'} className='flex flex-row gap-2 hover:text-land-end transition-all'>
                  Fasma, LDA
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[25%] rounded-md p-3 bg-land-card text-slate-200 flex flex-col justify-between">
            <strong className="text-land-end font-medium leading-relaxed">Junta-te na nossa newsletter</strong>
            <div className="flex flex-row">
              <Input className="bg-land-footer w-[65%] rounded-none rounded-tl-md rounded-bl-md border-none text-xs" placeholder="Seu endereço de email" />
              <Button variant={"secondary"} className="w-[35%] rounded-none rounded-tr-md rounded-br-md text-xs hover:bg-land-end">
                Subscrever
              </Button>
            </div>
            <p className="font-extralight text-slate-200 text-xs">Enviaremos atualizações sobre o nosso produto, serviços e promoções.</p>
          </div>
        </div>
      </div>
  </section>  
  )
}