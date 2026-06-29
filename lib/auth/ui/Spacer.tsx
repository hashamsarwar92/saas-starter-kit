import React from "react";

type SpacerProps = {
  size?: string; // e.g. "4", "8", "16", "1rem", "20px"
  direction?: "horizontal" | "vertical";
  className?: string;
};

const Spacer: React.FC<SpacerProps> = ({
  size = "16px",
  direction = "vertical",
  className = "",
}) => {
  const style =
    direction === "vertical"
      ? { height: size, width: "100%" }
      : { width: size, height: "100%" };

  return <div style={style} className={className} />;
};

export default Spacer;