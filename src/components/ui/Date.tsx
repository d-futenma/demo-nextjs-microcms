import { getDateParts } from "@/lib/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  const { year, month, day } = getDateParts(date);

  return (
    <time
      className="text-[calc(20/750*100vw)] font-medium tracking-[0.04em] md:text-[max(calc(12/16*1rem),12px)]"
      dateTime={`${year}-${month}-${day}`}
    >
      {`${year}/${month}/${day}`}
    </time>
  );
}
