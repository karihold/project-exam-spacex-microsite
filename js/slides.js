//The images displayed in the slider.
const slideImages = [
    {
        path: './images/lifeonmars.jpg',
        alt: 'life on mars',
        title: "Mars Entry",
        text: [
            "Starship will enter the Mars atmosphere at 7.5 kilometers per second and decelerate aerodynamically. The vehicle’s heat shield is designed to withstand multiple entries, but given that the vehicle is coming into the Mars atmosphere so hot, we still expect to see some ablation of the heat shield (similar to wear and tear on a brake pad). The engineering videos below simulate the physics of Mars entry for Starship. With Starship and Super Heavy, most of what people consider to be long distance trips would be completed in less than half an hour. In addition to vastly increased speed, one great benefit about traveling in space, outside of Earth’s atmosphere, is the lack of friction as well as turbulence and weather. Consider how much time we currently spend traveling from one place to another. Now imagine most journeys taking less than 30 minutes, with access to anywhere in the world in an hour or less."
        ]
    },
    {
        path: './images/first_reflight.jpg',
        alt: 'first reflight',
        title: "The Possibility of Life on Mars",
        text: [
            "The possibility of life on mars has long been of significant interest in the world of astrobiology and science fiction. Mainly because of the fact that mars has may similarities to Earth. To date no proof of previous life on mars has been found. Cumulative evidence shows that during the ancient Noachian time period, the surface environment of Mars had liquid water and may have been habitable for microorganisms. The existence of habitable conditions does not necessarily indicate the presence of life.The search for life on mars started in the 19th century, and they continue all the way up to today, mainly through telescopic investigations and deployed probes. The focus as of late has been on the search for water, chemical biosignatures in the soil and rocks at the planet's surface, and biomarker gases in the atmosphere.",
            "Mars is of particular interest for the study of the origins of life because of its similarity to the early Earth. This is especially so since Mars has a cold climate and lacks plate tectonics or continental drift, so it has remained almost unchanged since the end of the Hesperian period. At least two-thirds of Mars's surface is more than 3.5 billion years old, and Mars may thus hold the best record of the prebiotic conditions leading to abiogenesis, even if life does not or has never existed there."
        ]
    },
    {
        path: './images/artificial-intelligence-astronomy.jpg',
        alt: 'Artificial intelligence on mars',
        title: "Survival Under Simulated Mars Conditions",
        text: [
            "On 26 April 2012, scientists reported that an extremophile lichen survived and showed remarkable results on the adaptation capacity of photosynthetic activity within the simulation time of 34 days under Martian conditions in the Mars Simulation Laboratory (MSL) maintained by the German Aerospace Center (DLR).The ability to survive in an environment is not the same as the ability to thrive, reproduce, and evolve in that same environment, necessitating further study. Although numerous studies point to resistance to some of Mars conditions, they do so separately, and none has considered the full range of Martian surface conditions, including temperature, pressure, atmospheric composition, radiation, humidity, oxidizing regolith, and others, all at the same time and in combination.[230] Laboratory simulations show that whenever multiple lethal factors are combined, the survival rates plummet quickly."
        ]
    },
    {
        path: './images/MarsGroundHabitat.jpg',
        alt: 'mars ground habitat',
        title: "Human Colonizations on Mars",
        text: [
            "The surface conditions on mars and the findings in regard to liquid water suggests Mars is the most hospitable planet in the solar system besides earth. However, the surface is not hospitable to humans or most known life forms due to the radiation, greatly reduced air pressure, and an atmosphere with only 0.1% oxygen.Human survival on Mars would require living in artificial Mars habitats with complex life-support systems. One key aspect of this would be water processing systems. Being made mainly of water, a human being would die in a matter of days without it. Mars presents a hostile environment for human habitation."
        ]
    },
    {
        path: './images/Martian_habitat_with_colonists.jpg',
        alt: 'mars habitat with colonists',
        title: "Long term exploration",
        text: [
            "Different technologies have been developed to assist long-term space exploration and may be adapted for habitation on Mars. Due to higher levels of radiation, there are a multitude of physical side-effects that must be mitigated.Martian soil also contains high levels of toxins which are hazardous to human health.The difference in gravity would negatively affect human health by weakening bones and muscles. There is also risk of osteoporosis and cardiovascular problems."
        ]
    },
];

const slide = document.querySelector('.slide');
const numberText = document.querySelector('.number-text');
const sliderText = document.querySelector('.slides-text-section');
const sliderTitle = document.querySelector('.slides-h2');
const amountOfSlides = slideImages.length;
const lastSlideIndex = (amountOfSlides - 1);
const thumbnails = document.querySelector('.thumbnails');

const next = document.querySelector('.nextButton');
const prev = document.querySelector('.prevButton');

let slideIndex = 0;

initThumbnails();
getSlideImage(slideImages[0]);

//Next button eventlistner
next.addEventListener('click', function () {

    //Checks if the currentSlideIndex is not the same as the lastSlideIndex
    (slideIndex !== lastSlideIndex) ? slideIndex++ : slideIndex = 0;

    const slideToShow = slideImages[slideIndex];

    getSlideImage(slideToShow);

});

//Prev-button eventlistner
prev.addEventListener('click', function () {

    (slideIndex !== 0) ? slideIndex-- : slideIndex = lastSlideIndex;

    const slideToShow = slideImages[slideIndex];

    getSlideImage(slideToShow);

});

//Slider specific functions
function getSlideImage(slideImage) {

    //Chekcs if the image slider allready contains, and then removes it
    if (slide.lastChild.className === 'image-slide') slide.removeChild(slide.lastChild);

    const slideImageElement = getSlideImageElement(slideImage);

    slide.appendChild(slideImageElement);

    sliderTitle.innerText = slideImage.title;

    //Checks if the slider contains any text, removes the previous text if it does exist.
    if (sliderText.lastChild.className === 'slides-p') {
        //Remove prevois text
        while (sliderText.lastChild.className === 'slides-p') {
            sliderText.removeChild(sliderText.lastChild);
        }

    }

    slideImage.text.forEach(text => {
        const textElement = getImageTextElement(text);
        sliderText.appendChild(textElement);
    });

    numberText.innerText = `${slideImages.indexOf(slideImage) + 1} / ${amountOfSlides}`;

}

function getSlideImageElement(image) {
    const imageElement = document.createElement('img');

    imageElement.className = 'image-slide';

    imageElement.src = image.path;

    imageElement.alt = image.alt;

    return imageElement;
}

function getImageTextElement(text) {

    const textElement = document.createElement('p');

    textElement.className = 'slides-p';

    textElement.innerText = text;

    return textElement;

}

function initThumbnails() {

    let idx = 0;

    for (idx; idx < amountOfSlides; idx++) {

        const slideImage = slideImages[idx];
        const thumbnail = document.createElement('img');

        thumbnail.className = 'thumbnail';
        thumbnail.src = slideImage.path;
        thumbnail.alt = slideImage.alt;
        thumbnail.tabIndex = '0';

        //Adds the active class on the first thumbnail element.
        if (idx === 0) {
            thumbnail.classList.add('active');
        }

        thumbnail.addEventListener('click', function (event) {
            onThumbnailClick(event, slideImage);
        });

        thumbnail.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                onThumbnailClick(event, slideImage);
            }
        });

        thumbnails.appendChild(thumbnail);

    }

}

function onThumbnailClick(event, slide) {
    const clickedElement = event.target;
    const activeElement = thumbnails.querySelector('.active');

    if (activeElement) {
        activeElement.classList.remove('active');
    }

    clickedElement.classList.add('active');

    getSlideImage(slide);
}
