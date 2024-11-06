import React from "react";
import { IconProps } from "../../types";

const Star: React.FC<IconProps> = ({ width, height, fillColor, className }) => {
  return (
    <svg
      className={className}
      width={width || "12"}
      height={height || "11"}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
        fill={fillColor || "#27AE60"}
      />
    </svg>
  );
};

export default Star;