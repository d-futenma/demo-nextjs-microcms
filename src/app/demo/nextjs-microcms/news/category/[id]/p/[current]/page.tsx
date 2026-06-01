import { notFound } from "next/navigation";
import { getCategoryDetail, getNewsList } from "@/lib/microcms";
import { news, newsListLimit } from "@/constants";
import Inner from "@/components/ui/Inner";
import Category from "@/components/ui/Category";
import NewsList from "@/components/ui/NewsList";
import Pagination from "@/components/ui/Pagination";
import Contact from "@/components/sections/common/SectionContact";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = {
  params: Promise<{
    current: string;
    id: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: newsList, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: newsListLimit,
    offset: newsListLimit * (current - 1),
  });

  if (newsList.length === 0) {
    notFound();
  }

  const breadcrumbItems = [{ label: "ニュース一覧" }];

  return (
    <>
      <div className="py-[calc(176/750*100vw)] md:px-22 md:pt-32 md:pb-32">
        <Inner>
          <div className="mb-[calc(80/750*100vw)] md:mb-12">
            <p className="text-[calc(26/750*100vw)] text-black md:text-[max(calc(15/16*1rem),15px)]">
              <Category category={category} /> の一覧
            </p>
          </div>
          <NewsList articles={newsList} />
          <Pagination
            totalCount={totalCount}
            current={current}
            basePath={`${news.href}/category/${category.id}`}
          />
        </Inner>
      </div>
      <Contact />
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
