import { PiCircleNotchLight } from "react-icons/pi";

import { cn } from "@/utils/tailwind-utils";

interface LoadingProps extends React.ComponentProps<"div"> {
  text?: string | null;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  isFullScreen?: boolean;
  iconClassName?: string;
  textClassName?: string;
}

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
  "2xl": "w-16 h-16",
};

const fontSizeClasses = {
  sm: "text-base",
  md: "text-base",
  lg: "text-base",
  xl: "text-xl",
  "2xl": "text-2xl",
};

export function Loading({
  text = "",
  size,
  isFullScreen,
  iconClassName,
  textClassName,
  ...otherProps
}: LoadingProps) {
  const appliedSize = size ? size : isFullScreen ? "2xl" : "md";

  return (
    <div
      {...otherProps}
      className={cn(
        "flex items-center justify-center gap-2 p-4",
        isFullScreen && "fixed inset-0 h-dvh w-dvw bg-white",
        otherProps.className,
      )}
    >
      <PiCircleNotchLight
        className={cn(
          "text-brand-primary animate-spin",
          iconSizeClasses[appliedSize],
          iconClassName,
        )}
      />
      {text && (
        <span
          className={cn(
            "text-brand-text-light",
            fontSizeClasses[appliedSize],
            textClassName,
          )}
        >
          {text}
        </span>
      )}
    </div>
  );
}
