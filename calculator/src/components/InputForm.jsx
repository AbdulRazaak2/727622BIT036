import React, { useState } from "react";
import { getNumbers } from "./NumberService";

const InputForm = ({ setResult }) => {
  const [inputId, setInputId] = useState("p");

  const handleFetch = async () => {
    try {
      const data = await getNumbers(inputId.toLowerCase());
      setResult(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="input-form">
      <label htmlFor="id-select">Select Number Type:</label>
      <select
        id="id-select"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      >
        <option value="p">Prime Numbers</option>
        <option value="f">Fibonacci Numbers</option>
        <option value="e">Even Numbers</option>
        <option value="r">Random Numbers</option>
      </select>
      <button onClick={handleFetch}>Get Numbers</button>
    </div>
  );
};

export default InputForm;
