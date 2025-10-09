import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "secondary" | "default";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-blue-500 bg-opacity-20 text-blue-200 border-blue-400 border-opacity-30",
      secondary: "bg-white bg-opacity-10 text-slate-200 border-white border-opacity-20",
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

