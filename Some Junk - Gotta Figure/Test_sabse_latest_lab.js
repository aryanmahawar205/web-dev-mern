import React, { useState } from 'react';

// Exercise 1: Add 2 numbers using hook (useState) and input validation
const AddNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!num1 || !num2) {
      setError('Both numbers are required');
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return;
    }
    setError('');
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleAdd}>Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>Result: {result}</p>}
    </div>
  );
};

// Exercise 2: Count the number of vowels and consonants in a string
const CountLetters = () => {
  const [inputString, setInputString] = useState('');
  const [vowels, setVowels] = useState(0);
  const [consonants, setConsonants] = useState(0);

  const handleCount = () => {
    const vowelsCount = (inputString.match(/[aeiouAEIOU]/g) || []).length;
    const consonantsCount = inputString.replace(/[^a-zA-Z]/g, '').length - vowelsCount;
    setVowels(vowelsCount);
    setConsonants(consonantsCount);
  };

  return (
    <div>
      <h2>Count Vowels and Consonants</h2>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={handleCount}>Count</button>
      <p>Vowels: {vowels}</p>
      <p>Consonants: {consonants}</p>
    </div>
  );
};

// Exercise 3: Find factorial of a number using hook (useState)
const Factorial = () => {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState('');

  const calculateFactorial = () => {
    let num = parseInt(number);
    if (isNaN(num) || num < 0) {
      setFactorial('Please enter a valid non-negative number');
      return;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    setFactorial(result);
  };

  return (
    <div>
      <h2>Find Factorial</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={calculateFactorial}>Calculate</button>
      {factorial && <p>Factorial: {factorial}</p>}
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <h1>React Exercises</h1>
      <AddNumbers />
      <CountLetters />
      <Factorial />
    </div>
  );
};

export default App;