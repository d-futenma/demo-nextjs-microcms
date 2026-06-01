import { getNewsList } from "@/lib/microcms";
import { newsListLimit } from "@/constants";
import Inner from "@/components/ui/Inner";
import SearchField from "@/components/ui/SearchField";
import NewsList from "@/components/ui/NewsList";
import Pagination from "@/components/ui/Pagination";
import Contact from "@/components/sections/common/SectionContact";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;

  const { contents: newsList, totalCount } = await getNewsList({
    limit: newsListLimit,
    q: searchParams.q,
  });

  const breadcrumbItems = [{ label: "ニュース一覧" }];

  return (
    <>
      <div className="py-[calc(176/750*100vw)] md:px-22 md:pt-32 md:pb-45">
        <Inner>
          <div className="mb-[calc(80/750*100vw)] md:mb-12">
            <SearchField />
          </div>
          <NewsList articles={newsList} />
          <Pagination totalCount={totalCount} />
        </Inner>
      </div>
      <Contact />
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
