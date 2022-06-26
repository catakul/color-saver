import "./ColorForm.css";
export const ColorForm = () => {
  return (
    <form className="color-form">
      <input type="color" />
      <input type="text" />
      <button>Add</button>
    </form>
  );
};
