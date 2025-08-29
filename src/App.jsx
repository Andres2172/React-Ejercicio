import React, { useState } from 'react';
import './App.css'; // Puedes agregar estilos aquí

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      // Evalúa la expresión (¡usar con precaución!)
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">= {result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', 
          '4', '5', '6', '*', 
          '1', '2', '3', '-', 
          '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === '=' ? handleEqual() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default App;

