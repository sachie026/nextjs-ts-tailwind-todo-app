export function useLocalStorage() {
  const setItem = (key: string, value: string) => {
    const data = localStorage.getItem(key);
    if (data) {
      const temp = JSON.parse(data);
      temp.push(value);
      localStorage.setItem(key, JSON.stringify(temp));
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
    }
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
