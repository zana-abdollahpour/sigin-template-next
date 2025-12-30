"use client";

import { cn } from "@/utils/tailwind-utils";

const OTP_LENGTH = 6;
interface OtpVerificationProps {
  mode: string;
  isOtpSent: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export function OtpVerification({ isOtpSent, ref }: OtpVerificationProps) {
  return (
    <div
      className={cn(
        "max-h-0 overflow-hidden opacity-0 transition-all duration-400",
        isOtpSent && "mt-4 max-h-30 opacity-100",
      )}
    >
      <label
        htmlFor="otp-input"
        className="mr-1 mb-1.5 ml-1 block text-xs font-medium text-(--text-secondary)"
        data-en="Enter Code"
        data-fa="کد تایید"
      >
        کد تایید
      </label>
      <input
        type="text"
        id="otp-input"
        ref={ref}
        maxLength={OTP_LENGTH}
        className={cn(
          "w-full rounded-xl border border-(--border-color) px-4 py-3 text-center font-mono text-lg tracking-[0.5em]",
          "bg-(--input-bg) text-(--text-primary) transition-colors duration-200 outline-none focus:border-(--text-primary)",
        )}
        placeholder={"•".repeat(OTP_LENGTH)}
      />
      <p
        className="mt-1 text-center text-[10px] text-(--text-secondary)"
        data-en="Check your inbox/SMS"
        data-fa="صندوق ورودی یا پیامک خود را چک کنید"
      >
        صندوق ورودی یا پیامک خود را چک کنید
      </p>
    </div>
  );
}
