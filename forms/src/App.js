import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    normal: "por defecto",
    text: "",
    select: "",
    check: false,
    estado:'super'
  });
  const handleChange = ({target}) => {
    console.log(target.type, target.checked);
    setValue((state) => ({
      ...state,
      [target.name]:
       target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <div className="App">
      {value.length < 5 ? <span>La longitud minima </span> : null}
      <br></br>
      <br></br>
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <textarea name="text" value={value.text} onChange={handleChange} />
      <br></br>
      <br></br>
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="feliz">--Feliz--</option>
        <option value="triste">--Triste--</option>
        <option value="enfadado">--Enfadado--</option>
      </select>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
      <br></br>
      <div>
        <label>Estado:</label>
      <input  onChange={handleChange} type="radio" value='super' name="estado" checked={value.estado === 'super'} />Super

      <input  onChange={handleChange} type="radio" value='feliz' name="estado" checked={value.estado === 'feliz'} />Feliz

      <input  onChange={handleChange} type="radio" value='triste' name="estado" checked={value.estado === 'triste'} />Triste
      </div>
    </div>
  );
}

export default App;
