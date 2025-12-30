import { TranslationObject } from ".";

export const fa: TranslationObject = {
  auth: {
    login: {
      welcomeMessage: "خوش آمدید",
      introduction: "برای ادامه وارد حساب AI4US شوید",

      googleLogin: "ورود با گوگل",
      moreThirdParties: "سایر گزینه‌ها",

      orLoginWith: "یا ورود با",

      email: "ایمیل",
      phone: "تلفن",
      emailAddress: "آدرس ایمیل",
      phoneNumber: "شماره موبایل",

      continue: "ادامه",
      loginCta: "ورود",

      otpCode: "کد تایید",
      checkForOtp: "صندوق ورودی یا پیامک خود را چک کنید",
      invalidOtpMessage: " کد نامعتبر است. مجدد تلاش کنید. ",

      continueAsGuest: "ادامه به صورت مهمان",

      legalAlert: "با ادامه دادن، شما قوانین ما را می‌پذیرید: ",
      and: "و",
      terms: "شرایط استفاده",
      policy: "حریم خصوصی",
    },
  },
} as const;
