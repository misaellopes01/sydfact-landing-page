"use client"

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Separator } from "./ui/separator"



export function ContactForm() {
  return (
    <Card className="h-full w-full rounded-none shadow-none border-none bg-slate-50">
      <CardHeader>
        <CardTitle className="text-land-end text-2xl pb-0 leading-relaxed font-light">Formulário de contacto</CardTitle>
        <Separator className='bg-land-end' />
        <CardDescription className="pt-4">
          Se pretende ser contactado envie-nos este pequeno formulário onde deverá preencher os seus dados.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sky-900">Nome</Label>
            <Input id="name" placeholder="ex.: João Carlos" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject" className="text-sky-900">Assunto</Label>
            <Input id="subject" placeholder="Preciso de ajuda com..." />
           
          </div>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="area" className="text-sky-900">Perfil</Label>
             <Select defaultValue="default">
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Selecionar</SelectItem>
                <SelectItem value="sm-company">Pequena empresa</SelectItem>
                <SelectItem value="md-company">Média empresa</SelectItem>
                <SelectItem value="freelancer">Profissional liberal (freelancer)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="number" className="text-sky-900">Telefone</Label>
            <Input id="number" type="number" placeholder="9xx xxx xxx" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sky-900">Email</Label>
            <Input id="email" type="email" placeholder="nome@email.com" />
          </div>
        </div>
 
        <div className="grid gap-2">
          <Label htmlFor="description" className="text-sky-900">Mensagem</Label>
          <Textarea
            id="description"
            placeholder="Por favor, inclua toda informação necessária sobre o seu contexto..."
            className="resize-none p-4 leading-relaxed h-48"
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant={"outline"} className="w-full py-5 text-sky-950 hover:bg-land-end hover:text-sky-950 text-lg uppercase">Enviar</Button>
      </CardFooter>
    </Card>
  )
}