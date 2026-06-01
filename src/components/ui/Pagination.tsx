import Link from "next/link";
import { news, newsListLimit } from "@/constants";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = news.href,
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / newsListLimit) },
    (_, i) => i + 1,
  );

  return (
    <nav>
      <ul className="mt-19 flex items-center justify-center gap-x-[calc(10/750*100vw)] md:gap-x-4">
        {pages.map((page) => (
          <li key={page}>
            {current !== page ? (
              <Link
                className="flex size-[calc(75/750*100vw)] items-center justify-center text-[calc(26/750*100vw)] md:size-12 md:text-[max(calc(15/16*1rem),15px)]"
                href={`${basePath}/p/${page}`}
              >
                {page}
              </Link>
            ) : (
              <span className="flex size-[calc(75/750*100vw)] items-center justify-center rounded-full bg-black text-[calc(26/750*100vw)] text-white md:size-12 md:text-[max(calc(15/16*1rem),15px)]">
                {page}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
