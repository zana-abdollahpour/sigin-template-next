import { Suspense } from "react";

import { LangProvider } from "./lang";
import { ThemeProvider } from "./theme";
import { Loading } from "@/components/ui/loading";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading isFullScreen />}>
      <ThemeProvider>
        <LangProvider>{children}</LangProvider>
      </ThemeProvider>
    </Suspense>
  );
}
