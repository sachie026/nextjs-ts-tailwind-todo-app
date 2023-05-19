import React from "react";

import TaskCard, { TaskProp } from "../task-card/task-card";

import TasksListCssModule from "./task-list.module.css";

interface Props {
  list: TaskProp[];
  onRemoveClick: (index: number) => void;
}

function TasksList({ list, onRemoveClick }: Props) {
  return (
    <div className={TasksListCssModule.task_list_wrapper}>
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

export default TasksList;
