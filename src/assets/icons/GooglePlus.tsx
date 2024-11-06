import React from "react";
import { IconProps } from "../../types";

const GooglePlus: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
  className,
}) => {
  return (
    <svg
      className={className}
      width={width || "24"}
      height={height || "15"}
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9342 7.74222C14.9342 7.26008 14.8839 6.88843 14.8136 6.51678H7.86272V9.04803H12.0413C11.8705 10.1228 10.7757 12.2221 7.86272 12.2221C5.35156 12.2221 3.30245 10.1429 3.30245 7.57146C3.30245 5.00004 5.35156 2.92079 7.86272 2.92079C9.29911 2.92079 10.2534 3.53352 10.7958 4.05584L12.7946 2.13731C11.5089 0.931955 9.85156 0.20874 7.86272 0.20874C3.79464 0.20874 0.5 3.50338 0.5 7.57146C0.5 11.6395 3.79464 14.9342 7.86272 14.9342C12.1116 14.9342 14.9342 11.9509 14.9342 7.74222ZM23.6429 6.51678H21.5435V4.41745H19.4342V6.51678H17.3348V8.62615H19.4342V10.7255H21.5435V8.62615H23.6429V6.51678Z"
        fill={fillColor || "#12305B"}
      />
    </svg>
  );
};

export default GooglePlus;