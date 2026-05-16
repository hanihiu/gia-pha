import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

export interface FormFieldProps {
  children: ReactNode;
  className?: string;
  htmlFor: string;
  icon?: ReactNode;
  label: string;
  labelClassName?: string;
}

export default function FormField({
  children,
  className,
  htmlFor,
  icon,
  label,
  labelClassName,
}: FormFieldProps) {
  return (
    <div className={cn("block", className)}>
      <label
        className={cn("inline-flex items-center gap-2 text-sm font-medium text-[#4c3828]", labelClassName)}
        htmlFor={htmlFor}
      >
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}
