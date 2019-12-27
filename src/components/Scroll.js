import React from "react";

const Scroll = props => {
  return (
    <div
      style={{ overflowY: "scroll", height: "900px", border: "1px solid #000" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
