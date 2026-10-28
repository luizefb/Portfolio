"use server";

import { cookies } from "next/headers";

export async function setLocale(formData: FormData) {
  const locale = formData.get("locale");
  if (locale !== "pt" && locale !== "en") return;
  (await cookies()).set("portfolio-locale", locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
}
