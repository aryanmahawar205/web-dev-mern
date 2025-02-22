function changeBackgroundColor() {
  const selectedColor = document.querySelector('input[name="color"]:checked').value;
  document.body.style.backgroundColor = selectedColor;
}

document.getElementById('showContent').addEventListener('change', function() {
  const content = document.getElementById('content');
  if (this.checked) {
      content.style.display = 'block';
  } else {
      content.style.display = 'none';
  }
});

function convertToUppercase() {
  const text = document.getElementById('textToUppercase').value;
  document.getElementById('textToUppercase').value = text.toUpperCase();
}

function reverseText() {
  const text = document.getElementById('textToReverse').value;
  document.getElementById('textToReverse').value = text.split('').reverse().join('');
}

function checkInputLength() {
  const text = document.getElementById('minLengthText').value;
  const error = document.getElementById('lengthError');
  if (text.length < 10) {
      error.innerText = 'Input must be at least 10 characters long.';
  } else {
      error.innerText = '';
  }
}

document.getElementById('productSelect').addEventListener('change', function() {
  const price = this.value;
  document.getElementById('productPrice').innerText = `Price: $${price}`;
});