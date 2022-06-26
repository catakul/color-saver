import React from "react";
import "./ColorBox.css";

export const ColorBox = ({ color }) => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        alert("Copied");
      })
      .catch((err) => {
        alert("Copy failed");
      });
  };
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
      }}
      onClick={handleClick}
    >
      <input
        type="text"
        value={color}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
      <div
        className="color-box__delete"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        X
      </div>
    </div>
  );
};
