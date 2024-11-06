import React from "react";

interface ButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  color?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  text?: string;
  icon?: React.ReactNode;
  iconLeft?: boolean;
  iconRight?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  bgColor,
  color,
  className,
  type,
  onClick,
  text,
  icon,
  iconLeft,
  iconRight,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`${bgColor ? bgColor : "bg-secondary"} ${
        color ? color : "text-white"
      } ${width ? `${width}` : " w-28 md:w-[125px] lg:w-[225px]"} ${
        height ? `${height}` : "h-12 lg:h-[50px]"
      } flex items-center justify-center ${
        icon && "gap-2"
      } rounded-[5px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && icon}
      {text}
      {iconRight && icon}
    </button>
  );
};

export default Button;
