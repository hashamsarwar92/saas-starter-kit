import React, { forwardRef } from "react";

type InputProps = {
  label?: string;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          className={`
            w-full rounded-md border px-3 py-2 text-sm
            bg-white text-gray-900
            border-gray-300
            placeholder:text-gray-400

            focus:outline-none
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500

            transition-colors

            disabled:opacity-50 disabled:cursor-not-allowed

            ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}

            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;