import React from "react";
import { useRouter } from "next/router";

import Navigation from "@/components/navigation";
import { LIST_TASK, BACK_LABEL } from "@/utils/label";

import ListCssModule from "./list.module.css";
import useTaskList from "./useTaskList";

interface TaskProp {
  desc: string;
  date: string;
}

function TaskList() {
  const router = useRouter();
  const { list } = useTaskList();

  return (
    <div className={ListCssModule.container}>
      <Navigation hideIndex={2} />
      {LIST_TASK}
      {list.map((task: TaskProp, index) => {
        return <div key={index}> {task.desc}</div>;
      })}
      <button onClick={router.back}>{BACK_LABEL}</button>
    </div>
  );
}

export default TaskList;
