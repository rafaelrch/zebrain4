import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Feature2 = () => (
  <section className="min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-center">
        
        {/* Imagem responsiva 1080x1920 */}
        <div className="relative w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-xl lg:max-w-[400px]">
          <Image
            src="/img2.png"
            alt="Demonstração do agente de IA"
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-4 text-center lg:text-left lg:pl-20 max-w-xl">
          <Badge className="self-center lg:self-start">Nova era</Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
            O futuro do seu negócio começa aqui
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Com nossos agentes de IA, você automatiza tarefas do dia a dia, ganha eficiência e faz sua empresa escalar, tudo sem precisar contratar mais ninguém.
          </p>
        </div>
      </div>
    </div>
  </section>
);