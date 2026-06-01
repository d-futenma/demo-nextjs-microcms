import Hero from "@/components/ui/Hero";
import Sheet from "@/components/ui/Sheet";
import bgImage from "@/assets/img/common/img-2.jpg";

export const metadata = {
  title: "お問い合わせ",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero headingEn="CONTACT" headingJa="お問い合わせ" bgImage={bgImage} />
      <Sheet>{children}</Sheet>
    </>
  );
}
