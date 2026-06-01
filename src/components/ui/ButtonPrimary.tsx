import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  width?: string;
  bg?: string;
  hoverBg?: string;
  hoverColor?: string;
  iconFill?: string;
  iconPosition?: "left" | "right";
};

export default function ButtonPrimary({
  href,
  children,
  width = "md:w-55",
  bg = "bg-black",
  iconFill = "fill-[#ffffff]",
  iconPosition = "right",
}: Props) {
  return (
    <Link
      className={`transition-[background, color] group relative flex h-[calc(130/750*100vw)] w-[calc(420/750*100vw)] min-w-[220px] items-center justify-center rounded-full text-[calc(26/750*100vw)] leading-none font-medium tracking-[0.04em] whitespace-nowrap text-white duration-500 md:h-15 md:md:min-h-[60px] md:px-7 md:text-[max(calc(14/16*1rem),14px)] ${width} ${bg}`}
      href={href}
    >
      {children}
      <span
        className={`absolute top-0 bottom-0 my-auto block h-[calc(20/750*100vw)] w-[calc(24/750*100vw)] overflow-hidden md:h-[10px] md:w-[12px] ${iconFill} ${
          iconPosition === "right" ? "right-5.5" : "left-5 scale-x-[-1]"
        }`}
        aria-hidden="true"
      >
        <svg className="group-hover:animate-slide size-full" role="img">
          <use href="#icon-arrow-1"></use>
        </svg>
      </span>
    </Link>
  );
}
