import "../css/normalize.css";
import "../css/styles.css";
import formValidation from "../js/formValidation.js"
import {createDropdownElement} from "../js/dropdown.js"
import {moveImagesInsideContainer, moveSildesToRight, setCurrentSlideNumberValue, generateNavigationDots} from "./imageCarousel.js";


const btnOfDropdown = document.querySelector(".dropdown-menu");
const container = document.querySelector('div.dropdown')
const arrowLeft = document.querySelector('div.arrow.left');
const arrowRight = document.querySelector('div.arrow.right');
const imagesContainer = document.querySelector('div.images-container');
const navigationDotsContainer = document.querySelector('div.navigation-dots-container');

btnOfDropdown.addEventListener("click", () => {
    btnOfDropdown.classList.toggle("clicked");
    createDropdownElement(["pizza", "apple", "burger", "water", "bread", "juice", "beans"], container);
});

generateNavigationDots(imagesContainer, navigationDotsContainer);
setCurrentSlideNumberValue(imagesContainer);
moveSildesToRight(imagesContainer, 370);

arrowRight.addEventListener("click", () => {
    moveImagesInsideContainer("right", imagesContainer, 370);
});

arrowLeft.addEventListener("click", () => {
    moveImagesInsideContainer("left", imagesContainer, 370);
})
