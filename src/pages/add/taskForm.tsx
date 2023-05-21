import React, { useState } from "react";

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
import Banner from "@/components/banner";

interface Props {
  updateTodaysList: () => void;
}

function TaskForm({ updateTodaysList }: Props) {
  const { text, toDate, updateText, updateDate, resetForm } = useAddTask();
  const { setItem } = useLocalStorage();
  const [showBanner, setShowBanner] = useState(false);

  const hideBanner = () => {
    const timeoutId = setTimeout(() => {
      setShowBanner(false);
      clearTimeout(timeoutId);
    }, 2000);
  };

  const addNewTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text.length) {
      const obj = {
        desc: text,
        createdAt: new Date(),
      };
      setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
      resetForm();
      updateTodaysList();
      setShowBanner(true);
      hideBanner();
    }
  };

  return (
    <div className={AddCssModule.add_task_content}>
      {showBanner && <Banner title="Task added" />}
      <label className={AddCssModule.label_info}>{TO_DO_LABEL}</label>
      <textarea
        className={AddCssModule.input_elem}
        aria-label={TO_DO_TASK_LABEL}
        value={text}
        onChange={updateText}
      ></textarea>
      <button className={AddCssModule.add_task_button} onClick={addNewTask}>
        {ADD_LABEL}
      </button>
    </div>
  );
}

export default TaskForm;
