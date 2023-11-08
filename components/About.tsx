import { SealCheck, Heart, PiggyBank, Headset, CloudArrowDown, Smiley } from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const aboutFeature = [
  {
    id: 1,
    title: 'Programa certificado',
    description: 'O SYDFACT está certificado pela Administração Geral Tributária com o nº 209/AGT',
    icon: <SealCheck size={50} className='text-blue-950' />
  },
  {
    id: 2,
    title: 'Licença vitalícia',
    description: 'Pagamento único e número de utilizadores ilimitado para sempre, instale em vários computadores',
    icon: <Heart size={50} className='text-blue-950' />
  },
  {
    id: 3,
    title: 'Económico',
    description: 'Com um preço bastante acessível e sem custos de manutenção. Melhor programa de facturação do mercado',
    icon: <PiggyBank size={50} className='text-blue-950' />
  },
  {
    id: 4,
    title: 'Suporte técnico gratuito',
    description: 'Marcamos a diferença com o nosso suporte técnico de excelência reconhecido pelos nossos clientes',
    icon: <Headset size={50} className='text-blue-950' />
  },
  {
    id: 5,
    title: 'Atualizações gratuitas',
    description: 'Beneficie de novos updates mantendo o seu programa de facturação sempre atualizado com a legislação',
    icon: <CloudArrowDown size={50} className='text-blue-950' />
  },
  {
    id: 6,
    title: 'Clientes satisfeitos',
    description: 'Contamos com milhares de clientes que consideram o SYDFACT o melhor programa de facturação do mercado',
    icon: <Smiley size={50} className='text-blue-950' />
  }
]

export function About() {
  return (
    <section className="flex flex-col w-full h-full p-6">
      <div className="flex flex-row flex-wrap justify-start gap-8">
       {
        aboutFeature.map((item) => (
          <Card className="w-[300px] h-[200px] bg-slate-50 border-none flex flex-row-reverse justify-center items-center shadow-2xl" key={item.id}>
          <CardHeader className='w-[70%]'>
            <CardTitle className='text-blue-950'>{item.title}</CardTitle>
            <CardDescription className='text-blue-950 pt-4 font-light leading-relaxed'>
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='w-[30%]'>
            {item.icon}
          </CardContent>
          
        </Card>
        ))
       }
        
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