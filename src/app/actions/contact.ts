"use server";

export type ContactFormState = {
  status: "success" | "error" | "";
  message: string;
  values: {
    name: string;
    company: string;
    email: string;
    message: string;
  };
};

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  const errorState = (message: string): ContactFormState => ({
    status: "error",
    message,
    values,
  });

  if (!values.name) {
    return errorState("お名前を入力してください");
  }
  if (!values.company) {
    return errorState("会社名を入力してください");
  }
  if (!values.email) {
    return errorState("メールアドレスを入力してください");
  }
  if (!validateEmail(values.email)) {
    return errorState("メールアドレスの形式が誤っています");
  }
  if (!values.message) {
    return errorState("メッセージを入力してください");
  }

  try {
    const result = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: "name",
              value: values.name,
            },
            {
              objectTypeId: "0-1",
              name: "company",
              value: values.company,
            },
            {
              objectTypeId: "0-1",
              name: "email",
              value: values.email,
            },
            {
              objectTypeId: "0-1",
              name: "message",
              value: values.message,
            },
          ],
        }),
      },
    );

    if (!result.ok) {
      return errorState("お問い合わせの送信に失敗しました");
    }

    await result.json();
  } catch (e) {
    console.log(e);
    return errorState("お問い合わせの送信に失敗しました");
  }

  return { status: "success", message: "OK", values };
}
