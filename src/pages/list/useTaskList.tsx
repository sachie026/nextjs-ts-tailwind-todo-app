import React, { useEffect, useState } from "react";

import { useLocalStorage } from "@/utils/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "@/utils/label";
import { dateDiffInDays } from "@/utils/utility-methods";

interface TaskProp {
  desc: string;
  date: string;
  createdAt: string;
}

function useTaskList() {
  const [list, setList] = useState<TaskProp[]>([]);
  const [todaysTasks, setTodaysTasks] = useState<TaskProp[]>([]);

  const { getItem } = useLocalStorage();

  function getTaskLists() {
    const temp = getItem(LOCAL_STORAGE_KEY);
    const arr: TaskProp[] = [];
    temp.forEach((item: string) => {
      arr.push(JSON.parse(item));
    });
    setList([...arr]);
  }

  function getTodaysTaskLists() {
    const filteredList = list.filter(
      (task: TaskProp) =>
        dateDiffInDays(new Date(), new Date(task.createdAt)) === 0
    );

    setTodaysTasks([...filteredList]);
  }

  useEffect(() => {
    getTaskLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTodaysTaskLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return {
    list,
    todaysTasks,
    updateTaskList: getTaskLists,
    updateTodaysTaskLists: getTodaysTaskLists,
  };
}

export default useTaskList;
