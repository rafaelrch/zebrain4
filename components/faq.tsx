import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "Quais tarefas posso automatizar?",
    answer:
      "Atendimento, suporte técnico, follow-up, agendamento, qualificação de leads, envio de lembretes e áudios personalizados, entre outras.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "Em média, de 15 a 20 dias úteis, dependendo da complexidade. Para tarefas simples, você pode ter um agente rodando em menos de 7 dias.",
  },
  {
    question: "Os agentes funcionam no WhatsApp?",
    answer:
      "Sim! Integramos os agentes ao seu número, garantindo estabilidade e segurança.",
  },
  {
    question: "Os agentes aprendem com o tempo?",
    answer:
      "Sim. Podemos configurar agentes com memória e aprendizado contínuo, tornando as respostas mais naturais e eficientes.",
  },
  {
    question: "Essa solução serve para meu tipo de negócio?",
    answer:
      "Sim! É ideal para clínicas, agências, e-commerces, infoprodutores e qualquer empresa que deseja escalar com eficiência.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Nossos planos são personalizados de acordo com a quantidade de agentes e funcionalidades. Entre em contato para um orçamento sob medida.",
  },
];

export const FAQ2 = () => (
  <div className="w-full py-20 lg:py-40 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Dúvidas mais frequentes
            </h4>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline hover:bg-black/2 px-4">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);