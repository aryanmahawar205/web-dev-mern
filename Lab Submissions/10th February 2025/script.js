document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let floatNumber = document.getElementById("floatNumber").value;
    let alphanumeric = document.getElementById("alphanumeric").value;
    let password = document.getElementById("password").value;
    let errorMessage = "";

    if (!/^[A-Za-z]+$/.test(name)) {
        errorMessage += "Name should contain only letters.\n";
    }

    if (!/^\d+$/.test(age)) {
        errorMessage += "Age should contain only numbers.\n";
    }

    if (!/^\d+(\.\d+)?$/.test(floatNumber)) {
        errorMessage += "Enter a valid floating number.\n";
    }

    if (!/^[A-Za-z0-9]+$/.test(alphanumeric)) {
        errorMessage += "Only letters and numbers allowed.\n";
    }

    if (password.length < 8) {
        errorMessage += "Password must be at least 8 characters long.\n";
    }

    let errorElement = document.getElementById("error-message");
    if (errorMessage) {
        errorElement.innerText = errorMessage;
    } else {
        errorElement.innerText = "Form submitted successfully!";
    }
});