import React from "react";

import { REMOVE_LABEL } from "@/utils/label";

import ListCardCssModule from "./list-card.module.css";

export interface TaskProp {
  desc: string;
  date: string;
}

interface Props {
  task: TaskProp;
  onRemoveClick: () => void;
}

function TaskCard({ task, onRemoveClick }: Props) {
  const { desc, date } = task;
  return (
    <div className={ListCardCssModule.list_card}>
      {desc}
      <div className={ListCardCssModule.list_card_footer}>
        <div className={ListCardCssModule.list_date}>{date}</div>
        <button
          className={ListCardCssModule.remove_button}
          onClick={onRemoveClick}
        >
          {REMOVE_LABEL}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
