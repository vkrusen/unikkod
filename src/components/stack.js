import * as React from "react";

const Stack = ({ vertical = true, spacing = "normal", children }) => {
  return (
    <div className={"stack " + (vertical ? "vertical" : "horizontal")}>
      {React.Children.map(children, child => (
        <div className={spacing}>{child}</div>
      ))}
    </div>
  );
};

export default Stack;
