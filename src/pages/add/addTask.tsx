import React from "react";

import TaskForm from "./taskForm";
import TaskHeader from "@/components/task-header";
import Navigation from "@/components/navigation";
import { ADD_TASK, LOCAL_STORAGE_KEY, TODAYS_TASK } from "@/utils/label";

import AddCssModule from "./add.module.css";
import useTaskList from "../list/useTaskList";
import TasksList from "@/components/task-list/task-list";
import { useLocalStorage } from "@/utils/useLocalStorage";
import HrLine from "@/components/hr-line";

function AddTask() {
  const { todaysTasks, updateTodaysTaskLists } = useTaskList();
  const { remoteItemSection } = useLocalStorage();

  const onRemoveClick = (id: number) => {
    remoteItemSection(LOCAL_STORAGE_KEY, id);
    updateTodaysTaskLists();
  };

  const updateTodaysList = () => {
    updateTodaysTaskLists();
  };

  return (
    <div className={AddCssModule.container}>
      <div className={AddCssModule.nav_wrapper}>
        <Navigation hideIndex={1} />
      </div>

      <TaskHeader title={ADD_TASK} />
      <TaskForm updateTodaysList={updateTodaysList} />
      <HrLine />
      <TaskHeader title={TODAYS_TASK} />
      <TasksList list={todaysTasks} onRemoveClick={onRemoveClick} />
    </div>
  );
}

export default AddTask;
