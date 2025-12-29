"use client";

import { createContext, use, useCallback, useState } from "react";

interface LangAttributes {
  lang: "fa" | "en";
  dir: "rtl" | "ltr";
}

interface LangContext {
  langAttributes: LangAttributes;
  toggleLang: () => void;
}

const SUPPORTED_LANGS: Record<LangAttributes["lang"], LangAttributes> = {
  fa: { lang: "fa", dir: "rtl" },
  en: { lang: "en", dir: "ltr" },
};

const DEFAULT_LANG_ATTRIBUTES = SUPPORTED_LANGS.fa;

const LangContext = createContext<LangContext | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [langAttributes, setLangAttributes] = useState<LangAttributes>(() => {
    if (typeof window === "undefined") return DEFAULT_LANG_ATTRIBUTES;
    const htmlLang = document.documentElement.dataset.lang;
    const langAttributes = SUPPORTED_LANGS[htmlLang as LangAttributes["lang"]];
    return langAttributes || DEFAULT_LANG_ATTRIBUTES;
  });

  const toggleLang = useCallback(() => {
    setLangAttributes((cur) => {
      const newLang =
        cur.lang === "fa" ? SUPPORTED_LANGS.en : SUPPORTED_LANGS.fa;
      document.documentElement.lang = newLang.lang;
      document.documentElement.dir = newLang.dir;
      return newLang;
    });
  }, []);

  return (
    <LangContext value={{ langAttributes, toggleLang }}>{children}</LangContext>
  );
}

export function useLangAttributes() {
  const context = use(LangContext);
  if (!context) {
    throw new Error(
      "useLangAttributes must be used within LangProvider component"
    );
  }

  return context;
}
