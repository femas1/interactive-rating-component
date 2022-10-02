'use strict';

const ratingNumbers = document.querySelectorAll('.container__rating__number');

const removeActiveClasses = function() {
    ratingNumbers.forEach(number => number.classList.remove('active'));
}

ratingNumbers.forEach(number => {
    

    number.addEventListener('click', ()=> {
        removeActiveClasses();
        number.classList.toggle('active');
    })
})
