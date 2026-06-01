import type { StaticImageData } from "next/image";
import Image from "next/image";
import Inner from "@/components/ui/Inner";

type Props = {
  headingEn: string;
  headingJa: string;
  bgImage: StaticImageData;
};

export default function Hero({ headingEn, headingJa, bgImage }: Props) {
  return (
    <section className="relative mt-24 flex h-[calc(495/750*100vw)] items-center overflow-hidden text-white max-md:mt-[calc(192/750*100vw)] md:h-105">
      <div className="pointer-events-none absolute top-0 left-0 size-full">
        <Image
          className="object-cover object-center"
          src={bgImage.src}
          alt=""
          fill
        />
      </div>

      <Inner className="relative w-full">
        <h1 className="mt-[calc(-20/750*100vw)] text-white md:-mt-4">
          <span className="font-poppins block text-[calc(68/750*100vw)] font-bold tracking-[0.05em] md:text-[max(calc(50/16*1rem),50px)]">
            {headingEn}
          </span>
          <span className="ml-0.5 block text-[calc(24/750*100vw)] md:text-[max(calc(14/16*1rem),14px)]">
            {headingJa}
          </span>
        </h1>
      </Inner>
    </section>
  );
}
