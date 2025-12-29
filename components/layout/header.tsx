"use client";

import { PiSun, PiMoon } from "react-icons/pi";

import { useLangAttributes } from "@/providers/lang";
import { useTheme } from "@/providers/theme";
import { cn } from "@/utils/tailwind-utils";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { langAttributes, toggleLang } = useLangAttributes();

  return (
    <header>
      <nav className="absolute top-0 z-10 flex w-full items-center justify-between p-6">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              "bg-(--text-primary) text-xs font-black text-(--bg-primary)",
            )}
          >
            AI
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className={cn(
              "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition",
              "text-(--text-secondary) hover:bg-(--border-color) hover:text-(--text-primary)",
            )}
          >
            {theme === "dark" ? <PiSun /> : <PiMoon />}
          </button>

          <div className="flex scale-90 items-center gap-2">
            <span className="text-xs font-bold text-(--text-secondary)">
              EN
            </span>

            <div className="relative z-10 inline-block w-10 align-middle select-none">
              <input
                checked={langAttributes.lang === "en"}
                title="lang-toggle"
                id="lang-toggle"
                type="checkbox"
                onChange={toggleLang}
                className={cn(
                  "peer absolute block size-5 cursor-pointer rounded-full transition-all duration-300",
                  "appearance-none border-2 border-(--border-color) bg-(--bg-primary)",
                  "checked:right-0 checked:border-(--text-primary)",
                )}
              />
              <label
                htmlFor="lang-toggle"
                className={cn(
                  "block h-5 bg-gray-300 peer-checked:bg-(--text-primary)",
                  "cursor-pointer overflow-hidden rounded-full",
                )}
              />
            </div>

            <span className="text-xs font-bold text-(--text-secondary)">
              FA
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
