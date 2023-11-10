import { Money } from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { priceFormatter } from '@/utils/formatter'

const price = {
  amount: 300000,
  note: 'Sem mensalidades. Pagamento único.',
  includes: [
    'Licença vitalícia',
    'Utilizadores ilimitados',
    'Actualizações gratuitas',
    'Suporte técnico gratuito',
    'Seguranças na cloud'
  ]
}


export function Price() {
  return (
    <section className="flex flex-col w-full h-full px-2 py-6">
      <div className="flex flex-row justify-center shadow-lg bg-white">
          <Card className="w-full h-[442] border-none flex flex-col justify-center items-center gap-6 shadow-none bg-gradient-to-r from-land-end to-white" >
          <CardHeader className='w-full pb-0'>
            <CardTitle className='text-slate-50 flex flex-row justify-center items-center gap-2'>
              <span className='text-5xl text-green-800 leading-relaxed'> {priceFormatter.format(price.amount)}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className='w-full flex flex-col justify-center text-sm text-slate-600 pt-0 '>
            <span className='text-center text-xl text-sky-900 pb-4'>{price.note}</span>
            <ul className='p-1 list-disc flex flex-col justify-center items-center'>
              <div>
              {price.includes?.map((item, index) => (
                <li className='text-green-800 font-semibold pt-2 text-lg' key={item + index}>{item}</li>
              ))}
              </div>
            </ul>
          </CardContent>          
        </Card>
        <Image src={'/people.svg'} height={442} width={259} alt='Pessoa feliz' />
      </div>
     
  </section>
  )
}
/*
  <Image
    src="/factura.png"
    alt="Factura"
    width={211}
    height={122.5}
    className="leading-relaxed"
  />
*/