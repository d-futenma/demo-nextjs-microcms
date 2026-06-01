import Inner from "@/components/ui/Inner";

export default function NotFound() {
  return (
    <section className="grid h-full place-items-center py-[calc(176/750*100vw)] max-md:min-h-screen md:py-32">
      <Inner>
        <h1 className="font-poppins mb-[calc(80/750*100vw)] text-center text-[calc(68/750*100vw)] font-bold tracking-[0.05em] md:mb-10 md:text-[max(calc(40/16*1rem),40px)]">
          Page Not Found
        </h1>
        <p className="text-center text-[calc(26/750*100vw)] leading-[2.2] md:text-[max(calc(15/16*1rem),15px)]">
          お探しのページは見つかりませんでした。
          <br />
          URLをご確認のうえ、再度アクセスしてください。
        </p>
      </Inner>
    </section>
  );
}
