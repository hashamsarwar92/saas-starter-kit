import React from "react";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";

  color?: string;
  thickness?: string;

  className?: string;
};

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  color = "bg-gray-200",
  thickness = "h-px w-full",
  className = "",
}) => {
  return (
    <div
      className={`
        ${orientation === "horizontal" ? thickness : "w-px h-full"}
        ${color}
        ${className}
      `}
    />
  );
};

export default Separator;