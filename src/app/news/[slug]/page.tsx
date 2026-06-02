import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/lib/microcms";
import { news } from "@/constants";
import Inner from "@/components/ui/Inner";
import Date from "@/components/ui/Date";
import Category from "@/components/ui/Category";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Contact from "@/components/sections/common/SectionContact";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  const breadcrumbItems = [
    { label: "ニュース一覧", href: news.href },
    { label: data.title },
  ];

  return (
    <>
      <div className="py-[calc(176/750*100vw)] md:pt-32 md:pb-32">
        <Inner>
          <h2 className="mb-16 text-left font-bold max-md:mb-5 max-md:text-[1.5rem] md:text-[max(calc(34/16*1rem),34px)]">
            {data.title}
          </h2>

          <div className="mb-18 flex shrink items-center justify-start gap-6 max-md:mb-10 max-md:text-[0.9rem]">
            <Link
              href={`${news.href}/category/${data.category.id}`}
              className="flex"
            >
              <Category category={data.category} />
            </Link>
            <Date date={data.publishedAt ?? data.createdAt} />
          </div>

          {data.thumbnail && (
            <div className="mb-12 overflow-hidden rounded-[10px]">
              <Image
                className="h-auto w-full"
                src={data.thumbnail.url}
                alt=""
                width={data.thumbnail.width}
                height={data.thumbnail.height}
              />
            </div>
          )}

          <div dangerouslySetInnerHTML={{ __html: data.content }} />

          <div className="mt-[calc(176/750*100vw)] flex justify-center border-t border-(--color-border) pt-[calc(176/750*100vw)] md:mt-25 md:pt-25">
            <ButtonPrimary href={news.href} iconPosition="left">
              ニュース一覧へ
            </ButtonPrimary>
          </div>
        </Inner>
      </div>

      <Contact />
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
