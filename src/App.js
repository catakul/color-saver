import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ColorBox } from "./components/ColorBox";
import { ColorForm } from "./components/ColorForm";

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (code) => {
    setColors([{ id: nanoid(), code }, ...colors]);
  };

  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <div className="App">
      <h1>Color Saver Step 0</h1>
      <ColorForm onSubmit={addColor} />
      <div className="card-grid">
        {colors.map((color) => {
          return (
            <ColorBox
              color={color.code}
              key={color.id}
              onDelete={() => {
                deleteColor(color.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
