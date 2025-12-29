"use client";

import { useState, createContext, useContext } from "react";

import { cn } from "@/utils/tailwind-utils";

import { Button } from "@/components/ui/button";

interface TabsContext {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContext | null>(null);

function Tabs({
  value: controlledValue,
  className,
  onValueChange,
  defaultValue,
  children,
  ...props
}: {
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div
        data-slot="tabs"
        className={cn(
          "inline-flex rounded-full border border-(--border-color) bg-(--bg-secondary) p-1",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabsList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-10 w-fit items-center justify-center rounded-lg p-0.75",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  value,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const isActive = context.value === value;

  return (
    <Button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      data-slot="tabs-trigger"
      onClick={() => context.onValueChange(value)}
      className={cn(
        "rounded-full bg-inherit px-6 py-2 text-[13px] text-(--text-secondary) transition-all duration-200",
        isActive &&
          "bg-(--bg-primary) font-semibold text-(--text-primary) shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  value,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  const isActive = context.value === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
