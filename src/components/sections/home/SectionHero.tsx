"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import Inner from "@/components/ui/Inner";

import heroImage from "@/assets/img/common/img-1.jpg";

export default function Hero() {
  return (
    <section className="relative h-dvh min-h-screen overflow-hidden max-md:min-h-[calc(1334/750*100vw)]">
      <div className="pointer-events-none absolute top-0 left-0 size-full">
        <Image
          className="object-cover object-center"
          src={heroImage}
          alt=""
          fill
          priority
        />
      </div>
      <Inner className="relative z-1 flex h-full items-center text-white">
        <div className="md:pt-14">
          <p className="font-poppins text-[calc(68/750*100vw)] leading-[1.08] font-bold tracking-[0.02em] whitespace-nowrap md:text-[max(calc(76/16*1rem),76px)]">
            <span className="block -skew-x-6">DESIGN THAT</span>
            <span className="block -skew-x-6">DRIVES BUSINESS</span>
          </p>
          <p className="mt-3 ml-0.5 text-[calc(25/750*100vw)] leading-[1.8] font-medium tracking-[0.04em] md:mt-6 md:text-[max(calc(15/16*1rem),15px)]">
            戦略から設計し、成果につながるブランドをつくる。
          </p>
        </div>
      </Inner>
      <div className="absolute right-[calc(52/750*100vw)] bottom-0 md:right-10">
        <Link
          className="group flex cursor-pointer flex-col items-center gap-[calc(20/750*100vw)] md:gap-2.5"
          to="about"
          smooth={true}
          duration={500}
        >
          <div className="font-poppins text-[calc(20/750*100vw)] leading-none tracking-widest text-white transition-transform duration-1000 ease-(--ease-circ-out) [writing-mode:vertical-rl] group-hover:translate-y-5 md:text-[max(calc(12/16*1rem),12px)]">
            SCROLL
          </div>
          <div className="h-[calc(120/750*100vw)] w-px -translate-x-px bg-white transition-transform duration-1000 ease-(--ease-circ-out) group-hover:translate-y-5 md:h-15 md:w-0.5"></div>
        </Link>
      </div>
    </section>
  );
}
