import Link from "next/link";
import { Instagram, Phone } from "lucide-react"; // ícones do Lucide


export const Footer1 = () => {

  return (
    <div className="w-full py-20 lg:py-40 bg-foreground text-background px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Coluna da marca */}
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-extrabold text-left">
                ZEBRAIN™
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Automatize processos. Economize tempo. Cresça com inteligência.
              </p>
            </div>

            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/">Termos de serviço</Link>
                <Link href="/">Política de privacidade</Link>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="flex gap-4 pt-4">
              <Link href="https://instagram.com/zebrain.lab" target="_blank">
                <Instagram className="w-5 h-5 hover:opacity-80" />
              </Link>
              <Link href="https://wa.me/5599999999999" target="_blank">
                <Phone className="w-5 h-5 hover:opacity-80" />
              </Link>
            </div>
          </div>

          {/* Colunas de navegação */}
        </div>
      </div>
    </div>
  );
};