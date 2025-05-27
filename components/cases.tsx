"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Case = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const logos = [
    "/Logo-1.png",
    "/Logo-2.png",
    "/Logo-3.png",
    "/Logo-4.png",
    "/Logo-1.png",
    "/Logo-2.png",
    "/Logo-3.png",
    "/Logo-4.png",
    "/Logo-1.png",
    "/Logo-2.png",
    "/Logo-3.png",
    "/Logo-4.png",
    "/Logo-1.png",
    "/Logo-2.png",
    "/Logo-3.png",
  ];

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Quem confia em nós?
          </h2>

          {/* Carousel wrapper with gradients */}
          <div className="relative">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {logos.map((logo, index) => (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                    <div className="relative flex aspect-square items-center justify-center rounded-md bg-black/2 p-4">
                      <Image
                        src={logo}
                        alt={`Logo cliente ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Degradê lateral esquerdo */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />

            {/* Degradê lateral direito */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};