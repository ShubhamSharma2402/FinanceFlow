import React from "react";

const Dropdown = ({
  label,
  value,
  onChange,
  options = [],
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-300 text-sm">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className={`px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all cursor-pointer ${className}`}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;