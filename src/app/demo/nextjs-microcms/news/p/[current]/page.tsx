import { notFound } from "next/navigation";
import { getNewsList } from "@/lib/microcms";
import { newsListLimit } from "@/constants";
import Inner from "@/components/ui/Inner";
import SearchField from "@/components/ui/SearchField";
import NewsList from "@/components/ui/NewsList";
import Pagination from "@/components/ui/Pagination";
import Contact from "@/components/sections/common/SectionContact";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: newsList, totalCount } = await getNewsList({
    limit: newsListLimit,
    offset: newsListLimit * (current - 1),
  });

  if (newsList.length === 0) {
    notFound();
  }

  const breadcrumbItems = [{ label: "ニュース一覧" }];

  return (
    <>
      <div className="py-[calc(176/750*100vw)] md:px-22 md:pt-32 md:pb-45">
        <Inner>
          <div className="mb-[calc(80/750*100vw)] md:mb-12">
            <SearchField />
          </div>
          <NewsList articles={newsList} />
          <Pagination totalCount={totalCount} current={current} />
        </Inner>
      </div>
      <Contact />
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
