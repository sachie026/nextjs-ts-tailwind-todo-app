import React, { useEffect, useState } from "react";

import { useLocalStorage } from "@/utils/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "@/utils/label";

interface TaskProp {
  desc: string;
  date: string;
}

function useTaskList() {
  const [list, setList] = useState<TaskProp[]>([]);
  const { getItem } = useLocalStorage();

  function getTaskLists() {
    const temp = getItem(LOCAL_STORAGE_KEY);
    const arr: TaskProp[] = [];
    temp.forEach((item: string) => {
      arr.push(JSON.parse(item));
    });
    setList([...arr]);
  }

  useEffect(() => {
    getTaskLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
  };
}

export default useTaskList;
