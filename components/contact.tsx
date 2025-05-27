"use client";

import { CalendarIcon, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact1 = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [openPopover, setOpenPopover] = useState(false);

  const handleSubmit = async () => {
    await fetch("https://hook.us2.make.com/fhcu365j3fvw2ft46rapx1kt6ybtyqqy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        sobrenome,
        email,
        telefone,
        objetivo,
        data: date ? format(date, "dd/MM/yyyy") : "",
      }),
    });

    setOpenPopover(true);
    setTimeout(() => {
      setOpenPopover(false);
    }, 5000);
  };

  return (
    <div className="w-full py-20 lg:py-40 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contato</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-normal">
                  Agende uma reunião com nossa equipe
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Estamos aqui para ouvir você e encontrar juntos a melhor forma de automatizar seu negócio.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center relative">
            <div className="rounded-xl w-full max-w-md flex flex-col border p-10 gap-6 shadow-xl">
              <p className="font-semibold text-lg">Marque uma reunião</p>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="data">Data</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ptBR }) : <span>Escolha a data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="primeiro_nome">Primeiro nome</Label>
                <Input id="primeiro_nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="sobrenome">Sobrenome</Label>
                <Input id="sobrenome" type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="objetivo_automatizar">O que você deseja automatizar?</Label>
                <Textarea id="objetivo_automatizar" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} />
              </div>

              <Button onClick={handleSubmit} className="gap-4 w-full">
                Agendar reunião <MoveRight className="w-4 h-4" />
              </Button>
            </div>

            {/* ✅ Popover de confirmação */}
            <Popover open={openPopover} onOpenChange={setOpenPopover}>
              <PopoverTrigger asChild>
                <span></span>
              </PopoverTrigger>
              <PopoverContent side="top" align="center" className="w-[300px] text-center z-50">
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-lg font-semibold">✅ Reunião agendada</h3>
                  <p className="text-muted-foreground text-sm">
                    Em breve entraremos em contato com você!
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setOpenPopover(false)}>
                    Fechar
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};