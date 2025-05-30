import Image from "next/image";

export const Feature3 = () => (
  <div className="w-full py-20 lg:py-40 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        
        {/* Texto */}
        <div className="flex gap-4 flex-col flex-1">
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-normal text-left">
              O que são agentes de IA?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              São sistemas autônomos que executam tarefas específicas usando inteligência artificial, como se fossem “funcionários virtuais”. Eles são programados para entender contextos, tomar decisões e agir com base em dados — sem precisar de intervenção humana constante.
            </p>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="relative bg-muted rounded-md w-full aspect-video h-full flex-1 overflow-hidden">
          <Image
            src="/ai-image.jpg"
            alt="Agente de IA ilustrado"
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </div>
);