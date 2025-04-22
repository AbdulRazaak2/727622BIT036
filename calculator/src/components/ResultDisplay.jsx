import React from "react";

const ResultDisplay = ({ result }) => {
  return (
    <div className="result">
      <h2>📊 Results</h2>
      <p><strong>Previous State:</strong> {JSON.stringify(result.windowPrevState)}</p>
      <p><strong>Current State:</strong> {JSON.stringify(result.windowCurrState)}</p>
      <p><strong>Fetched Numbers:</strong> {JSON.stringify(result.numbers)}</p>
      <p><strong>Average:</strong> {result.avg}</p>
    </div>
  );
};

export default ResultDisplay;
