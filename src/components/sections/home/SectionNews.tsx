import { getNewsList } from "@/lib/microcms";
import { news, topNewsLimit } from "@/constants";
import Inner from "@/components/ui/Inner";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import NewsList from "@/components/ui/NewsList";

export default async function News() {
  const { contents: newsList } = await getNewsList({
    limit: topNewsLimit,
  });

  return (
    <section id="news" className="py-[calc(176/750*100vw)] md:py-32">
      <Inner>
        <div className="flex w-full flex-col gap-x-40 gap-y-[calc(96/750*100vw)] md:gap-y-14 lg:flex-row lg:gap-y-16">
          <div>
            <h2 className="md:mt-9">
              <span className="font-poppins block text-[calc(68/750*100vw)] font-bold tracking-[0.05em] md:text-[max(calc(40/16*1rem),40px)]">
                NEWS
              </span>
              <span className="ml-0.5 block text-[calc(24/750*100vw)] md:text-[max(calc(14/16*1rem),14px)]">
                ニュース
              </span>
            </h2>
          </div>
          <div className="flex-1">
            <NewsList articles={newsList} />
            <div className="mt-[calc(80/750*100vw)] flex justify-center md:mt-10 md:justify-end">
              <ButtonPrimary href={news.href}>ニュース一覧</ButtonPrimary>
            </div>
          </div>
        </div>
      </Inner>
    </section>
  );
}
