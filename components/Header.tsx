import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full max-w-6xl bg-slate-50 fixed top-0 z-50 px-4 py-4 shadow-md rounded-md flex flex-row justify-between items-center">
        <Image src={'/sydfact.png'} width={200} height={50} alt="Sydfact Oficial Logo"/>
        <nav className="flex flex-row gap-2">
          <Link
            href={'#home'}
            className="text-base px-3 py-1 text-slate-600 hover:text-land-end transition-all"
          >
            Inicio
          </Link>
      
          <Link
            href={'#product'}
            className="text-base px-3 py-1 text-slate-600 hover:text-land-end transition-all"
          >
            Produto
          </Link>
    
          <Link
            href={'#contact-us'}
            className="text-base px-3 py-1 text-slate-600 hover:text-land-end transition-all"
          >
            Contactar
          </Link>
        </nav>

        <Button
          className="border border-land-end shadow-md bg-transparent font-medium text-land-end px-4 py-2 rounded-md hover:bg-land-end hover:text-slate-50  transition-all"
        >
          Experimente Gratuitamente
        </Button>
    </header>
  )
}