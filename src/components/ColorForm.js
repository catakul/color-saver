import "./ColorForm.css";
export const ColorForm = () => {
  const colorCode = "#dddddd";
  return (
    <form
      action=""
      className="color-form"
      style={{ backgroundColor: colorCode }}
    >
      <input type="color" value={colorCode} />
      <input type="text" value={colorCode} />
      <button>Create</button>
    </form>
  );
};
