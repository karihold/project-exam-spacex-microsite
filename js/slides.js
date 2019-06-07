const slideImages = [
    {
        path: './images/lifeonmars.jpg',
        alt: 'life on mars',
        text: 'Future living on mars'
    },
    {
        path: './images/first_reflight.jpg',
        alt: 'first reflight',
        text: 'Reflight'
    },
    {
        path: './images/artificial-intelligence-astronomy.jpg',
        alt: 'Artificial intelligence on mars',
        text: 'AI assisted living!'
    },
    {
        path: './images/MarsGroundHabitat.jpg',
        alt: 'mars ground habitat',
        text: 'Habitat on mars'
    },
    {
        path: './images/Martian_habitat_with_colonists.jpg',
        alt: 'mars habitat with colonists',
        text: 'Habitat for the future colonists!'
    },
];

const slide = document.querySelector('.slide');
const numberText = document.querySelector('.number-text');
const caption = document.querySelector('#caption')
const amountOfSlides = slideImages.length;
const lastSlideIndex = (amountOfSlides - 1);
const thumbnails = document.querySelector('#thumbnails');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let slideIndex = 0;

initThumbnails();
getSlideImage(slideImages[0]);

next.addEventListener('click', function () {

    (slideIndex !== lastSlideIndex) ? slideIndex++ : slideIndex = 0;

    const slideToShow = slideImages[slideIndex];

    getSlideImage(slideToShow);

});

prev.addEventListener('click', function () {

    (slideIndex !== 0) ? slideIndex-- : slideIndex = lastSlideIndex;

    const slideToShow = slideImages[slideIndex];

    getSlideImage(slideToShow);

});

//Slider specific functions
function getSlideImage(slideImage) {

    if (slide.lastChild.className === 'image-slide') slide.removeChild(slide.lastChild);

    const slideImageMarkup = getSlideImageMarkup(slideImage);

    slide.appendChild(slideImageMarkup);

    currenImageSlide = slideImageMarkup;

    caption.innerText = slideImage.text;

    numberText.innerText = `${slideImages.indexOf(slideImage) + 1} / ${amountOfSlides}`;

}

function getSlideImageMarkup(image) {
    const imageElement = document.createElement('img');

    imageElement.className = 'image-slide';

    imageElement.src = image.path;

    imageElement.alt = image.alt;

    return imageElement;
}

function initThumbnails() {

    let idx = 0;

    for (idx; idx < amountOfSlides; idx++) {

        const slideImage = slideImages[idx];

        const thumbnail = document.createElement('div');

        thumbnail.className = 'column-lifeonmars';

        thumbnail.innerHTML = `<img class="thumbnail" src="${slideImage.path}"  alt="${slideImage.alt}" />`;

        thumbnail.addEventListener('click', function (event) {

            const clickedElement = event.target;

            const activeElement = thumbnails.querySelector('.active');

            if (activeElement) {
                activeElement.classList.remove('active');
            }

            clickedElement.classList.add('active');

            getSlideImage(slideImage);
        });

        thumbnails.appendChild(thumbnail);

    }

}

