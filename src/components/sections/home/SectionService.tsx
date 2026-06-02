import Image from "next/image";
import Inner from "@/components/ui/Inner";
import serviceImage01 from "@/assets/img/home/img-2.jpg";
import serviceImage02 from "@/assets/img/home/img-3.jpg";
import serviceImage03 from "@/assets/img/home/img-4.jpg";
import serviceImage04 from "@/assets/img/home/img-5.jpg";

const services = [
  {
    id: "branding",
    title: "ブランディング",
    description:
      "企業やサービスの本質を整理し、伝わるコンセプトと言葉、世界観を設計。長く愛されるブランド体験を構築します。",
    image: serviceImage01,
  },
  {
    id: "graphic-design",
    title: "グラフィックデザイン",
    description:
      "ロゴ・パンフレット・広告・資料など、ブランドイメージを統一した視覚的コミュニケーションを制作します。",
    image: serviceImage02,
  },
  {
    id: "website-development",
    title: "Webサイト制作",
    description:
      "戦略設計からデザイン・実装まで対応します。ブランド価値を伝えながら、成果につながるWebサイトを制作します。",
    image: serviceImage03,
  },
  {
    id: "motion-cg",
    title: "映像・CG制作",
    description:
      "モーショングラフィックスやCG表現を活用し、ブランドの魅力や世界観を印象的な映像コンテンツとして表現します。",
    image: serviceImage04,
  },
];

export default function SectionService() {
  return (
    <section
      id="service"
      className="bg-black py-[calc(176/750*100vw)] text-white md:py-32"
    >
      <Inner>
        <h2 className="mb-[calc(80/750*100vw)] md:mb-10">
          <span className="font-poppins block text-[calc(68/750*100vw)] font-bold tracking-[0.05em] md:text-[max(calc(40/16*1rem),40px)]">
            SERVICE
          </span>
          <span className="ml-0.5 block text-[calc(24/750*100vw)] md:text-[max(calc(14/16*1rem),14px)]">
            私たちにできること
          </span>
        </h2>

        <p className="text-[calc(26/750*100vw)] leading-loose md:text-[max(calc(15/16*1rem),15px)]">
          戦略設計からクリエイティブ制作まで､一貫したデザインパートナーとして支援します。
        </p>

        <div className="mt-[calc(88/750*100vw)] grid grid-cols-1 gap-x-10 gap-y-[calc(160/750*100vw)] md:mt-11 md:grid-cols-2 md:gap-y-20 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.id}>
              <div className="relative aspect-246/180 w-full overflow-hidden">
                <Image
                  className="object-cover object-center"
                  src={service.image}
                  alt={service.id}
                  fill
                />
              </div>
              <div className="mt-[calc(32/750*100vw)] md:mt-4">
                <p className="text-[calc(30/750*100vw)] leading-loose font-bold md:text-[max(calc(18/16*1rem),18px)]">
                  {service.title}
                </p>
                <p className="mt-[calc(20/750*100vw)] text-[calc(26/750*100vw)] leading-loose md:mt-2.5 md:text-[max(calc(15/16*1rem),15px)]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Inner>
    </section>
  );
}
