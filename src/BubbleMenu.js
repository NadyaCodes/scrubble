import React from "react";

export default function BubbleMenu() {
  return (
    <div className="bubble-menu">
      <div
        className="large-bubble bubble"
        onClick={() => alert("Large clicked")}
      ></div>
      <div
        className="medium-bubble bubble"
        onClick={() => alert("Medium clicked")}
      ></div>
      <div
        className="small-bubble bubble"
        onClick={() => alert("Small clicked")}
      ></div>
    </div>
  );
}
