import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ColorBox } from "./components/ColorBox";
import { ColorForm } from "./components/ColorForm";

function App() {
  const [colors, setColors] = useState([]);

  const handleAddColor = (code) => {
    setColors([{ id: nanoid(), code }, ...colors]);
  };

  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <div className="App">
      <h1>Color Saver Step 6</h1>
      <small>Delete color feature</small>
      <ColorForm onSubmit={handleAddColor} />
      <div className="card-grid">
        {colors.map((color) => {
          return (
            <ColorBox
              color={color.code}
              key={color.id}
              onDelete={() => {
                handleDeleteColor(color.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
