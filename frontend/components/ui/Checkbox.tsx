import type { InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      className={cn("h-4 w-4 rounded border-[#d9bf7f] accent-[#8f1918]", className)}
      type="checkbox"
      {...props}
    />
  );
}
