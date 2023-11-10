"use client"

import { Button } from '@/components/ui/button'
import { Target, Info, CurrencyCircleDollar, GearSix } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { About } from './About'
import { Features } from './Features'
import { ForWho } from './ForWho'
import { Price } from './Price'

interface ProductInfoProps {
  variant: 'about' | 'features' | 'for_who' | 'price'
}

export function ProductInfo(){

  const [show, setShow] = useState<string>('about')
  return (
    <>
      <header className='grid grid-cols-4'>
        <Button variant="outline" onClick={() => setShow('about')} className={`${show === 'about' ? 'bg-land-end text-slate-50' : 'text-slate-700'} flex flex-row gap-2 justify-center items-center uppercase  leading-relaxed font-medium hover:text-slate-50 hover:bg-land-end py-6`}>
          <Info size={24} />
          Acerca
          </Button>
        <Button variant="outline" onClick={() => setShow('features')} className={`${show === 'features' ? 'bg-land-end text-slate-50' : 'text-slate-700'} flex flex-row gap-2 justify-center items-center uppercase  leading-relaxed font-medium hover:text-slate-50 hover:bg-land-end py-6`}>
          <GearSix size={24} />
          Funcionalidades
          </Button>
        <Button variant="outline" onClick={() => setShow('for_who')} className={`${show === 'for_who' ? 'bg-land-end text-slate-50' : 'text-slate-700'} flex flex-row gap-2 justify-center items-center uppercase  leading-relaxed font-medium hover:text-slate-50 hover:bg-land-end py-6`}>
          <Target size={24} />
          Para quem é
          </Button>
        <Button variant="outline" onClick={() => setShow('price')} className={`${show === 'price' ? 'bg-land-end text-slate-50' : 'text-slate-700'} flex flex-row gap-2 justify-center items-center uppercase  leading-relaxed font-medium hover:text-slate-50 hover:bg-land-end py-6`}>
          <CurrencyCircleDollar size={24} />
          Preço
          </Button>
      </header>
      {show === 'about' && (
        <About />
      )}
      {show === 'features' && (
        <Features />
      )}
      {show === 'for_who' && (
        <ForWho />
      )}
      {show === 'price' && (
        <Price />
      )}
    </>
  )
}