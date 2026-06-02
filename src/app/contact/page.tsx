import Inner from "@/components/ui/Inner";
import ContactForm from "@/components/ui/ContactForm";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function Page() {
  const breadcrumbItems = [{ label: "お問い合わせ" }];

  return (
    <>
      <div className="py-[calc(176/750*100vw)] md:py-32">
        <Inner>
          <ContactForm />
        </Inner>
      </div>

      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
