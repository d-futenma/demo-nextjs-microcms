"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { home, navItems } from "@/constants";
import SiteLogo from "@/components/ui/SiteLogo";
import Menu from "@/components/ui/Menu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === home.href;

  const logo = (
    <Link
      className="block h-[calc(21/750*100vw)] w-[calc(350/750*100vw)] md:h-4.5 md:min-h-4.5 md:w-75 md:min-w-75"
      href={home.href}
    >
      <SiteLogo fill={isHome ? "fill-white" : "fill-black"} />
    </Link>
  );

  return (
    <header
      className={`absolute top-0 left-0 z-10 w-full ${
        isHome ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="flex h-[calc(192/750*100vw)] w-full items-center justify-between px-[calc(60/750*100vw)] md:h-24 md:px-10">
        {isHome ? <h1>{logo}</h1> : <div>{logo}</div>}

        <nav className="hidden md:block">
          <ul className="flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  className={`group font-poppins relative block overflow-hidden text-[max(calc(14/16*1rem),14px)] leading-none font-medium tracking-[0.04em] ${isHome ? "text-white" : ""}`}
                  href={item.href}
                >
                  <span className="block transition-transform duration-1000 ease-(--ease-circ-out) group-hover:-translate-y-full">
                    {item.nameEN}
                  </span>
                  <span
                    className="absolute top-0 left-0 block translate-y-full transition-transform duration-1000 ease-(--ease-circ-out) group-hover:translate-y-0"
                    aria-hidden="true"
                  >
                    {item.nameEN}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Menu />
      </div>
    </header>
  );
}
