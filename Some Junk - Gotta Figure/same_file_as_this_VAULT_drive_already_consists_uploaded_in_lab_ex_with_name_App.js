import React, { useState } from "react";
import "./index.css"; // Import your CSS file

function App() {
  // States for various operations
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");  // Added num3 as state
  const [maxNumber, setMaxNumber] = useState(null);
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [simpleInterest, setSimpleInterest] = useState(null);
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [result, setResult] = useState(null);
  const [num, setNum] = useState("");
  const [isArmstrong, setIsArmstrong] = useState(null);
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [manipulatedString, setManipulatedString] = useState("");

  // Functions for different operations
  
  // Find max among 3 numbers
  const findMax = () => {
    const max = Math.max(Number(num1), Number(num2), Number(num3));  // Use num3 here
    setMaxNumber(max);
  };

  // Calculate simple interest
  const calculateInterest = () => {
    const SI = (Number(principal) * Number(rate) * Number(time)) / 100;
    setSimpleInterest(SI);
  };

  // Handle simple calculator
  const handleCalculation = (operation) => {
    const a = Number(numA);
    const b = Number(numB);
    let res;
    if (operation === "add") res = a + b;
    if (operation === "subtract") res = a - b;
    if (operation === "multiply") res = a * b;
    if (operation === "divide") res = a / b;
    setResult(res);
  };

  // Check Armstrong number
  const checkArmstrong = () => {
    const numStr = num.toString();
    const numLength = numStr.length;
    const sum = numStr
      .split("")
      .reduce((acc, digit) => acc + Math.pow(Number(digit), numLength), 0);
    setIsArmstrong(sum === Number(num));
  };

  // String manipulation functions
  const handleStringManipulation = (operation) => {
    switch (operation) {
      case "concatenate":
        setManipulatedString(str1 + str2);
        break;
      case "toUpperCase":
        setManipulatedString(str1.toUpperCase());
        break;
      case "toLowerCase":
        setManipulatedString(str1.toLowerCase());
        break;
      case "slice":
        setManipulatedString(str1.slice(0, 5)); // Example slice to first 5 characters
        break;
      case "split":
        setManipulatedString(str1.split(" ").join(", ")); // Split by space and join with comma
        break;
      case "startsWith":
        setManipulatedString(str1.startsWith(str2) ? "True" : "False");
        break;
      case "endsWith":
        setManipulatedString(str1.endsWith(str2) ? "True" : "False");
        break;
      case "reverse":
        setManipulatedString(str1.split("").reverse().join(""));
        break;
      default:
        setManipulatedString("Invalid operation");
        break;
    }
  };

  return (
    <div className="app-container">
      {/* Maximum of 3 Numbers */}
      <div className="max-container">
        <h2>Find Maximum of 3 Numbers</h2>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter third number"
          value={num3}
          onChange={(e) => setNum3(e.target.value)} // Bind num3 state here
        />
        <button onClick={findMax}>Find Maximum</button>
        {maxNumber !== null && <p>Maximum: {maxNumber}</p>}
      </div>

      {/* Simple Interest Calculation */}
      <div className="interest-container">
        <h2>Simple Interest Calculation</h2>
        <input
          type="number"
          placeholder="Enter principal amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter rate of interest"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter time in years"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={calculateInterest}>Calculate Interest</button>
        {simpleInterest !== null && <p>Simple Interest: {simpleInterest}</p>}
      </div>

      {/* Simple Calculator */}
      <div className="calculator-container">
        <h2>Simple Calculator</h2>
        <input
          type="number"
          placeholder="Enter first number"
          value={numA}
          onChange={(e) => setNumA(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={numB}
          onChange={(e) => setNumB(e.target.value)}
        />
        <div className="buttons-container">
          <button onClick={() => handleCalculation("add")}>Add</button>
          <button onClick={() => handleCalculation("subtract")}>Subtract</button>
          <button onClick={() => handleCalculation("multiply")}>Multiply</button>
          <button onClick={() => handleCalculation("divide")}>Divide</button>
        </div>
        {result !== null && <p>Result: {result}</p>}
      </div>

      {/* Armstrong Number Check */}
      <div className="armstrong-container">
        <h2>Armstrong Number Check</h2>
        <input
          type="number"
          placeholder="Enter number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={checkArmstrong}>Check</button>
        {isArmstrong !== null && (
          <p>{isArmstrong ? "It is an Armstrong number!" : "Not an Armstrong number!"}</p>
        )}
      </div>

      {/* String Manipulation Section */}
      <div className="string-manipulation-container">
        <h2>String Manipulations</h2>
        <input
          type="text"
          placeholder="Enter first string"
          value={str1}
          onChange={(e) => setStr1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter second string"
          value={str2}
          onChange={(e) => setStr2(e.target.value)}
        />
        <div className="buttons-container">
          <button onClick={() => handleStringManipulation("concatenate")}>Concatenate</button>
          <button onClick={() => handleStringManipulation("toUpperCase")}>Upper Case</button>
          <button onClick={() => handleStringManipulation("toLowerCase")}>Lower Case</button>
          <button onClick={() => handleStringManipulation("slice")}>Slice (First 5)</button>
          <button onClick={() => handleStringManipulation("split")}>Split</button>
          <button onClick={() => handleStringManipulation("startsWith")}>Starts With</button>
          <button onClick={() => handleStringManipulation("endsWith")}>Ends With</button>
          <button onClick={() => handleStringManipulation("reverse")}>Reverse</button>
        </div>
        {manipulatedString && <p>Result: {manipulatedString}</p>}
      </div>
    </div>
  );
}

export default App;
