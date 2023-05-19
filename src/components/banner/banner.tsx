import React from "react";

import BannerCssModule from "./banner.module.css";

interface Props {
  title?: string;
}

function Banner({ title }: Props) {
  return (
    <div className={BannerCssModule.banner_wrapper}>
      <div className={BannerCssModule.banner_info}>{title}</div>
    </div>
  );
}

export default Banner;
