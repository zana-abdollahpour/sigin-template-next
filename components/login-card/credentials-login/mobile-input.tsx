"use client";

import { cn } from "@/utils/tailwind-utils";
import { useTranslation } from "@/i18n/use-translation";

interface MobileInputProps {
  isOtpSent: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export function MobileInput({ isOtpSent, ref }: MobileInputProps) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <label
        htmlFor="phone-input"
        className="mr-1 mb-1.5 ml-1 block text-xs font-medium text-(--text-secondary)"
      >
        {t("auth.login.phoneNumber")}
      </label>
      <div className="relative">
        <input
          ref={ref}
          type="tel"
          id="phone-input"
          disabled={isOtpSent}
          className={cn(
            "w-full rounded-xl border border-(--border-color) px-4 py-3",
            "bg-(--input-bg) text-(--text-primary) transition-colors duration-200 outline-none",
            "focus:border-(--text-primary) ltr:pr-16 ltr:text-left rtl:text-right",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
          placeholder="912 345 6789"
        />
        <span
          className={cn(
            "absolute top-1/2 -translate-y-1/2",
            "rounded border border-(--border-color)",
            "bg-(--bg-secondary) px-2 py-1 text-xs",
            "ltr:right-3 rtl:left-3",
          )}
        >
          +98
        </span>
      </div>
    </div>
  );
}
