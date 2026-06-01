import { MetadataRoute } from "next";
import { getAllCategoryList, getAllNewsList } from "@/lib/microcms";
import { home, news, contact } from "@/constants";

const buildUrl = (path?: string) => `http://localhost:3000${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsContents = await getAllNewsList();
  const categoryContents = await getAllCategoryList();

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl(`${news.href}/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`${news.href}/category/${content.id}`),
      lastModified: content.revisedAt,
    }),
  );

  const now = new Date();

  return [
    {
      url: buildUrl(home.href),
      lastModified: now,
    },
    {
      url: buildUrl(news.href),
      lastModified: now,
    },
    {
      url: buildUrl(contact.href),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
  ];
}
