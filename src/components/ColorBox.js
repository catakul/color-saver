import { useState, useEffect } from "react";
import "./ColorBox.css";

const colorEndpoint = "https://www.thecolorapi.com/id";

export const ColorBox = ({ color, onDelete, onChange }) => {
  const [message, setMessage] = useState(null);
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    const fetchColorName = async () => {
      try {
        const response = await fetch(`${colorEndpoint}?hex=${color.slice(1)}`);
        if (response.ok) {
          const data = await response.json();
          setColorName(data.name.value);
        } else {
          throw new Error(`Error: ${response.status}`);
        }
      } catch (err) {}
    };
    if (color) {
      fetchColorName();
    }
  }, [color]);

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
      <p>{colorName}</p>
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
      {message && <div className="color-box__message">{message}</div>}
    </div>
  );
};
