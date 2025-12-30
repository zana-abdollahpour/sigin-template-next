import { en } from "./en";
import { fa } from "./fa";

export type TranslationKey = typeof en;

export const translations = {
  en,
  fa,
} as const;
