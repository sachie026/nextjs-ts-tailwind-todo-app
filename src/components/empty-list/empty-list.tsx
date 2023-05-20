import React from "react";

import EmptyListCssModule from "./empty-list.module.css";

interface Props {
  title: string;
}

function EmptyList({ title }: Props) {
  return <div className={EmptyListCssModule.empty_list_container}>{title}</div>;
}

export default EmptyList;
