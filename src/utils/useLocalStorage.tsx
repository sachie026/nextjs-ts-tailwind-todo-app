import React, { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [val, setVal] = useState(fallbackValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    setVal(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal] as const;
}
