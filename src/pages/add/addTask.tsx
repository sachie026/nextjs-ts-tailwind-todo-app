import React, { useState } from "react";

import useAddTask from "./useAddTask";
import Navigation from "@/components/navigation";
import { ADD_TASK, TO_DO_LABEL, TO_DO_DATE, ADD_LABEL } from "@/utils/label";

import AddCssModule from "./add.module.css";

function AddTask() {
  const { text, toDate, updateText, updateDate } = useAddTask();

  return (
    <div className={AddCssModule.container}>
      <div className={AddCssModule.nav_wrapper}>
        <Navigation hideIndex={1} />
      </div>

      <div className={AddCssModule.header_title}>{ADD_TASK}</div>

      <div className={AddCssModule.add_task_content}>
        <label className={AddCssModule.label_info}>{TO_DO_LABEL}</label>
        <textarea
          className={AddCssModule.input_elem}
          aria-label="To do task"
          value={text}
          onChange={updateText}
        ></textarea>
        <label className={AddCssModule.label_info}>{TO_DO_DATE}</label>
        <input
          className={AddCssModule.input_elem}
          type="date"
          aria-label="To do date"
          value={toDate}
          onChange={updateDate}
        />
        <button className={AddCssModule.input_elem} onClick={() => {}}>
          {ADD_LABEL}
        </button>
      </div>
    </div>
  );
}

export default AddTask;
