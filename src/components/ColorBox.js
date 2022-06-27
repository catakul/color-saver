import { useState } from "react";
import "./ColorBox.css";

export const ColorBox = ({ color, onDelete, onChange }) => {
  const [message, setMessage] = useState(null);

  const handleClick = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setMessage("Copied!");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      })
      .catch((err) => {
        setMessage("Copy failed :-(");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
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
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
      <div
        className="color-box__delete"
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
      >
        X
      </div>
      {message ? (
        <div className="color-box__message">{message}</div>
      ) : undefined}
    </div>
  );
};
