const validationMessages = {
    fullName: 'This field can not be empty',
    subject: 'This field can not be empty',
    email: 'Invalid email format',
    phone: 'Invalid phone format'
}

//Validation functions
function validateForm(event, inputs) {

    event.preventDefault();

    let idx = 0;

    const amountOfInputs = inputs.length;

    let isFormValid = true;

    for (idx; idx < amountOfInputs; idx++) {

        const input = inputs[idx];
        const isValid = validateInput(input);
        const validationMessage = input.previousElementSibling;


        if (!isValid) {
            isFormValid = false;
            validationMessage.classList.add('active');
            validationMessage.innerText = validationMessages[input.name];
        } else {
            validationMessage.classList.remove('active');
            validationMessage.innerText = '';
        }

    }

    return isFormValid;

}

function validateInput(input) {
    switch (input.name) {
        case 'fullName':
        case 'subject':
            return validateText(input.value);
        case 'phone':
            return validatePhone(input.value);
        case 'email':
            return validateEmail(input.value);
        default:
            return false;

    }
}

function validateText(text) {
    return text !== '';
}

function validatePhone(phoneNumber) {

    const phonePattern = /^\+?\d/g;

    return phonePattern.test(phoneNumber);
}

function validateEmail(email) {

    const emailPattern = /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g

    return emailPattern.test(email);
}

//Element getter functions;
function getFormInputs(form) {
    const formElements = form.elements;
    const inputElements = [];

    let idx = 0;
    let numberOfInputs = formElements.length;

    //Using standard for loop, instead of forEach, since IE does not support forEach on node lists;
    for (idx; idx < numberOfInputs; idx++) {

        const input = formElements[idx];

        if ((input.tagName === 'INPUT' && (input.type !== 'submit' && input.type !== 'checkbox')) || input.tagName === 'TEXTAREA') {
            inputElements.push(input);
        }
    }

    return inputElements;
}
