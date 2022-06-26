import React from "react";
import "./ColorBox.css";

export const ColorBox = ({ color }) => {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <input value={color} />
      <div className="color-box__delete">✕</div>
    </div>
  );
};
