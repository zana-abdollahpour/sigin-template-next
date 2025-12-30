"use client";

import { useTranslation } from "@/i18n/use-translation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="mt-8 border-t border-(--border-color) pt-4 text-center">
      <p className="text-[10px] leading-relaxed text-(--text-secondary)">
        <span
          data-en="By clicking continue, you agree to our"
          data-fa="با ادامه دادن، شما قوانین ما را می‌پذیرید:"
        >
          {t("auth.login.legalAlert")}{" "}
        </span>
        <a
          href="#"
          className="underline hover:text-(--text-primary)"
          data-en="Terms of Service"
          data-fa="شرایط استفاده"
        >
          {t("auth.login.terms")}
        </a>
        <span data-en="and" data-fa="و" className="mx-0.5">
          {t("auth.login.and")}
        </span>
        <a
          href="#"
          className="underline hover:text-(--text-primary)"
          data-en="Privacy Policy"
          data-fa="حریم خصوصی"
        >
          {t("auth.login.policy")}
        </a>
        .
      </p>
    </div>
  );
}
