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
  return (
    <div className="App">
      <h1>Color Saver Step 5</h1>
      <ColorForm onSubmit={handleAddColor} />
      <div className="card-grid">
        {colors.map((color) => {
          return <ColorBox color={color.code} key={color.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
