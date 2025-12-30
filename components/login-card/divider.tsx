"use client";

import { useTranslation } from "@/i18n/use-translation";

export function Divider() {
  const { t } = useTranslation();

  return (
    <div className="relative py-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-(--border-color)"></div>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span
          className="bg-(--bg-primary) px-2 text-(--text-secondary)"
          data-en="Or continue with"
          data-fa="یا ورود با"
        >
          {t("auth.login.orLoginWith")}
        </span>
      </div>
    </div>
  );
}
