const newsletterButton = document.querySelector('#newsletter-button');
const body = document.querySelector('body');
const modal = document.createElement('div');
const newsletterForm = getNewsLetterFormMarkup();
const newsletterFormInputs = getFormInputs(newsletterForm);
const cancelButton = newsletterForm.querySelector('.form-cancel-button');

//Initilize modal
modal.className = 'modal';
modal.appendChild(newsletterForm);

//Adding eventlistners
newsletterForm.addEventListener('submit', function (event) {
    const isValid = validateForm(event, newsletterFormInputs);

    if (isValid) {
        closeModal();
        showSubscriptionMessage();
    }
});

newsletterButton.addEventListener('click', openModal)
cancelButton.addEventListener('click', closeModal)


//Click event functions
function openModal() {
    body.style.overflow = 'hidden';
    body.insertAdjacentElement('afterbegin', modal);
}

function closeModal() {
    body.removeAttribute('style');
    body.removeChild(modal);
}

//Get Markup functions
function getNewsLetterFormMarkup() {

    const form = document.createElement('form');

    form.className = 'form';

    form.id = 'newsletter-form'

    form.setAttribute('novalidate', true);

    form.innerHTML = `
    <section class="form-header">
        <h2 class="form-title">Subscribe to our Newsletter</h2>
        <p class="form-headline">No spam, we promise</p>
    </section>
    <div class="form-inputs-container">
        <label class="form-label">Full Name <span class="validation-message"></span>
            <input type="text" placeholder="Name" name="fullName" class="form-input">
        </label>
        <label class="form-label">Email <span class="validation-message"></span>
            <input type="email" placeholder="Email address" name="email" class="form-input">
        </label>

        <label class="form-checkbox-label">
            <input type="checkbox" checked="checked" name="subscribe" class="form-checkbox">
            Weekly Newsletter
        </label>
        <label class="form-checkbox-label">
            <input type="checkbox" checked="checked" name="subscribe" class="form-checkbox">
            Agree to terms and conditions
        </label>
    </div>
    <section class="form-buttons-container">
        <input type="submit" value="Subscribe" class="form-submit-button">
        <button class="form-cancel-button">No Thanks</button>
    </section>
    `;

    return form;
}

function showSubscriptionMessage() {
    const message = document.createElement('p');

    message.className = 'subscription-message';

    message.innerText = 'Thanks for subscribing to our newsletter!';

    body.insertAdjacentElement('afterbegin', message);

    setTimeout(function () {
        body.removeChild(message);
    }, 2500);
}
