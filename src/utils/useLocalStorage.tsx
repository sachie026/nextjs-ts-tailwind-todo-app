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

  const remoteItemSection = (key: string, index: number) => {
    const data = localStorage.getItem(key);
    if (data) {
      const temp = JSON.parse(data);
      const filteredArr = temp.filter(
        (_item: string, id: number) => id !== index
      );
      localStorage.setItem(key, JSON.stringify(filteredArr));
    }
  };

  const removeAllSections = () => {
    localStorage.clear();
  };

  return {
    setItem,
    getItem,
    remoteItemSection,
    removeAllSections,
  };
}
