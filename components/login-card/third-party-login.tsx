"use client";

import {
  PiAppleLogo,
  PiGoogleLogo,
  PiLinkedinLogo,
  PiXLogo,
} from "react-icons/pi";

import { Button } from "@/components/ui/button";

import { useTranslation } from "@/i18n/use-translation";

export function ThirdPartyLogin() {
  const { t } = useTranslation();

  return (
    <div className="mb-3 space-y-3">
      <Button
        variant="outline"
        className="w-full justify-center gap-2 font-medium"
      >
        <PiGoogleLogo className="text-lg font-medium" />
        <span>{t("auth.login.googleLogin")}</span>
      </Button>

      <div className="grid grid-cols-3 gap-3">
        <Button variant="outline">
          <PiAppleLogo className="text-xl" />
        </Button>
        <Button variant="outline">
          <PiLinkedinLogo className="text-xl" />
        </Button>
        <Button variant="outline">
          <PiXLogo className="text-xl" />
        </Button>
      </div>
    </div>
  );
}
