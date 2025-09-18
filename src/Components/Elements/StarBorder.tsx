import "../../Styles/main.scss";

import React from "react";

type StarBorderProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "className" | "color" | "speed" | "thickness" | "children"
>;

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "black",
  speed = "5s",
  thickness = 2,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
