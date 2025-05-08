import React from "react";

export function Button({ children, className = "", variant = "default", size = "default", ...props }) {
  const base = "rounded-xl px-4 py-2 font-medium transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent hover:bg-gray-100"
  };
  const sizes = {
    default: "text-base",
    sm: "text-sm py-1 px-3"
  };

  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
