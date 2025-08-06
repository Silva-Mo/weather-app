const createDropdownElement = (arrayOfElements, container) => {
    while (container.firstElementChild){
        container.removeChild(container.firstElementChild);
    }

    for (let index = 0; index < arrayOfElements.length; index++) {
        const option = document.createElement('div');

        option.classList.add(`option-${arrayOfElements[index]}`);
        option.textContent = arrayOfElements[index];
        option.setAttribute('data-num', [index]);

        container.appendChild(option);
    }

    container.classList.toggle("visible")
};

export {createDropdownElement};