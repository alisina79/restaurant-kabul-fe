import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  asChild,
  children,
  variant = "primary",
  ...props
}) => {
  if (asChild) {
    return <>{children}</>;
  }

  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold ${
        variant === "primary"
          ? "bg-blue-600 text-white"
          : "border-2 border-gray-600 text-gray-600"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
