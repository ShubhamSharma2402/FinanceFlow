import React from "react";

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-300 text-sm">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${className}`}
      />
    </div>
  );
};

export default Input;