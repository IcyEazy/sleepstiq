import React from "react";
import { IconProps } from "../../types";

const ArrowFilledUp: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
  className,
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width || "6"}
      height={height || "4"}
      viewBox="0 0 6 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3.57746e-08L0 4L6 4L3 3.57746e-08Z"
        fill={fillColor || "#12305B"}
      />
    </svg>
  );
};

export default ArrowFilledUp;
