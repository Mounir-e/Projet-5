const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");



//--creation dot--//

const dotContainer = document.querySelector('.dots');
let currentSlideIndex = 0;
let dots = [];

for (let i = 0; i < slides.length; i++) {

	let dot = document.createElement("p")
	dotContainer.appendChild(dot);
	dot.classList.add('dot');
	dots.push(dot);
}

//-- Changement de slide --//

const imageBanner = document.querySelector('.banner-img');
const tagLineBanner = document.querySelector('.tagline');

currentSlideIndex = selectSlide(0, 0);


function selectSlide(newSlideIndex, oldSlideIndex) {

	if (newSlideIndex < 0) { newSlideIndex = dots.length - 1; }
	if (newSlideIndex > dots.length - 1) { newSlideIndex = 0; }

	tagLineBanner.innerHTML = slides[newSlideIndex].tagLine;
	imageBanner.src = `./assets/images/slideshow/${slides[newSlideIndex].image}`;

	dots[oldSlideIndex].classList.remove('dot_selected');
	dots[newSlideIndex].classList.add('dot_selected');

	return newSlideIndex; //on retourne l'index actualisé //

}

//-- Evenement --//

arrowright.addEventListener("click", (event) => {
	if (event.button === 0) {
		currentSlideIndex = selectSlide(currentSlideIndex + 1, currentSlideIndex);
		console.log("clic droit flèche droit");
	}
});

arrowleft.addEventListener("click", (event) => {
	if (event.button === 0) {
		currentSlideIndex = selectSlide(currentSlideIndex - 1, currentSlideIndex);
		console.log("clic gauche flèche gauche");
	}
});