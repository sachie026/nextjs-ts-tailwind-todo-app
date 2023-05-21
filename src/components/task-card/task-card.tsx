import React from "react";

import { REMOVE_LABEL } from "@/utils/label";

import ListCardCssModule from "./list-card.module.css";
import { getDayWithTime } from "@/utils/utility-methods";

export interface TaskProp {
  desc: string;
  date: string;
  createdAt: string;
}

interface Props {
  task: TaskProp;
  onRemoveClick: () => void;
}

function TaskCard({ task, onRemoveClick }: Props) {
  const { desc, createdAt } = task;
  return (
    <div className={ListCardCssModule.list_card}>
      {desc}
      <div className={ListCardCssModule.list_card_footer}>
        <div className={ListCardCssModule.list_date}>
          {getDayWithTime(createdAt)}
        </div>
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
