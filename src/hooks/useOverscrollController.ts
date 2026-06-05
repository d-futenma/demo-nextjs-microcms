"use client";

import { RefObject, useEffect } from "react";

export function useOverscrollController(
  scrollContainerRef: RefObject<HTMLElement | null>,
  scrollContentRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContentRef.current;

    if (!scrollContainer || !scrollContent) return;

    const setupStyle = () => {
      scrollContainer.style.overscrollBehavior = "none";

      const contentHeight = scrollContent.getBoundingClientRect().height;
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight;

      if (contentHeight <= viewportHeight) {
        scrollContent.style.height = "calc(100dvh + 1px)";
      } else {
        scrollContent.style.height = "";
      }
    };

    setupStyle();

    window.addEventListener("resize", setupStyle);

    return () => {
      window.removeEventListener("resize", setupStyle);
    };
  }, [scrollContainerRef, scrollContentRef]);
}
