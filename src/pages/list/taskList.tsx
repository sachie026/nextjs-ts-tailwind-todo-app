import React from "react";

import Navigation from "@/components/navigation";
import { LIST_TASK, LOCAL_STORAGE_KEY } from "@/utils/label";
import { useLocalStorage } from "@/utils/useLocalStorage";

import ListCssModule from "./list.module.css";
import useTaskList from "./useTaskList";
import TaskHeader from "@/components/task-header";
import TasksList from "@/components/task-list/task-list";

function TaskList() {
  const { list, updateTodaysTaskLists } = useTaskList();
  const { remoteItemSection } = useLocalStorage();

  const onRemoveClick = (id: number) => {
    remoteItemSection(LOCAL_STORAGE_KEY, id);
    updateTodaysTaskLists();
  };

  return (
    <div className={ListCssModule.container}>
      <Navigation hideIndex={2} />
      <TaskHeader title={LIST_TASK} />
      <TasksList list={list} onRemoveClick={onRemoveClick} />
    </div>
  );
}

export default TaskList;
