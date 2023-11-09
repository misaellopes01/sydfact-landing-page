import { SealCheck, Heart, PiggyBank, Headset, CloudArrowDown, Smiley, QrCode, File, Receipt, ChatText, FileDoc, CloudCheck, UsersThree, Stack, Barcode, ChartLineUp, Export, ShareNetwork, Buildings, Wallet } from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const features = [
  {
    id: 1,
    title: 'QR Code. ATCUD. Comunicação das séries AT',
    description: 'QR Code, implementado! ATCUD e comunicação das séries implementadas em 2023! Mantenha a sua facturação sempre em conformidade com a lei.',
    icon: <QrCode size={30} className='text-blue-930' />
  },
  {
    id: 2,
    title: 'Factura Electrónica',
    description: 'Já está prevista a assinatura digital qualificada nos documentos emitidos pelo SYDFACT, cumprindo assim todas as obrigações legais e fiscais. Está também previsto o envio das facturas via EDI.',
    icon: <File size={30} className='text-blue-930' />
  },
  {
    id: 3,
    title: 'Referências multibanco',
    description: 'Agora é possível gerar referências multibanco nas suas facturas. Receba mais rápido e agilize o seu processo de facturação com recibos automáticos.',
    icon: <Receipt size={30} className='text-blue-930' />
  },
  {
    id: 4,
    title: 'SMS - Envio de mensagens',
    description: 'Para além dos e-mails, o SYDFACT permite também enviar SMS para os seus clientes. Envie mensagens de pagamentos em atraso com o nome da sua empresa como remetente.',
    icon: <ChatText size={30} className='text-blue-930' />
  },
  {
    id: 5,
    title: 'Avenças com agendamento',
    description: 'Esta funcionalidade permite criar modelos de documentos (facturas, orçamentos, etc.) para serem processados automaticamente na respectiva data definida (actualizando o mês/ano para cada factura). Poderá desta forma automatizar a emissão das facturas para os seus clientes.',
    icon: <FileDoc size={30} className='text-blue-930' />
  },
  {
    id: 6,
    title: 'Cópias de segurança na cloud',
    description: 'Agora pode aumentar a segurança dos seus arquivos ao armazená-los na cloud. Os seus dados serão guardados em diferentes locais seguros e cuja integridade não dependerá do que possa vir a acontecer ao seu computador.',
    icon: <CloudCheck size={30} className='text-blue-930' />
  },
  {
    id: 7,
    title: 'Gestão completa de clientes',
    description: 'O SYDFACT permite-lhe gerir facilmente a sua carteira de clientes. A partir da ficha de cada cliente pode consultar, as facturas que lhe foram emitidas, os e-mails enviados, o saldo actual, e muito mais.',
    icon: <UsersThree size={30} className='text-blue-930' />
  },
  {
    id: 8,
    title: 'Gestão simplificada de stock',
    description: 'Com uma gestão simples e fácil, o SYDFACT ajuda-o a manter o stock sempre actualizado. A gestão de stock é automática baseada nos documentos emitidos aos clientes.',
    icon: <Stack size={30} className='text-blue-930' />
  },
  {
    id: 9,
    title: 'Impressão de código de barras',
    description: 'Imprima código de barras para os seus artigos e poupe tempo, pois pode rapidamente emitir facturas ou outros documentos de venda sem ter de inserir os artigos à mão.',
    icon: <Barcode size={30} className='text-blue-930' />
  },
  {
    id: 10,
    title: 'Listagens e estatísticas diversas',
    description: 'Controle a facturação da sua empresa, os pagamentos a receber, envie cartas de cobrança, imprima etiquetas de endereços, códigos de barras e diversos relatórios à distância de um clique.',
    icon: <ChartLineUp size={30} className='text-blue-930' />
  },
  {
    id: 11,
    title: 'Exportação de dados',
    description: 'Para poder trabalhar os seus dados noutras aplicações (Excel®, Word®, etc), como por exemplo, realizar estatísticas ou elaborar cartas sobre os dados duma tabela, basta clicar com o botão direito e seleccionar o formato em que deseja exportar.',
    icon: <Export size={30} className='text-blue-930'  />
  },
  {
    id: 12,
    title: 'Comunicação de dados por Web Service',
    description: 'Com apenas um click poderá obter instantaneamente o código atribuído pela AT, fazendo com que poupe tempo e que agilize as suas operações de transporte.',
    icon: <ShareNetwork size={30} className='text-blue-930' />
  },
  {
    id: 13,
    title: 'Gestão de múltiplas empresas',
    description: 'O SYDFACT permite gerir várias empresas a partir de uma única instalação, permitindo assim rapidamente alternar entre diferentes empresas. Ideal para gabinetes de contabilidade.',
    icon: <Buildings size={30} className='text-blue-930' />
  },
  {
    id: 14,
    title: 'Pagamentos e contas-correntes',
    description: 'Tenha o controlo total sobre os pagamentos a receber e as contas-correntes dos seus clientes. Reduza drasticamente o tempo despendido na manutenção das contas-correntes dos clientes.',
    icon: <Wallet size={30} className='text-blue-930' />
  }
]

export function Features() {
  return (
    <section className="flex flex-col w-full h-full px-2 py-6">
      <div className="flex flex-row flex-wrap justify-start gap-4">
       {
        features.map((item) => (
          <Card className="w-[320px] h-[230px] bg-slate-50 border-none flex flex-col justify-start items-center shadow-lg gap-2" key={item.id}>
          <CardHeader className='w-full pb-0'>
            <CardTitle className='text-slate-700 flex flex-row justify-start items-center gap-2'>
              {item.icon}
              <span className='border-b border-land-end'>{item.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className='w-full text-sm text-slate-600 pt-0'>
            {item.description}
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