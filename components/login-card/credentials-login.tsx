import { PiArrowLeft } from "react-icons/pi";

import { Button } from "@/components/ui/button";

export function CredentialsLogin() {
  return (
    <div className="space-y-4">
      {/* Toggle Email/Phone */}
      <div className="mb-2 flex justify-center">
        <div className="toggle-group" id="loginTypeToggle">
          <button
            type="button"
            className="toggle-btn active"
            data-type="email"
            data-en="Email"
            data-fa="ایمیل"
          >
            ایمیل
          </button>
          <button
            type="button"
            className="toggle-btn"
            data-type="phone"
            data-en="Phone"
            data-fa="تلفن"
          >
            تلفن
          </button>
        </div>
      </div>

      {/* Main Input */}
      <div className="relative">
        <label
          className="mr-1 mb-1.5 ml-1 block text-xs font-medium text-(--text-secondary)"
          id="inputLabel"
          data-en="Email Address"
          data-fa="آدرس ایمیل"
        >
          آدرس ایمیل
        </label>
        <div className="relative">
          <input
            type="email"
            id="mainInput"
            className="input-field ltr:text-left rtl:text-right"
            placeholder="name@example.com"
          />
          <span
            id="phonePrefix"
            className="absolute top-1/2 left-3 hidden -translate-y-1/2 rounded border border-(--border-color) bg-(--bg-secondary) px-2 py-1 text-xs ltr:right-3 ltr:left-auto rtl:right-auto rtl:left-3"
          >
            +98
          </span>
        </div>
      </div>

      {/* OTP Input (Hidden Initially) */}
      <div id="otpGroup" className="otp-section">
        <label
          className="mr-1 mb-1.5 ml-1 block text-xs font-medium text-(--text-secondary)"
          data-en="Enter Code"
          data-fa="کد تایید"
        >
          کد تایید
        </label>
        <input
          type="text"
          id="otpInput"
          maxLength={6}
          className="input-field text-center font-mono text-lg tracking-[0.5em]"
          placeholder="••••••"
        />
        <p
          className="mt-1 text-center text-[10px] text-(--text-secondary)"
          data-en="Check your inbox/SMS"
          data-fa="صندوق ورودی یا پیامک خود را چک کنید"
        >
          صندوق ورودی یا پیامک خود را چک کنید
        </p>
      </div>

      {/* Error Message */}
      <div
        id="errorMessage"
        className="hidden rounded-lg border border-red-100 bg-red-50 p-2 text-center text-xs text-red-600"
      >
        <span
          data-en="Invalid code. Please try again."
          data-fa="کد نامعتبر است. مجدد تلاش کنید."
        >
          کد نامعتبر است. مجدد تلاش کنید.
        </span>
      </div>

      <Button variant="primary" className="mt-2">
        <span data-en="Continue" data-fa="ادامه">
          ادامه
        </span>
        <PiArrowLeft className="ltr:rotate-180 rtl:rotate-0" />
      </Button>

      <Button
        variant="unstyled"
        className="mt-2 w-full text-xs text-(--text-secondary) transition hover:text-(--text-primary)"
        data-en="Continue as Guest"
        data-fa="ادامه به صورت مهمان"
      >
        ادامه به صورت مهمان
      </Button>
    </div>
  );
}
