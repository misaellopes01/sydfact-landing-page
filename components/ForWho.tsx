import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface ItensProps {
  id: number
  title: string
  description: string
  itens?:string[]
}

const features: ItensProps[] = [
  {
    id: 1,
    title: 'PME',
    description: 'O SYDFACT foi desenhado para dar resposta às necessidades de facturação das pequenas e médias empresas. Sabemos que o seu tempo deve ser gasto na gestão do negócio e não a facturar, por isso, o SYDFACT disponibiliza as funcionalidades necessárias para uma facturação fácil e rápida.',
  },
  {
    id: 2,
    title: 'Contabilistas',
    description: 'Já está prevista a assinatura digital qualificada nos documentos emitidos pelo SYDFACT, cumprindo assim todas as obrigações legais e fiscais. Está também previsto o envio das facturas via EDI.',
  },
  {
    id: 3,
    title: 'Profissionais liberais',
    description: 'O SYDFACT é um excelente investimento para profissionais liberais, por um preço muito reduzido permite poupar tempo e otimizar a gestão da sua atividade profissional:',
    itens: [
      'Permite processar avenças de forma automática',
      'Permite facturar em qualquer altura e em qualquer lugar, sem estar dependente da Internet ou de algum website',
      'Permite personalizar os documentos à sua medida',
      'Permite imprimir listagens, tabelas e gráficos para uma melhor análise da sua atividade profissional'
    ] 
  },
  {
    id: 3,
    title: 'Referências multibanco',
    description: 'Agora é possível gerar referências multibanco nas suas facturas. Receba mais rápido e agilize o seu processo de facturação com recibos automáticos.',
  },
  
]

export function ForWho() {
  return (
    <section className="flex flex-col w-full h-full px-2 py-6">
      <div className="grid grid-flow-row grid-cols-2 gap-4">
       {
        features.map((item) => (
          <Card className="w-full h-full bg-slate-50 border-none flex flex-col justify-start items-center shadow-lg gap-2" key={item.id}>
          <CardHeader className='w-full pb-0'>
            <CardTitle className='text-slate-700 flex flex-row justify-start items-center'>
              <span className='border-b border-land-end'>{item.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className='w-full text-sm text-slate-600 pt-0'>
            {item.description}
            <ul className='p-1 pl-6 list-disc'>
              {item.itens?.map((item) => (
                <li className='text-slate-700 font-light pt-1' key={item}>{item}</li>
              ))}
            </ul>
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