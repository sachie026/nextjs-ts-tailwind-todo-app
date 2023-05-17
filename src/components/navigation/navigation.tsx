import React from "react";
import Link from "next/link";

import { LIST_TASK, ADD_TASK } from "@/utils/label";

import NavCssModule from "./navigation.module.css";

interface Props {
  hideIndex: number;
}

export default function Navigation({ hideIndex }: Props) {
  return (
    <nav className={NavCssModule.nav_container}>
      {(hideIndex === 1 || hideIndex === 3) && (
        <div className={NavCssModule.nav_link_wrapper}>
          <Link href="/list" className={NavCssModule.nav_link}>
            {LIST_TASK}
          </Link>
        </div>
      )}
      {(hideIndex === 2 || hideIndex === 3) && (
        <div className={NavCssModule.nav_link_wrapper}>
          <Link href="/add" className={NavCssModule.nav_link}>
            {ADD_TASK}
          </Link>
        </div>
      )}
    </nav>
  );
}
