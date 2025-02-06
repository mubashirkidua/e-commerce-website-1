"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot"; // If using Radix's Slot component
import { cn } from "../../lib/utils"; // Replace this with your actual utility for classnames
import clsx from "clsx"; // Ensure clsx is installed for class concatenation

type ButtonProps = {
  className?: string;
  variant?: "default" | "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = ({
  variant = "default",
  size = "medium",
  className = "",
}: {
  variant?: string;
  size?: string;
  className?: string;
}): string => {
  return cn(
    clsx(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
      {
        // Variant styles
        "bg-gray-200 text-gray-900 hover:bg-gray-300": variant === "default",
        "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
        "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
        "bg-red-600 text-white hover:bg-red-700": variant === "danger",

        // Size styles
        "px-3 py-1 text-sm": size === "small",
        "px-4 py-2 text-base": size === "medium",
        "px-5 py-3 text-lg": size === "large",
      },
      className
    )
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;









