"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useOverscrollController } from "@/hooks/useOverscrollController";
import { home, navItems } from "@/constants";
import SiteLogo from "@/components/ui/SiteLogo";
import Inner from "@/components/ui/Inner";

export default function Menu() {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuInnerRef = useRef<HTMLDivElement | null>(null);

  useOverscrollController(menuRef, menuInnerRef);

  const openMenu = () => {
    menuRef.current?.scrollTo({ top: 0 });
    setIsOpened(true);
  };

  const closeMenu = () => {
    setIsOpened(false);
  };

  const toggleMenu = () => {
    if (isOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <button
        className={`fixed top-[calc(32/750*100vw)] right-[calc(32/750*100vw)] z-100 hidden size-[calc(120/750*100vw)] cursor-pointer rounded-full border-[none] transition-[background] duration-400 ease-out max-md:block ${
          isOpened ? "bg-white" : "bg-black"
        }`}
        type="button"
        aria-label={isOpened ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpened}
        aria-controls="menu"
        onClick={toggleMenu}
      >
        <span
          className={`absolute inset-0 m-auto block ${
            isOpened
              ? "h-[calc(18/750*100vw)] w-[calc(40/750*100vw)]"
              : "h-[calc(16/750*100vw)] w-[calc(40/750*100vw)]"
          }`}
        >
          <span
            className={`absolute top-0 block h-px w-full origin-top-left transition-[translate,rotate] duration-400 ease-out ${
              isOpened
                ? "translate-x-[calc(1/750*100vw)] translate-y-[calc(1/750*100vw)] rotate-20 bg-black"
                : "bg-white"
            }`}
          />
          <span
            className={`transition-[translate, rotate] absolute bottom-0 block h-px w-full origin-top-left duration-400 ease-out ${
              isOpened
                ? "translate-y-[calc(-1/750*100vw)] -rotate-20 bg-black"
                : "bg-white"
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed top-0 left-0 z-9 size-full overflow-y-scroll transition-[opacity,visibility] duration-400 ease-out ${
          isOpened
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        ref={menuRef}
      >
        <div className="relative flex min-h-screen w-full" ref={menuInnerRef}>
          <div className="w-full bg-black">
            <div className="flex h-[calc(192/750*100vw)] w-full items-center justify-between px-[calc(60/750*100vw)]">
              <Link
                href={home.href}
                className="block h-[calc(21/750*100vw)] w-[calc(350/750*100vw)]"
                onClick={closeMenu}
              >
                <SiteLogo fill="fill-white" />
              </Link>
            </div>

            <Inner className="mt-[calc(48/750*100vw)]">
              <nav className="mb-10">
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <li
                      key={item.id}
                      className="border-b border-solid border-(--color-border) first:border-t first:border-(--color-border)"
                    >
                      <Link
                        href={item.href}
                        className="font-poppins relative block py-[calc(47/750*100vw)] text-[calc(24/750*100vw)] font-medium tracking-[0.04em] text-white"
                        onClick={closeMenu}
                      >
                        {item.nameEN}
                        <span className="absolute top-0 right-0 bottom-0 my-auto size-[calc(40/750*100vw)] rounded-full bg-(--color-gray)">
                          <svg
                            role="img"
                            aria-hidden="true"
                            className="absolute top-0 right-0 bottom-0 left-0 m-auto h-[calc(15/750*100vw)] w-[calc(18/750*100vw)] translate-x-[calc(1/750*100vw)]"
                          >
                            <use href="#icon-arrow-3"></use>
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Inner>
          </div>
        </div>
      </div>
    </>
  );
}
