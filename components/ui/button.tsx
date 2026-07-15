import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[160%] before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:scale-[1.03] hover:before:translate-x-[160%] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 motion-reduce:before:hidden [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-yellow text-brand-black shadow-soft hover:bg-brand-yellow-dark hover:shadow-lift",
        red: "bg-brand-red text-white shadow-soft hover:bg-brand-red-dark hover:shadow-lift",
        dark: "bg-brand-black text-white shadow-soft hover:bg-neutral-800 hover:shadow-lift",
        whatsapp:
          "bg-[#25D366] text-white shadow-soft hover:bg-[#1fb959] hover:shadow-lift",
        outline:
          "border-2 border-neutral-200 bg-transparent text-brand-black hover:border-brand-red hover:text-brand-red",
        "outline-light":
          "border-2 border-white/50 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white/10",
        ghost: "text-brand-black hover:bg-brand-gray",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
