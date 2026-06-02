import Link from "next/link";
import { home } from "@/constants";
import Inner from "@/components/ui/Inner";

type Items = {
  label: string;
  href?: string;
};

type Props = {
  items: Items[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <div className="border-t border-b border-solid border-t-(--color-border) border-b-(--color-border) pt-[calc(56/750*100vw)] pb-[calc(64/750*100vw)] md:pt-7 md:pb-8">
      <Inner>
        <ul className="gap-x-[calc(45/750*100vw)] md:gap-x-7">
          <li className="mr-[calc(45/750*100vw)] inline-block text-[calc(26/750*100vw)] text-black md:mr-7 md:text-[max(calc(12/16*1rem),12px)]">
            <Link
              href={home.href}
              className="relative pr-[calc(72/750*100vw)] underline md:pr-9"
            >
              <span className="breadcrumb-item-label">ホーム</span>
              <svg
                role="img"
                aria-hidden="true"
                className="absolute top-0 right-0 bottom-0 my-auto h-[calc(20/750*100vw)] w-[calc(24/750*100vw)] fill-black md:h-3 md:w-1.75"
              >
                <use href="#icon-arrow-2"></use>
              </svg>
            </Link>
          </li>

          {items.map((item) =>
            item.href ? (
              <li
                key={item.label}
                className="mr-[calc(45/750*100vw)] inline-block text-[calc(26/750*100vw)] text-black md:mr-7 md:text-[max(calc(12/16*1rem),12px)]"
              >
                <Link
                  href={item.href}
                  className="relative pr-[calc(72/750*100vw)] underline md:pr-9"
                >
                  <span className="breadcrumb-item-label">{item.label}</span>
                  <svg
                    role="img"
                    aria-hidden="true"
                    className="absolute top-0 right-0 bottom-0 my-auto h-[calc(20/750*100vw)] w-[calc(24/750*100vw)] fill-black md:h-3 md:w-1.75"
                  >
                    <use href="#icon-arrow-2"></use>
                  </svg>
                </Link>
              </li>
            ) : (
              <li
                key={item.label}
                className="inline-block text-[calc(26/750*100vw)] text-black md:text-[max(calc(12/16*1rem),12px)]"
              >
                <span className="breadcrumb-item-label">{item.label}</span>
              </li>
            ),
          )}
        </ul>
      </Inner>
    </div>
  );
}
