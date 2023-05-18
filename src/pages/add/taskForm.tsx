import React from "react";

import {
  TO_DO_LABEL,
  TO_DO_DATE,
  ADD_LABEL,
  LOCAL_STORAGE_KEY,
  TO_DO_DATE_LABEL,
  TO_DO_TASK_LABEL,
} from "@/utils/label";
import AddCssModule from "./add.module.css";

import useAddTask from "./useAddTask";
import { useLocalStorage } from "@/utils/useLocalStorage";

function TaskForm() {
  const { text, toDate, updateText, updateDate } = useAddTask();
  const { setItem } = useLocalStorage();

  const addNewTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const obj = {
      desc: text,
      date: toDate,
    };
    setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
  };

  return (
    <div className={AddCssModule.add_task_content}>
      <label className={AddCssModule.label_info}>{TO_DO_LABEL}</label>
      <textarea
        className={AddCssModule.input_elem}
        aria-label={TO_DO_TASK_LABEL}
        value={text}
        onChange={updateText}
      ></textarea>
      <label className={AddCssModule.label_info}>{TO_DO_DATE}</label>
      <input
        className={AddCssModule.input_elem}
        type="date"
        aria-label={TO_DO_DATE_LABEL}
        value={toDate}
        onChange={updateDate}
      />
      <button className={AddCssModule.input_elem} onClick={addNewTask}>
        {ADD_LABEL}
      </button>
    </div>
  );
}

export default TaskForm;
