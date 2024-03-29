const form = document.getElementById("form");
const nameField = document.getElementById("nameField");
const companyNameField = document.getElementById("companyNameField");
const emailField = document.getElementById("emailField");
const submitBtn = document.querySelector('input[type="submit"]');
const validationSquare =  document.getElementById("square");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput(){
    const nameValue = nameField.value.trim()
    const companyValue = companyNameField.value.trim()
    const emailValue = emailField.value.trim()
}
