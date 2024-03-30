const form = document.getElementById("form");
const nameField = document.getElementById("nameField");
const companyNameField = document.getElementById("CompanyNameField");
const emailField = document.getElementById("emailField");
const submitBtn = document.querySelector('input[type="submit"]');
const validationSquare =  document.querySelector(".square");

form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    checkInput();
    
});

function checkInput(){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(nameField.value.trim() === "" ) {
        alert( "Please provide your name!" );
        nameField.focus();
        return false;
    }

    if(companyNameField.value.trim() === "" ) {
        alert( "Please provide your name!" );
        companyNameField.focus();
        return false;
    }



     validationSquare.style.backgroundColor = "#82E79E";
     alert('Form submitted successfully!');
}
