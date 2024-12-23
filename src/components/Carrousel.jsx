"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DATOCARDSINIT } from "@/mock/datoInit";
import Image from "next/image";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const datos = DATOCARDSINIT;

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs md:max-w-3xl rounded-md md:mt-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {datos.map((dato) => (
          <CarouselItem
            key={dato.id}
            className="relative flex aspect-[16/9] md:aspect-[5/2] overflow-hidden rounded-lg"
          >
            <Card className="w-full h-full">
              <CardContent className="relative w-full h-full overflow-hidden">
                <Image
                  src={dato.imagen}
                  alt={dato.url}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
