import React from "react";

import Navigation from "@/components/navigation";
import { LIST_TASK, LOCAL_STORAGE_KEY, REMOVE_LABEL } from "@/utils/label";
import { useLocalStorage } from "@/utils/useLocalStorage";

import ListCssModule from "./list.module.css";
import useTaskList from "./useTaskList";

interface TaskProp {
  desc: string;
  date: string;
}

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
          <div key={index} className={ListCssModule.list_card}>
            {task.desc}
            <div className={ListCssModule.list_card_footer}>
              <div className={ListCssModule.list_date}>{task.date}</div>
              <button
                className={ListCssModule.remove_button}
                onClick={() => onRemoveClick(index)}
              >
                {REMOVE_LABEL}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
