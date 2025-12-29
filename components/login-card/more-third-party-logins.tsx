"use client";

import { useState } from "react";

import { cn } from "@/utils/tailwind-utils";

import { Button } from "@/components/ui/button";

const options = ["Microsoft", "Facebook", "Github", "Gitlab", "Discord"];

export function MoreThirdPartyLogins() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-center">
      <Button
        variant="unstyled"
        data-en="More options"
        data-fa="سایر گزینه‌ها"
        className="text-xs text-(--text-secondary) underline decoration-dotted transition hover:text-(--text-primary)"
        onClick={() => setIsExpanded((cur) => !cur)}
      >
        سایر گزینه‌ها
      </Button>

      <div
        id="extraSocialGrid"
        className={cn(
          "grid max-h-0 grid-cols-5 gap-2 overflow-hidden opacity-0 transition-all",
          isExpanded && "mt-3 max-h-50 opacity-100",
        )}
      >
        {options.map((opt) => (
          <div
            key={opt}
            className={cn(
              "hover:text-(--text-primary)) text-center text-[0.625rem] text-(--text-secondary) hover:border-(--text-primary)",
              "cursor-pointer rounded-lg border border-(--border-color) p-1.5 transition-all duration-200",
            )}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
