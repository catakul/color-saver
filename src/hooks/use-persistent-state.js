import { useState, useEffect } from "react";
export const usePersistentState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const tempValue = localStorage.getItem(key);
    return tempValue ? JSON.parse(tempValue) : defaultValue;
  });
  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);
  return [value, setValue];
};
