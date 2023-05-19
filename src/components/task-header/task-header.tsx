import React from "react";

import TaskHeaderCssModule from "./task-header.module.css";

interface Props {
  title: string;
}

function TaskHeader({ title }: Props) {
  return (
    <>
      <div className={TaskHeaderCssModule.header_title}>{title}</div>
    </>
  );
}

export default TaskHeader;
