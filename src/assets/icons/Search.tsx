import React from "react";
import { IconProps } from "../../types";

const Search: React.FC<IconProps> = ({
  width,
  height,
  strokeColor,
  className,
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5002 17.5L13.881 13.8808M13.881 13.8808C14.5001 13.2617 14.9912 12.5268 15.3262 11.7179C15.6612 10.9091 15.8337 10.0422 15.8337 9.16666C15.8337 8.29115 15.6612 7.42422 15.3262 6.61537C14.9912 5.80651 14.5001 5.07156 13.881 4.45249C13.2619 3.83342 12.527 3.34234 11.7181 3.0073C10.9093 2.67226 10.0423 2.49982 9.16684 2.49982C8.29134 2.49982 7.42441 2.67226 6.61555 3.0073C5.80669 3.34234 5.07174 3.83342 4.45267 4.45249C3.2024 5.70276 2.5 7.3985 2.5 9.16666C2.5 10.9348 3.2024 12.6305 4.45267 13.8808C5.70295 15.1311 7.39868 15.8335 9.16684 15.8335C10.935 15.8335 12.6307 15.1311 13.881 13.8808Z"
        stroke={strokeColor || "#2C3E50"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
