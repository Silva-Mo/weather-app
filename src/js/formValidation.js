const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const countryInput = document.querySelector('select#country');
const zipcodeInput = document.querySelector('input#postal-code');
const passwordInput = document.querySelector('input#password');
const passwordConfirmInput = document.querySelector('input#password-confirm');
const submitBtn = document.querySelector('button[type="submit"]');

const arrayOfInputs = [emailInput, countryInput, zipcodeInput, passwordInput, passwordConfirmInput]

submitBtn.addEventListener("click", (e) => {
    if (!form.checkValidity() || !confirmPassword(passwordInput.value, passwordConfirmInput.value)){
        e.preventDefault();
        showError();
    }
    else {
        e.preventDefault()
        alert('Wow yeah, now all your info has been stolen and will be sold to the pink web')
    }
})

arrayOfInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.id === "email"){
            showEmailError(input);
        }
        else if (input.id === 'country'){
            showCountrySelectionError(input);
        }
        else if (input.id === 'postal-code'){
            showZipcodeError(input);
        }
        else if (input.id === "password"){
            showPasswordError(input);
        }
        else if (input.id == "password-confirm"){
            showPasswordConfirmationError(input);
        }
    })
})

const showError = () => {
    arrayOfInputs.forEach((input) => {
        console.log(input.id);
        if (input.id === "email"){
            showEmailError(input);
        }
        else if (input.id === 'country'){
            showCountrySelectionError(input);
        }
        else if (input.id === 'postal-code'){
            showZipcodeError(input);
        }
        else if (input.id === "password"){
            showPasswordError(input);
        }
        else if (input.id == "password-confirm"){
            showPasswordConfirmationError(input);
        }
    })
}

const showEmailError = (input) => {
    spanElement = document.querySelector(`#${input.id} + span`);
    if (input.validity.valid){
        spanElement.textContent = "";
        return;
    }
    else {
        if (input.validity.valueMissing){
            spanElement.textContent = "Value is Missing lol";
        }
        else if (input.validity.tooLong){
            spanElement.textContent = "Value is too long lol";
        }
        else if (input.validity.tooShort){
            spanElement.textContent = "Value is too short lol";
        }
        else if (input.validity.typeMismatch){
            spanElement.textContent = "This wasn't an email lol";
        }
        else {
            spanElement.textContent = "IDK what to say atp";
        }
    }
}

const showCountrySelectionError  = (input) => {
    spanElement = document.querySelector(`#${input.id} + span`);
    if (input.validity.valid){
        spanElement.textContent = "";
        return;
    }
    else {
        if (input.validity.valueMissing){
            spanElement.textContent = "Select a country lol";
        }
        else if (input.validity.tooLong){
            spanElement.textContent = "Value is too long lol";
        }
        else if (input.validity.tooShort){
            spanElement.textContent = "Value is too short lol";
        }
        else if (input.validity.typeMismatch){
            spanElement.textContent = "This wasn't a country lol";
        }
        else {
            spanElement.textContent = "IDK what to say atp";
        }
    }
}

const showZipcodeError = (input) => {
    spanElement = document.querySelector(`#${input.id} + span`);
    if (input.validity.valid){
        spanElement.textContent = "";
        return;
    }
    else {
        if (input.validity.valueMissing){
            spanElement.textContent = "Lol, where is your postal zip code or whatever is it?";
        }
        else if (input.validity.tooLong){
            spanElement.textContent = "Value is too long lol";
        }
        else if (input.validity.tooShort){
            spanElement.textContent = "Value is too short lol";
        }
        else if (input.validity.typeMismatch){
            spanElement.textContent = "This wasn't a zip code lol";
        }
        else if (input.validity.patternMismatch){
            spanElement.textContent = "This wasn't a zip code lol";
        }
        else {
            spanElement.textContent = "IDK what to say atp";
        }
    }
}

const showPasswordError = (input) => {
    spanElement = document.querySelector(`#${input.id} + span`);
    if (input.validity.valid){
        spanElement.textContent = "";
        return;
    }
    else{
        if (input.validity.valueMissing){
            spanElement.textContent = "Come on! you can't submit without a password lol";
        }
        else if (input.validity.tooLong){
            spanElement.textContent = "Value is too long lol";
        }
        else if (input.validity.tooShort){
            spanElement.textContent = "Value is too short lol";
        }
        else if (input.validity.patternMismatch){
            spanElement.textContent = "Try to have a better password, be smart lol!";
        }
        else {
            spanElement.textContent = "IDK what to say atp";
        }
    }
}

const showPasswordConfirmationError = (input) => {
    spanElement = document.querySelector(`#${input.id} + span`);
    if (input.validity.valid && confirmPassword(passwordInput, input)){
        spanElement.textContent = "";
        input.style.outline = '2px solid green';
        return;
    }
    else {
        if (!confirmPassword(passwordInput, input)){
        input.style.outline = '2px solid red';
        spanElement.textContent = "doesn't Match";    
        }
        else if (input.validity.valueMissing){
            spanElement.textContent = "You gotta write your password again I guess lol";
        }
    }
}

const confirmPassword = (originalInput, confirmInput) => {
    console.log(originalInput.value, confirmInput.value)
    if (originalInput.value === confirmInput.value){
        return true;
    }
    else {
        false;
    }
}