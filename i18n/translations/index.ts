import { en } from "./en";
import { fa } from "./fa";

export const translations = {
  en,
  fa,
} as const;

export interface TranslationObject {
  auth: {
    login: {
      welcomeMessage: string;
      introduction: string;

      googleLogin: string;
      moreThirdParties: string;

      orLoginWith: string;

      email: string;
      phone: string;
      emailAddress: string;
      phoneNumber: string;

      continue: string;
      loginCta: string;

      otpCode: string;
      checkForOtp: string;
      invalidOtpMessage: string;

      continueAsGuest: string;

      legalAlert: string;
      and: string;
      terms: string;
      policy: string;
    };
  };
}
