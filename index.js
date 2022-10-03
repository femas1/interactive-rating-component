'use strict';

const ratingNumbers = document.querySelectorAll('.container__rating__number');
const submitBtn = document.querySelector('.container__button');
const container = document.querySelector('.container');
const containerThx = document.querySelector('.container__thanks')

const removeActiveClasses = function() {
    ratingNumbers.forEach(number => number.classList.remove('active'));
}

ratingNumbers.forEach(number => {
    number.addEventListener('click', ()=> {
        removeActiveClasses();2
        number.classList.toggle('active');
    })
})

submitBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    containerThx.classList.remove('hidden');
})