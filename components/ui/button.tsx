import { cn } from "@/utils/tailwind-utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "outline" | "unstyled";
}

const variantClassNames: Record<string, string[]> = {
  common: ["cursor-pointer"],
  primary: [
    "flex w-full items-center justify-center gap-2 font-medium text-(--btn-text)",
    "bg-(--btn-bg) px-4 py-3 transition-opacity duration-200 rounded-full hover:opacity-85",
  ],
  outline: [
    "flex items-center justify-center rounded-full border border-(--border-color) transition-all duration-200",
    "bg-transparent p-2.5 text-(--text-primary) hover:border-(--text-primary) hover:bg-(--bg-secondary)",
  ],
};

export function Button({
  children,
  variant = "primary",
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={cn(
        variantClassNames.common,
        variantClassNames[variant],
        otherProps.className,
      )}
    >
      {children}
    </button>
  );
}
