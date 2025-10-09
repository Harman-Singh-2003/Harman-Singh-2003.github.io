import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "default";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = "md", variant = "default", asChild = false, children, ...props }, ref) => {
    const sizeStyles = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8",
    };

    const variantStyles = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-white border-opacity-30 bg-transparent hover:bg-white hover:bg-opacity-10",
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: `inline-flex items-center justify-center rounded-md font-medium transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
      });
    }

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

