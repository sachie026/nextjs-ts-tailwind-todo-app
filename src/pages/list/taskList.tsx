import React from "react";
import { useRouter } from "next/router";

import Navigation from "@/components/navigation";
import ListCssModule from "./list.module.css";

function TaskList() {
  const router = useRouter();
  return (
    <div className={ListCssModule.container}>
      <Navigation hideIndex={2} />
      Tasks List
      <button onClick={router.back}>Back</button>
    </div>
  );
}

export default TaskList;
