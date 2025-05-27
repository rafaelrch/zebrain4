import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Feature = () => (
  <div className="w-full py-20 lg:py-40 px-4">
    <div className="container mx-auto">
      <div className="grid border rounded-lg py-8 px-7 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">O motor da sua operação</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-normal">
                Agentes de IA personalizados para seu negócio
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Nossos agentes entendem e executam tarefas específicas do seu negócio 24h por dia.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <FeatureItem
              title="Sempre disponível"
              description="Seu time pode descansar. Seus agentes, não."
            />
            <FeatureItem
              title="Integra com seus sistemas"
              description="Compatível com Whatsapp, planilhas e muito mais."
            />
            <FeatureItem
              title="Redução de custos"
              description="Reduza gastos com novos funcionários no suporte e atendimento."
            />
            <FeatureItem
              title="Personalizado até o detalhe"
              description="Cada agente é único, moldado para seu negócio."
            />
            <FeatureItem
              title="Áudio"
              description="IA que entende e envia áudios."
            />
          </div>
        </div>
        <div className="relative w-full aspect-square rounded-md overflow-hidden bg-muted">
          <Image
            src="/IMAGE-1-V2.png"
            alt="Agente de IA executando tarefas"
            fill // faz ocupar todo o espaço do container pai
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100} // força máxima qualidade
          />
        </div>
      </div>
    </div>
  </div>
);

const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-row gap-6 items-start">
    <Check className="w-4 h-4 mt-2 text-primary" />
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);