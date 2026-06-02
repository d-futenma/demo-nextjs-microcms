import Hero from "@/components/ui/Hero";
import Sheet from "@/components/ui/Sheet";
import bgImage from "@/assets/img/common/img-3.jpg";

export const metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero headingEn="NEWS" headingJa="ニュース" bgImage={bgImage} />
      <Sheet>{children}</Sheet>
    </>
  );
}
