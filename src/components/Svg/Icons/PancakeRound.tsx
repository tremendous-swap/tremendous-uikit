import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image
        href="/images/token-logo.png"
        width="128"
      ></image>
    </Svg>
  );
};

export default Icon;
