"use client";

import { useTranslation } from "@/i18n/use-translation";

export function Header() {
  const { t } = useTranslation();

  return (
    <div className="mb-8 text-center">
      <h1 className="mb-2 text-2xl font-bold">
        {t("auth.login.welcomeMessage")}
      </h1>
      <p className="text-sm text-(--text-secondary)">
        {t("auth.login.introduction")}
      </p>
    </div>
  );
}
