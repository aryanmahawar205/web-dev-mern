// Exercise 1: Convert to Uppercase
function convertToUppercase() {
    var textArea = document.getElementById('uppercase-input');
    textArea.value = textArea.value.toUpperCase();
  }
  
  // Exercise 2: Reverse the Text
  function reverseText() {
    var textArea = document.getElementById('reverse-input');
    textArea.value = textArea.value.split('').reverse().join('');
  }
  
  // Exercise 3: Validate Input Length
  function validateInput() {
    var textArea = document.getElementById('validate-input');
    var errorMessage = document.getElementById('error-message');
    
    if (textArea.value.length < 10) {
      errorMessage.textContent = "Error: The input must be at least 10 characters long.";
      return false; // Prevent form submission
    } else {
      errorMessage.textContent = "";
      return true; // Allow form submission
    }
  }
  
  // Exercise 4: Product Price Calculator
  const productSelect = document.getElementById('product-select');
  const priceDisplay = document.getElementById('price-display');
  
  // Function to display price based on selection
  productSelect.addEventListener('change', function() {
    const selectedOption = productSelect.value;
    const [product, price] = selectedOption.split('-');
    priceDisplay.textContent = `Price: $${price}`;
  });
  
  // Exercise 5: Arrow Function Example (Doubling the number)
  const doubleNumber = () => {
    const numberInput = document.getElementById('number-input').value; // Get input value
    const resultDisplay = document.getElementById('result'); // Get the result element
    
    // Check if input is a valid number
    if (numberInput) {
      const doubledValue = numberInput * 2; // Double the number using an arrow function
      resultDisplay.textContent = `Doubled Value: ${doubledValue}`; // Display the result
    } else {
      resultDisplay.textContent = "Please enter a valid number."; // Handle empty input
    }
  };
  