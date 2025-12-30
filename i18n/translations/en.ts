import { TranslationObject } from ".";

export const en: TranslationObject = {
  auth: {
    login: {
      welcomeMessage: "Welcome back",
      introduction: "Sign in to AI4US to continue",

      googleLogin: "Continue With Google",
      moreThirdParties: "More Options",

      orLoginWith: "OR CONTINUE WITH",

      email: "Email",
      phone: "Phone",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",

      continue: "Continue",
      loginCta: "Sign In",

      otpCode: "Enter Code",
      checkForOtp: "Check your inbox/SMS",
      invalidOtpMessage: " Invalid code. Please try again. ",

      continueAsGuest: "Continue as Guest",

      legalAlert: "By clicking continue, you agree to our",
      and: "and",
      terms: "Terms of Service",
      policy: "Privacy Policy",
    },
  },
} as const;
