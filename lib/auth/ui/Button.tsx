import React from "react";

type Variant = "default" | "outline" | "link";

type ButtonProps = {
  children: React.ReactNode;

  type?: "button" | "submit" | "reset";
  disabled?: boolean;

  variant?: Variant;

  className?: string;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants: Record<Variant, string> = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent",

  outline:
    "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400",

  link:
    "bg-transparent text-blue-600 underline-offset-4 hover:underline p-0 border-none shadow-none focus:ring-0",
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled = false,
  variant = "default",
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;