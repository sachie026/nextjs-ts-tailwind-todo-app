import React from "react";

import TaskForm from "./taskForm";
import Navigation from "@/components/navigation";
import { ADD_TASK } from "@/utils/label";

import AddCssModule from "./add.module.css";

function AddTask() {
  return (
    <div className={AddCssModule.container}>
      <div className={AddCssModule.nav_wrapper}>
        <Navigation hideIndex={1} />
      </div>

      <div className={AddCssModule.header_title}>{ADD_TASK}</div>
      <TaskForm />
    </div>
  );
}

export default AddTask;
