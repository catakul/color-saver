import "./App.css";
import { ColorForm } from "./components/ColorForm";
import { ColorBox } from "./components/ColorBox";

const colors = [
  {
    id: 1,
    code: "#123456",
  },
  {
    id: 2,
    code: "#456789",
  },
  {
    id: 3,
    code: "#156728",
  },
];

function App() {
  return (
    <div className="App">
      <ColorForm />
      <div className="card-grid">
        {colors.map((color) => {
          return <ColorBox color={color.code} key={color.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
