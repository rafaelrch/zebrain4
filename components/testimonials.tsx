"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    title: "Atendimento 24h sem esforço",
    content:
      "A IA que vocês fizeram responde nossos clientes de forma muito humanizada e mesmo fora do expediente, agenda consultas e até envia lembretes automáticos. A experiência do cliente melhorou muito!",
    author: "Renata Oliveira - Fundadora da Clínica Vitalis",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fallback: "RO",
  },
  {
    title: "Escalamos sem contratar mais ninguém",
    content:
      "Tenho que agradecer muito vocês, os agentes que criaram assumiram processos de vendas e atendimento. Em dois meses, dobramos a capacidade operacional sem aumentar a equipe.",
    author: "Daniel Lopes - COO da NovaFit Suplementos",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fallback: "DL",
  },
  {
    title: "Foi uma virada de chave",
    content:
      "Depois que começamos a usar os agentes, conseguimos eliminar tarefas repetitivas e focar no que realmente importa: crescimento e estratégia.",
    author: "Amanda Castro - CEO na BelleClinic Estética",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    fallback: "AC",
  },
  {
    title: "Produtividade fora da curva",
    content:
      "Implementamos agentes para qualificação de leads e atendimento inicial. Hoje, economizamos mais de 20 horas por semana só com essa automação.",
    author: "Rafael Mendes - Diretor de Marketing da UpTech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    fallback: "RM",
  },
  {
    title: "Mais foco no que importa",
    content:
      "A IA cuida das demandas operacionais e nos dá liberdade para pensar no crescimento da empresa. Foi um divisor de águas na nossa rotina.",
    author: "Carolina Dias - Cofundadora da ZenFinance",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    fallback: "CD",
  },
  {
    title: "Redução de custos imediata",
    content:
      "Com a automação, conseguimos reduzir em 35% nossos gastos com atendimento e suporte. É um investimento que se paga muito rápido.",
    author: "Fernando Tavares - CFO da LogiXpress",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    fallback: "FT",
  },
  {
    title: "Experiência de cliente elevada",
    content:
      "A comunicação com nossos clientes ficou mais rápida, personalizada e consistente. Os agentes realmente entendem o que o cliente precisa.",
    author: "Bianca Moura - Diretora da Vitta Estética",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    fallback: "BM",
  },
  {
    title: "Agilidade",
    content:
      "Esse agente que criaram para gerenciar pedidos e cobranças está muito absurdo. Ganhamos agilidade e eliminamos 90% dos erros manuais do processo.",
    author: "Lucas Ferreira - Fundador da ChefOnline Delivery",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    fallback: "LF",
  },
  {
    title: "Atendimento inteligente e humano",
    content:
      "Mesmo sendo uma IA, o atendimento é fluido, empático e natural. Nossos pacientes acham que realmente estão falando com uma pessoa de tão natural que é.",
    author: "Juliana Ramos - Gerente da Clínica Respire",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    fallback: "JR",
  },
  {
    title: "Suporte técnico impecável",
    content:
      "Além da tecnologia ser incrível, o suporte da equipe foi fundamental. Implantamos tudo em menos de 48h e está funcionando perfeitamente.",
    author: "Bruno Cardoso - CEO da Inventrix Labs",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    fallback: "BC",
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setTimeout(() => {
      const isLast = api.selectedScrollSnap() + 1 === api.scrollSnapList().length;
      const next = isLast ? 0 : api.selectedScrollSnap() + 1;
      setCurrent(next);
      api.scrollTo(next);
    }, 4000);

    return () => clearTimeout(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            O que nossos clientes estão falando
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">{testimonial.title}</h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          “{testimonial.content}”
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};