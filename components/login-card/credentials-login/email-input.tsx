import { cn } from "@/utils/tailwind-utils";

interface EmailInputProps {
  isOtpSent: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export function EmailInput({ isOtpSent, ref }: EmailInputProps) {
  return (
    <div className="relative">
      <label
        htmlFor="email-input"
        className="mr-1 mb-1.5 ml-1 block text-xs font-medium text-(--text-secondary)"
        data-en="Email Address"
        data-fa="آدرس ایمیل"
      >
        آدرس ایمیل
      </label>
      <input
        ref={ref}
        type="email"
        id="email-input"
        maxLength={64}
        disabled={isOtpSent}
        className={cn(
          "w-full rounded-xl border border-(--border-color) px-4 py-3",
          "bg-(--input-bg) text-(--text-primary) transition-colors duration-200 outline-none",
          "focus:border-(--text-primary) ltr:text-left rtl:text-right",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
        placeholder="name@example.com"
      />
    </div>
  );
}
