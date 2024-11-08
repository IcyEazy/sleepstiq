import React from "react";
import { IconProps } from "../../types";

const Facebook: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
  className,
}) => {
  return (
    <svg
      className={className}
      width={width || "10"}
      height={height || "18"}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.6328 0.69207C9.36159 0.651891 8.42744 0.571533 7.34262 0.571533C5.07253 0.571533 3.51561 1.95769 3.51561 4.49899V6.68872H0.954224V9.66194H3.51561V17.2858H6.58927V9.66194H9.14061L9.53235 6.68872H6.58927V4.79028C6.58927 3.93649 6.8203 3.34385 8.05579 3.34385H9.6328V0.69207Z"
        fill={fillColor || "#12305B"}
      />
    </svg>
  );
};

export default Facebook;
