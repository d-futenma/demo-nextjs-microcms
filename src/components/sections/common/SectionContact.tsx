import Image from "next/image";
import { contact } from "@/constants";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import contactImage from "@/assets/img/common/img-2.jpg";

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[calc(176/750*100vw)] text-white md:py-32"
    >
      <Image
        className="pointer-events-none object-cover object-center"
        src={contactImage}
        alt=""
        fill
      />

      <div className="px-[calc(60/750*100vw)] md:px-22">
        <div className="relative text-center">
          <div>
            <h2 className="mb-[calc(80/750*100vw)] md:mb-10">
              <span className="font-poppins block text-[calc(68/750*100vw)] font-bold tracking-[0.05em] md:text-[max(calc(40/16*1rem),40px)]">
                CONTACT
              </span>
              <span className="block text-[calc(24/750*100vw)] md:text-[max(calc(14/16*1rem),14px)]">
                お問い合わせ
              </span>
            </h2>

            <p className="mb-[calc(80/750*100vw)] text-[calc(26/750*100vw)] leading-loose md:mb-11 md:text-[max(calc(15/16*1rem),15px)]">
              ブランディングに関するご相談・ご質問など､
              <br className="md:hidden" />
              お気軽にお問い合わせください。
            </p>
          </div>

          <div className="grid h-full place-items-center">
            <ButtonPrimary
              href={contact.href}
              bg="bg-white"
              iconFill="fill-black"
            >
              <span className="text-black">お問い合わせ</span>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
