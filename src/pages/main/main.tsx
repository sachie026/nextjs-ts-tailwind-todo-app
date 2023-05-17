import React from "react";

import Navigation from "@/components/navigation";
import { WELCOME_LABEL } from "@/utils/label";

import mainCssModule from "./main.module.css";

export default function Main() {
  return (
    <div className={mainCssModule.main_container}>
      <div className={mainCssModule.welcome_title}>{WELCOME_LABEL}</div>
      <div className={mainCssModule.today_label}>
        {new Date().toDateString()}
      </div>
      <Navigation hideIndex={3} />
      <div></div>
    </div>
  );
}
