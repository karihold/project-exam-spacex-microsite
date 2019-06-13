const contactForm = document.querySelector('#contact-form');
const contactFormInputs = getFormInputs(contactForm);

contactForm.addEventListener('submit', function (event) {
    const isFormValid = validateForm(event, contactFormInputs);

    if (isFormValid) {
        contactForm.submit();
    }
});
