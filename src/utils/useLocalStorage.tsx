import React, { useEffect, useState } from "react";

export function useLocalStorage() {
  const setItem = (key: string, value: string) => {
    const data = localStorage.getItem(key);
    if (data) {
      const temp = JSON.parse(data);
      temp.push(value);
      localStorage.setItem(key, JSON.stringify(temp));
      //   console.log("temp", temp);
    } else {
      //   console.log;
      localStorage.setItem(key, JSON.stringify([value]));
    }
    // console.log("data", data);
    // console.log(data && JSON.stringify(data));
  };

  const getItem = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : "";
  };

  return {
    setItem,
    getItem,
  };
}
