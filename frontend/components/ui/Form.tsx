import type { FormHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export default function Form({ className, ...props }: FormProps) {
  return <form className={cn("space-y-4", className)} {...props} />;
}
