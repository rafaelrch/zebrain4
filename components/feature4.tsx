import { Headset, User, Calendar, Repeat, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature4 = () => (
  <div className="w-full px-4">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-center">
        {/* Título e subtítulo */}
        <div>
          <Badge>Na prática</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-6xl tracking-tighter lg:max-w-xl font-regular text-center">
            Exemplos de Agentes que criamos
          </h2>
        </div>

        {/* Cards */}
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <User className="w-8 h-8 mt-2 text-primary" />,
                title: "Atendimento ao cliente",
                desc: "Faz o primeiro contato, apresenta seus serviços, conversa com o cliente e até manda áudio.",
              },
              {
                icon: <Calendar className="w-8 h-8 mt-2 text-primary" />,
                title: "Agendamento",
                desc: "Marca consultas, reuniões ou serviços com base na agenda integrada.",
              },
              {
                icon: <Headset className="w-8 h-8 mt-2 text-primary" />,
                title: "Suporte",
                desc: "Tira dúvidas do cliente, envia tutoriais e encaminha em casos mais complexos para o time humano.",
              },
              {
                icon: <Repeat className="w-8 h-8 mt-2 text-primary" />,
                title: "Follow-up",
                desc: "Envia mensagens programadas para leads frios ou esquecidos, reativando oportunidades.",
              },
              {
                icon: <Target className="w-8 h-8 mt-2 text-primary" />,
                title: "Qualificador de Leads",
                desc: "Conversa com o lead, faz perguntas estratégicas e classifica o interesse do cliente automaticamente.",
              },
              {
                icon: <Zap className="w-8 h-8 mt-2 text-primary" />,
                title: "Agente de Lançamento",
                desc: "Envia mensagens em massa para listas, gera senso de urgência e responde interações durante campanhas.",
              },
            ].map((agent, index) => (
              <button
                key={index}
                className="text-left flex flex-row gap-6 items-start border border-transparent hover:border-black/20 focus-visible:border-black/20 active:border-black/20 hover:shadow-lg focus-visible:shadow-md active:shadow-md hover:bg-muted/10 focus-visible:bg-muted/10 active:bg-muted/10 hover:-translate-y-1 focus-visible:-translate-y-1 active:-translate-y-1 transition-all duration-300 rounded-md p-4 cursor-pointer w-full"
              >
                {agent.icon}
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{agent.title}</p>
                  <p className="text-muted-foreground text-sm">{agent.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);