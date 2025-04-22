import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1>🔢 Average Calculator Microservice</h1>
      <InputForm setResult={setResult} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
