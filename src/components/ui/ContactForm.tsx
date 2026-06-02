"use client";

import { useActionState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { home } from "@/constants";
import {
  createContactData,
  type ContactFormState,
} from "@/app/actions/contact";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ContactFormRequired from "@/components/ui/ContactFormRequired";

const initialState: ContactFormState = {
  status: "",
  message: "",
  values: {
    name: "",
    company: "",
    email: "",
    message: "",
  },
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);
  const handleSubmit = () => {
    sendGAEvent({ event: "contact", value: "submit" });
  };
  if (state.status === "success") {
    return (
      <>
        <p className="text-[calc(26/750*100vw)] leading-loose max-md:text-left md:text-center md:text-[max(calc(15/16*1rem),15px)]">
          お問い合わせいただき、ありがとうございます。
          <br />
          内容を確認のうえ、担当者よりご連絡いたします。
          <br />
          今しばらくお待ちください。
        </p>
        <div className="mt-[calc(176/750*100vw)] flex justify-center border-t border-(--color-border) pt-[calc(176/750*100vw)] md:mt-25 md:pt-25">
          <ButtonPrimary href={home.href} iconPosition="left">
            ホームへ
          </ButtonPrimary>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="mb-10 text-[calc(26/750*100vw)] leading-loose max-md:text-left md:text-center md:text-[max(calc(15/16*1rem),15px)]">
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常3営業日以内にご連絡いたします。
      </p>

      <form
        className="mx-auto max-w-200"
        action={formAction}
        onSubmit={handleSubmit}
      >
        <div className="my-[calc(72/750*100vw)] flex flex-col md:my-9">
          <label
            className="mb-[calc(32/750*100vw)] flex items-center text-[calc(26/750*100vw)] md:mb-4 md:text-[max(calc(15/16*1rem),15px)]"
            htmlFor="name"
          >
            お名前
            <ContactFormRequired />
          </label>
          <input
            id="name"
            className="w-full rounded border border-(--color-border) p-[calc(24/750*100vw)] leading-normal md:p-3"
            type="text"
            name="name"
            defaultValue={state.values.name}
          />
        </div>

        <div className="my-[calc(72/750*100vw)] flex flex-col md:my-9">
          <label
            className="mb-[calc(32/750*100vw)] flex items-center text-[calc(26/750*100vw)] md:mb-4 md:text-[max(calc(15/16*1rem),15px)]"
            htmlFor="company"
          >
            会社名
            <ContactFormRequired />
          </label>
          <input
            id="company"
            className="w-full rounded border border-(--color-border) p-[calc(24/750*100vw)] leading-normal md:p-3"
            type="text"
            name="company"
            defaultValue={state.values.company}
          />
        </div>

        <div className="my-[calc(72/750*100vw)] flex flex-col md:my-9">
          <label
            className="mb-[calc(32/750*100vw)] flex items-center text-[calc(26/750*100vw)] md:mb-4 md:text-[max(calc(15/16*1rem),15px)]"
            htmlFor="email"
          >
            メールアドレス
            <ContactFormRequired />
          </label>
          <input
            id="email"
            className="w-full rounded border border-(--color-border) p-[calc(24/750*100vw)] leading-normal md:p-3"
            type="text"
            name="email"
            defaultValue={state.values.email}
          />
        </div>

        <div className="my-[calc(72/750*100vw)] flex flex-col md:my-9">
          <label
            className="mb-[calc(32/750*100vw)] flex items-center text-[calc(26/750*100vw)] md:mb-4 md:text-[max(calc(15/16*1rem),15px)]"
            htmlFor="message"
          >
            メッセージ
            <ContactFormRequired />
          </label>
          <textarea
            id="message"
            className="h-62.5 w-full rounded border border-(--color-border) p-[calc(24/750*100vw)] leading-normal md:p-3"
            name="message"
            defaultValue={state.values.message}
          />
        </div>

        {state.status === "error" && (
          <p className="mt-[calc(80/750*100vw)] text-center text-(--color-red) md:mt-10">
            {state.message}
          </p>
        )}

        <div className="mt-[calc(80/750*100vw)] md:mt-10">
          <input
            type="submit"
            value="送信する"
            className="relative mx-auto flex h-[calc(130/750*100vw)] w-[calc(420/750*100vw)] cursor-pointer items-center justify-center rounded-full bg-black text-[calc(26/750*100vw)] leading-none font-medium tracking-[0.04em] whitespace-nowrap text-white md:h-15 md:min-h-[60px] md:w-55 md:min-w-[220px] md:text-[max(calc(14/16*1rem),14px)]"
          />
        </div>
      </form>
    </>
  );
}
