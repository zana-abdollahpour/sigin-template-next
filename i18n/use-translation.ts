"use client";

import { translations } from "./translations";

import { useLangAttributes } from "@/providers/lang";
import type { NestedKeyOf } from "@/types/helpers";

type TranslationKeys = NestedKeyOf<typeof translations.en>;

export function useTranslation() {
  const { langAttributes } = useLangAttributes();
  const currentTranslations = translations[langAttributes.lang];

  const t = (key: TranslationKeys): string => {
    const keys = key.split(".");
    let value: unknown = currentTranslations;

    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return { t, lang: langAttributes.lang };
}
