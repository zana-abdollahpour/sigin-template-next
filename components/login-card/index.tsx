import { cn } from "@/utils/tailwind-utils";

import { Header } from "./header";
import { ThirdPartyLogin } from "./third-party-login";
import { MoreThirdPartyLogins } from "./more-third-party-logins";
import { Divider } from "./divider";
import { CredentialsLogin } from "./credentials-login";
import { Footer } from "./footer";

export function LoginCard() {
  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <div
        className={cn(
          "w-full max-w-110 border border-(--border-color) bg-(--bg-primary) p-10",
          "rounded-3xl shadow-(--card-shadow) transition-all duration-300",
        )}
      >
        <Header />
        <ThirdPartyLogin />
        <MoreThirdPartyLogins />
        <Divider />
        <CredentialsLogin />
        <Footer />
      </div>
    </main>
  );
}
