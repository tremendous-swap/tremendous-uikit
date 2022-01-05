import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 484 188" {...props}>
      <image
        href="/images/logo-mobile.png"
        width="484"
      ></image>
    </Svg>
  );
};

export default Icon;
