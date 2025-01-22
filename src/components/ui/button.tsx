"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot"; // If using Radix's Slot component
import  {cn } from  "../../components/ui/classname"; // Replace this with your actual utility for classnames
import   button  from "../../components/ui/button"; // Replace with your actual imports

type ButtonProps = {
  className?: string;
  variant?: string;
  size?: string;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(Button({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "button";

export default Button;



