import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTA2 = () => (
  <div className="w-full py-20 lg:py-40 bg-muted px-4">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Faça parte do futuro</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-6xl tracking-tighter max-w-xl font-regular">
            Automatize seu negócio!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
          Fique à frente da concorrência com tecnologia que trabalha por você.
          </p>
        </div>
        <div className="flex flex-row gap-4">
        <Link href="https://wa.me/5599999999999" target="_blank">
          <Button className="gap-4" variant="outline">
        
            Fale com a gente<PhoneCall className="w-4 h-4" />
          </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);