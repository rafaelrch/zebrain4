import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Blog = () => (
  <div className="w-full py-20 lg:py-40 px-4">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          Últimas Notícias
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="flex flex-col gap-2 p-4 rounded-md border border-transparent transition-all duration-300 transform hover:-translate-y-5 hover:border-black/20  hover:bg-muted/20 cursor-pointer">
          <a
            href="https://realtime1.com.br/agentes-de-ia-remodelam-negocios-e-devem-dominar-atendimento-ate-2029/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2"
          >
            <img
              src="https://realtime1.com.br/wp-content/uploads/2025/05/focus-on-laptop-running-ai-cognitive-computing-tec-2025-02-20-00-09-29-utc-2048x1365.jpg"
              alt="Capa do artigo sobre agentes de IA"
              className="rounded-md aspect-video object-cover mb-4"
            />
            <h3 className="text-xl tracking-tight">
              Agentes de IA remodelam negócios e devem dominar atendimento até 2029
            </h3>
            <p className="text-muted-foreground text-base">
              Segundo projeções do Gartner, até 2029 os agentes autônomos de IA serão responsáveis por solucionar 80% dos problemas comuns no atendimento ao cliente, sem necessidade de interação humana.
            </p>
          </a>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-2 p-4 rounded-md border border-transparent transition-all duration-300 transform hover:-translate-y-5 hover:border-black/20  hover:bg-muted/20 cursor-pointer">
          <a
            href="https://forbes.com.br/forbes-tech/2025/02/1001-utilidades-agentes-de-ia-sao-o-novo-faz-tudo-das-empresas-brasileiras/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2"
          >
            <img
              src="https://forbes.com.br/wp-content/uploads/2025/02/agentes-de-IA.png"
              alt="Capa do artigo sobre agentes de IA"
              className="rounded-md aspect-video object-cover mb-4"
            />
            <h3 className="text-xl tracking-tight">
              1001 Utilidades: Agentes de IA São o Novo “Faz-tudo”
            </h3>
            <p className="text-muted-foreground text-base">
              Entenda como a tecnologia funciona e pode otimizar os processos de diferentes setores: da administração de condomínios à comunicação corporativa
            </p>
          </a>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-2 p-4 rounded-md border border-transparent transition-all duration-300 transform hover:-translate-y-5 hover:border-black/20  hover:bg-muted/20 cursor-pointer">
          <a
            href="https://forbes.com.br/forbes-tech/2025/05/jpmorgan-diz-que-ia-ajudou-a-aumentar-vendas-durante-turbulencia-do-mercado/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2"
          >
            <img
              src="https://forbes.com.br/wp-content/uploads/2025/05/Agentes-de-IA-JPMorgan.png"
              alt="Capa do artigo sobre agentes de IA"
              className="rounded-md aspect-video object-cover mb-4"
            />
            <h3 className="text-xl tracking-tight">
              JP Morgan Diz que IA Ajudou a Aumentar Vendas Durante Turbulência do Mercado
            </h3>
            <p className="text-muted-foreground text-base">
              O maior credor dos Estados Unidos, assim como seus concorrentes, tem intensificado o uso de IA
            </p>
          </a>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col gap-2 p-4 rounded-md border border-transparent transition-all duration-300 transform hover:-translate-y-5 hover:border-black/20  hover:bg-muted/20 cursor-pointer">
          <a
            href="https://forbes.com.br/forbes-tech/2025/05/jpmorgan-diz-que-ia-ajudou-a-aumentar-vendas-durante-turbulencia-do-mercado/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2"
          >
            <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/possessed-photography-zbLW0FG8XU8-unsplash.jpg?w=420&h=240&crop=1&quality=85"
              alt="Capa do artigo sobre agentes de IA"
              className="rounded-md aspect-video object-cover mb-4"
            />
            <h3 className="text-xl tracking-tight">
              O que são agentes de IA, que inauguram nova fase da inteligência artificial
            </h3>
            <p className="text-muted-foreground text-base">
              Elementos são bem diferentes dos modelos de linguagem disponíveis hoje, como o ChatGPT e o Gemini
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
);