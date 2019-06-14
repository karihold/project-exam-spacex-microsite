const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', onMenuButtonClick);

fetch('https://api.spacexdata.com/v3/info')
    .then(response => response.json())
    .then(info => createCompanyInfoMarkup(info.links))

function createCompanyInfoMarkup(links) {
    const companyInfoContainer = document.querySelector('.company-links');

    companyInfoContainer.innerHTML = `
    <li id="twitter-li">
        <a id="twitter" href=${links.twitter}></a>
    </li>
    <li>
        <a id="flickr" href=${links.flickr}></a>
    </li>
    <li>
        <a id="spacex" href=${links.website}></a>
    </li>
    `;
}

function onMenuButtonClick(event) {

    const button = event.currentTarget;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
        nav.style.display = 'block';
    } else {
        nav.removeAttribute('style');
    }
}

