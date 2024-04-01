const form = document.getElementById("form");
const nameField = document.getElementById("nameField");
const companyNameField = document.getElementById("CompanyNameField");
const emailField = document.getElementById("emailField");
const submitBtn = document.querySelector('input[type="submit"]');

form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    checkInput(); 
});

function checkInput(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nameField.value.trim() === "" ) {
        alert( "Please provide your name!" );
        nameField.focus();
        return false;
    }

    if(companyNameField.value.trim() === "" ) {
        alert( "Please provide the company name!" );
        companyNameField.focus();
        return false;
    }

    // Validate email
    if (!emailPattern.test(emailField.value.trim())) {
        alert( "Please provide your email!" );
        emailField.focus();
        return false;
    }

    alert('Form submitted successfully!');
}
