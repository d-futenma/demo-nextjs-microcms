"use client";

import Image from "next/image";
import { Element } from "react-scroll";
import { about } from "@/constants";
import Inner from "@/components/ui/Inner";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import aboutImage from "@/assets/img/home/img-1.jpg";

export default function Hero() {
  return (
    <Element name="about">
      <section className="py-[calc(176/750*100vw)] md:py-32">
        <Inner className="relative flex flex-col gap-y-[calc(100/750*100vw)] max-md:pb-[calc(240/750*100vw)] md:flex-row md:items-center md:gap-y-16">
          <div className="md:w-[50%] md:pr-22">
            <h2 className="mb-[calc(80/750*100vw)] md:mb-10">
              <span className="font-poppins block text-[calc(68/750*100vw)] font-bold tracking-[0.05em] md:text-[max(calc(40/16*1rem),40px)]">
                ABOUT
              </span>
              <span className="ml-0.5 block text-[calc(24/750*100vw)] md:text-[max(calc(14/16*1rem),14px)]">
                私たちについて
              </span>
            </h2>

            <p className="text-[calc(48/750*100vw)] leading-[1.6] font-bold md:text-[max(calc(24/16*1rem),24px)]">
              ブランドの可能性を､
              <br className="xl:hidden" />
              デザインでひらく。
            </p>

            <p className="mt-[calc(80/750*100vw)] text-[calc(26/750*100vw)] leading-[2.2] md:mt-8 md:text-[max(calc(15/16*1rem),15px)]">
              私たちは、ブランドの本質を見極め、戦略から設計まで
              <br className="max-xl:hidden" />
              一貫して支援するブランディングパートナーです。
              <br className="max-xl:hidden" />
              課題の本質に向き合い、クリエイティブとテクノロジーの力で、
              <br className="max-xl:hidden" />
              持続的な成長を支えるデザイン体験を提供します。
            </p>

            <div className="max-md:absolute max-md:bottom-0 max-md:left-0 max-md:mx-auto max-md:flex max-md:w-full max-md:justify-center md:mt-10">
              <ButtonPrimary href={about.href}>ABOUT</ButtonPrimary>
            </div>
          </div>

          <div className="aspect-560/660 overflow-hidden md:w-[50%]">
            <Image
              className="object-cover object-center"
              src={aboutImage}
              alt=""
            />
          </div>
        </Inner>
      </section>
    </Element>
  );
}
