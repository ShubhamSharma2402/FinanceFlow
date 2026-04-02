import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const readValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const [value, setValue] = useState(readValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error("Failed to write to localStorage");
    }
  }, [key, value]);

  return [value, setValue];
}