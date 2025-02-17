function validation() {
    var empid = document.forms["application"]["empid"].value;
    var fname = document.forms["application"]["fname"].value;
    var mname = document.forms["application"]["mname"].value;
    var lname = document.forms["application"]["lname"].value;
    var age   = document.forms["application"]["age"].value;
    var phone = document.forms["application"]["phone"].value;
    var addr  = document.forms["application"]["addr"].value;
    var pwd   = document.forms["application"]["pwd"].value;
    var cpwd  = document.forms["application"]["cpwd"].value;
    if(empid === ""){
        alert("Emp ID must be filled out");
        return false;
    }
    if(fname === ""){
        alert("First Name must be filled out");
        return false;
    }
    if(mname === ""){
        alert("Middle Name must be filled out");
        return false;
    }
    if(lname === ""){
        alert("Last Name must be filled out");
        return false;
    }
    if(age === ""){
        alert("Age must be filled out");
        return false;
    }
    if(phone === ""){
        alert("Phone Number must be filled out");
        return false;
    }
    if(addr === ""){
        alert("Address must be filled out");
        return false;
    }
    if(pwd === ""){
        alert("Password must be filled out");
        return false;
    }
    if(cpwd === ""){
        alert("Confirm Password must be filled out");
        return false;
    } 
    if (isNaN(empid)) {
        alert("Emp ID must be a number");
        return false;
    }
    var nameRegEx = /^[A-Za-z]+$/;
    if (!nameRegEx.test(fname) || !nameRegEx.test(mname) || !nameRegEx.test(lname)) {
        alert("Names must contain only letters");
        return false;
    }
    if (isNaN(age) || !/^\d{2}$/.test(age)) {
        alert("Age must be exactly two digits");
        return false;
    }
    var phoneRegEx = /^(?:\+91|91|975)\d{10}$/;
    if (!phoneRegEx.test(phone)) {
        alert("Invalid phone number. It must have a code +91, 91, or 975 followed by 10 digits.");
        return false;
    }
    if (pwd.length < 7 || pwd.length > 10) {
        alert("Password must be between 7 to 10 characters");
        return false;
    }
    if (pwd !== cpwd) {
        alert("Passwords do not match. Try again!");
        return false;
    }
    alert("Form submitted successfully!!!");
    return true;
}