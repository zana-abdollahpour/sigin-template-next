"use client";

import { useRef, useState } from "react";
import { PiArrowLeft } from "react-icons/pi";

import { useTranslation } from "@/i18n/use-translation";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { MobileInput } from "./mobile-input";
import { EmailInput } from "./email-input";
import { OtpVerification } from "./otp-verification";

export function CredentialsLogin() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("email");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const otpInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const inputValue =
      activeTab === "email"
        ? emailInputRef.current?.value
        : mobileInputRef.current?.value;

    if (!inputValue) return;

    if (inputValue.length < 3) {
      return;
    }

    setHasError(false);

    if (!isOtpSent) {
      setIsOtpSent(true);
    } else {
      if (otpInputRef.current?.value.length === 6) {
        window.location.href = "/app";
      } else {
        setHasError(true);
      }
    }
  };

  return (
    <div className="space-y-4">
      <Tabs
        value={activeTab}
        onValueChange={(val) => {
          setActiveTab(val);
          setIsOtpSent(false);
          setHasError(false);
        }}
        className="mb-2 flex justify-center space-y-4"
      >
        <TabsList className="mx-auto">
          <TabsTrigger value="email">{t("auth.login.email")}</TabsTrigger>
          <TabsTrigger value="phone">{t("auth.login.phone")}</TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="relative">
          <EmailInput isOtpSent={isOtpSent} ref={emailInputRef} />
        </TabsContent>

        <TabsContent value="phone" className="relative">
          <MobileInput isOtpSent={isOtpSent} ref={mobileInputRef} />
        </TabsContent>
      </Tabs>

      <OtpVerification
        mode={activeTab}
        isOtpSent={isOtpSent}
        ref={otpInputRef}
      />

      {hasError && (
        <div className="rounded-lg border border-red-100 bg-red-50 p-2 text-center text-xs text-red-600">
          <span>{t("auth.login.invalidOtpMessage")}</span>
        </div>
      )}

      <Button onClick={handleSubmit} variant="primary" className="mt-2 w-full">
        <span>
          {isOtpSent ? t("auth.login.loginCta") : t("auth.login.continue")}
        </span>
        <PiArrowLeft className="ltr:rotate-180 rtl:rotate-0" />
      </Button>

      <Button
        variant="unstyled"
        className="mt-2 w-full text-xs text-(--text-secondary) transition hover:text-(--text-primary)"
      >
        {t("auth.login.continueAsGuest")}
      </Button>
    </div>
  );
}
