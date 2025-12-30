"use client";

import { useTranslation } from "@/i18n/use-translation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="mt-8 border-t border-(--border-color) pt-4 text-center">
      <p className="text-[10px] leading-relaxed text-(--text-secondary)">
        <span>{t("auth.login.legalAlert")} </span>
        <a href="#" className="underline hover:text-(--text-primary)">
          {t("auth.login.terms")}
        </a>
        <span className="mx-0.5">{t("auth.login.and")}</span>
        <a href="#" className="underline hover:text-(--text-primary)">
          {t("auth.login.policy")}
        </a>
        .
      </p>
    </div>
  );
}
