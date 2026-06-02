"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { home, news } from "@/constants";
import Category from "@/components/ui/Category";
import Date from "@/components/ui/Date";
import { News } from "@/lib/microcms";
import noImage from "@/assets/img/common/no-img.jpg";

type Props = {
  articles: News[];
};

export default function NewsList({ articles }: Props) {
  const pathname = usePathname();
  const isHome = pathname === home.href;

  if (articles.length === 0) {
    return (
      <p className="text-[calc(26/750*100vw)] md:text-[max(calc(15/16*1rem),15px)]">
        現在、公開されている記事はありません。
      </p>
    );
  }
  return (
    <ul>
      {articles.map((article) => (
        <li
          key={article.id}
          className="border-b border-solid border-(--color-border) first:border-t first:border-(--color-border)"
        >
          <Link
            href={`${news.href}/${article.id}`}
            className="group relative flex gap-x-10 py-[calc(80/750*100vw)] max-md:flex-col md:py-12"
          >
            {!isHome && (
              <div className="pointer-events-none aspect-320/170 w-full overflow-hidden rounded-[10px] max-md:mb-[calc(48/750*100vw)] md:w-80">
                {article.thumbnail ? (
                  <Image
                    className="object-cover object-center"
                    src={article.thumbnail.url}
                    alt=""
                    width={article.thumbnail.width}
                    height={article.thumbnail.height}
                  />
                ) : (
                  <Image
                    className="object-cover object-center"
                    src={noImage}
                    alt="No Image"
                    width={noImage.width}
                    height={noImage.height}
                  />
                )}
              </div>
            )}

            <div className="flex-1 pr-[calc(136/750*100vw)] max-md:relative md:pr-20">
              <div className="mb-[calc(48/750*100vw)] flex items-center gap-[calc(8/750*100vw)] md:mb-6 md:gap-4">
                <Date date={article.publishedAt ?? article.createdAt} />
                <Category category={article.category} />
              </div>

              <div className="text-[calc(26/750*100vw)] leading-loose tracking-[0.04em] text-black md:text-[max(calc(15/16*1rem),15px)]">
                {article.title}
              </div>

              <div className="absolute top-0 right-0 bottom-0 my-auto size-[calc(100/750*100vw)] rounded-full bg-(--color-gray) max-md:translate-y-[calc(15/750*100vw)] md:size-15">
                <span className="absolute inset-0 m-auto block h-[calc(20/750*100vw)] w-[calc(24/750*100vw)] overflow-hidden md:h-2.5 md:w-3">
                  <svg
                    className="group-hover:animate-slide size-full fill-black"
                    role="img"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-1"></use>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
