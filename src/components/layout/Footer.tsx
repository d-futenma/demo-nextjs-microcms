"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { home, navItems } from "@/constants";
import Inner from "@/components/ui/Inner";
import SiteLogo from "@/components/ui/SiteLogo";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === home.href;

  return (
    <footer
      className={`py-[calc(120/750*100vw)] md:py-15 ${
        isHome ? "bg-white" : "bg-black"
      }`}
    >
      <Inner>
        <div className="flex flex-col gap-y-[calc(63/750*100vw)] md:flex-row md:items-center md:justify-between md:gap-8">
          <div>
            <Link
              className="block h-[calc(21/750*100vw)] w-[calc(350/750*100vw)] md:h-4.5 md:min-h-4.5 md:w-75 md:min-w-75"
              href={home.href}
            >
              <SiteLogo fill={isHome ? "fill-black" : "fill-white"} />
            </Link>
          </div>

          <nav>
            <ul className="flex flex-col gap-y-[calc(16/750*100vw)] md:flex-row md:items-center md:gap-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`group font-poppins relative block overflow-hidden text-[calc(24/750*100vw)] leading-none font-medium tracking-[0.04em] md:text-[max(calc(14/16*1rem),14px)] ${
                      isHome ? "text-black" : "text-white"
                    }`}
                    href={item.href}
                  >
                    <span className="block transition-transform duration-[0.8s] ease-(--ease-circ-out) group-hover:-translate-y-full">
                      {item.nameEN}
                    </span>
                    <span
                      className="absolute top-0 left-0 block translate-y-full transition-transform duration-[0.8s] ease-(--ease-circ-out) group-hover:translate-y-0"
                      aria-hidden="true"
                    >
                      {item.nameEN}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-[calc(55/750*100vw)] md:mt-5">
          <p>
            <small className="text-[calc(20/750*100vw)] tracking-[0.02em] text-[#959595] md:text-[max(calc(10/16*1rem),10px)]">
              © 2026 FUTENMA STUDIO Inc.
            </small>
          </p>
        </div>
      </Inner>
    </footer>
  );
}
