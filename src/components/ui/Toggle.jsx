import React from "react";

const Toggle = ({ enabled, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(!enabled)}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all 
        ${
          enabled
            ? "bg-indigo-600 dark:bg-indigo-500"
            : "bg-gray-300 dark:bg-gray-700"
        }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all 
          ${enabled ? "translate-x-6" : "translate-x-0"}`}
      ></div>
    </div>
  );
};

export default Toggle;