import SectionHero from "@/components/sections/home/SectionHero";
import SectionAbout from "@/components/sections/home/SectionAbout";
import SectionService from "@/components/sections/home/SectionService";
import SectionNews from "@/components/sections/home/SectionNews";
import SectionContact from "@/components/sections/common/SectionContact";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionService />
      <SectionNews />
      <SectionContact />
    </>
  );
}
