let currentSlideNumber = 0;

let widthAcc = 0;

const moveImagesInsideContainer = (arrowType, imagesContainer, widthOfSlide) => {
    const arrayOfImages = Array.from(imagesContainer.childNodes).filter((element) => { if (element.tagName === 'IMG') {return element}});
    const noOfSlides = arrayOfImages.length;
    if (arrowType === "right"){
        if(noOfSlides === currentSlideNumber){
            currentSlideNumber = 1;
            widthAcc = 0;
            selectCurrentNavigationDot(imagesContainer);
            arrayOfImages.forEach((image) => {
            image.style.transform = `translateX(0px)`;
            })
        }
        else {
            currentSlideNumber += 1;
            widthAcc -= widthOfSlide;
            selectCurrentNavigationDot(imagesContainer);
            arrayOfImages.forEach((image) => {
            image.style.transform = `translateX(${widthAcc}px)`;
            })
        }
    }
    else if (arrowType === "left"){
        if(currentSlideNumber === 1){
            currentSlideNumber = noOfSlides;
            widthAcc = (noOfSlides - 1 )* -widthOfSlide;
            selectCurrentNavigationDot(imagesContainer);
            arrayOfImages.forEach((image) => {
            image.style.transform = `translateX(${widthAcc}px)`;
            })
        }
        else{
            currentSlideNumber -= 1;
            widthAcc += widthOfSlide;
            selectCurrentNavigationDot(imagesContainer);
            arrayOfImages.forEach((image) => {
            image.style.transform = `translateX(${widthAcc}px)`;
            })    
        }
        
    }
}

const moveSildesToRight = (imagesContainer, widthOfSlide) => {
    const arrayOfImages = Array.from(imagesContainer.childNodes).filter((element) => { if (element.tagName === 'IMG') {return element}});
    const noOfSlides = arrayOfImages.length;
      if(noOfSlides === currentSlideNumber){
            currentSlideNumber = 1;
            widthAcc = 0;
            selectCurrentNavigationDot(imagesContainer);
            arrayOfImages.forEach((image) => {
            image.style.transform = `translateX(0px)`;
            })
        }
        else {
            currentSlideNumber += 1;
            widthAcc -= widthOfSlide;
            selectCurrentNavigationDot(imagesContainer);
            arrayOfImages.forEach((image) => {
            image.style.transform = `translateX(${widthAcc}px)`;
            })
        }

        setTimeout(moveSildesToRight.bind(null, imagesContainer, widthOfSlide), 5000);
}

const setCurrentSlideNumberValue = (imagesContainer) => {
    const noOfSlides = Array.from(imagesContainer.childNodes).filter((element) => { if (element.tagName === 'IMG') {return element}}).length;
    currentSlideNumber = noOfSlides;
}

const navtigateToSlideByClickingItsDot = (dot, imagesContainer, widthOfSlide) => {
    const arrayOfImages = Array.from(imagesContainer.childNodes).filter((element) => { if (element.tagName === 'IMG') {return element}});
    const targetDotNumber = dot.getAttribute('data-num');
    const difference = targetDotNumber - currentSlideNumber;
    console.log(difference);
    currentSlideNumber = Number(targetDotNumber);
    selectCurrentNavigationDot(imagesContainer);
    widthAcc += difference * -widthOfSlide;
    arrayOfImages.forEach((image) => {
            image.style.transform = `translateX(${widthAcc}px)`;
    })
}

const generateNavigationDots = (imagesContainer, containerOfNavigationDots) => {
    const noOfSlides = Array.from(imagesContainer.childNodes).filter((element) => { if (element.tagName === 'IMG') {return element}}).length;
    for (let index = 1; index < noOfSlides + 1; index++) {
        const navigationDot = document.createElement('div');
        navigationDot.classList.add('navigation-dot');
        navigationDot.setAttribute('data-num', [index])
        navigationDot.textContent = "○";
        navigationDot.addEventListener('click', () => {
            navtigateToSlideByClickingItsDot(navigationDot, imagesContainer, 370);
        })
        containerOfNavigationDots.appendChild(navigationDot);
    }
}

const filterMatchingNavigationDot = (dotsElements) => {
    return dotsElements.filter(dot => dot.getAttribute('data-num') == currentSlideNumber);
}

const selectCurrentNavigationDot = () => {
    const dotsContainer = document.querySelector('.navigation-dots-container');
    const arrayOfDots = Array.from(dotsContainer.childNodes);
    const currentDot = filterMatchingNavigationDot(arrayOfDots);
    arrayOfDots.forEach((dotElement) => {
        dotElement.textContent = "⚪";
    })
    currentDot[0].textContent = "⚫"
}




export {moveImagesInsideContainer, moveSildesToRight, setCurrentSlideNumberValue, generateNavigationDots};