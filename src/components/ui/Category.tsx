import type { Category } from "@/lib/microcms";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return (
    <span className="ml-[calc(16/750*100vw)] w-fit rounded-full bg-(--color-gray) px-3.5 py-1 text-[calc(20/750*100vw)] font-bold tracking-[0.12em] whitespace-nowrap md:ml-2 md:text-[max(calc(12/16*1rem),12px)]">
      {category.name}
    </span>
  );
}
