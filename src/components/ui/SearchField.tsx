"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { news } from "@/constants";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const q = form.elements.namedItem("q");

    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`${news.href}/search?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex w-full items-center gap-[calc(16/750*100vw)] rounded-full border border-(--color-border) px-5 py-[calc(28/750*100vw)] focus-within:border-black md:gap-2 md:py-3">
        <svg
          className="size-[calc(45/750*100vw)] stroke-black md:size-5"
          role="img"
          aria-hidden="true"
        >
          <use href="#icon-search"></use>
        </svg>
        <input
          className="box-border block w-full appearance-none border border-transparent bg-transparent p-0 text-[calc(26/750*100vw)] outline-none [-webkit-tap-highlight-color:transparent] md:text-[max(calc(15/16*1rem),15px)]"
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力してください"
        />
      </label>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}
