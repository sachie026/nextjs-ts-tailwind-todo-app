import React from "react";

import TaskCard, { TaskProp } from "@/components/task-card/task-card";

import Navigation from "@/components/navigation";
import { LIST_TASK, LOCAL_STORAGE_KEY } from "@/utils/label";
import { useLocalStorage } from "@/utils/useLocalStorage";

import ListCssModule from "./list.module.css";
import useTaskList from "./useTaskList";

function TaskList() {
  const { list, updateTaskList } = useTaskList();
  const { remoteItemSection } = useLocalStorage();

  const onRemoveClick = (id: number) => {
    remoteItemSection(LOCAL_STORAGE_KEY, id);
    updateTaskList();
  };

  return (
    <div className={ListCssModule.container}>
      <Navigation hideIndex={2} />
      <div className={ListCssModule.header_title}>{LIST_TASK}</div>
      {list.map((task: TaskProp, index) => {
        return (
          <TaskCard
            key={index}
            task={task}
            onRemoveClick={() => onRemoveClick(index)}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
