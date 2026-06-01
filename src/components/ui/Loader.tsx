"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const hideLoader = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      hideLoader();
      return;
    }

    window.addEventListener("load", hideLoader);

    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-100 size-full bg-white transition-[opacity,visibility] duration-500 noscript:hidden ${
        isLoaded
          ? "pointer-events-none invisible opacity-0"
          : "visible opacity-100"
      }`}
      ref={loaderRef}
    />
  );
}
