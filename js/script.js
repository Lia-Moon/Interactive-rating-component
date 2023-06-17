const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const opt3 = document.querySelector('.option3');
const opt4 = document.querySelector('.option4');
const opt5 = document.querySelector('.option5');

function changeButtonColorOnClick(option) {
    opt1.classList.remove('changeButtonColor');
    opt2.classList.remove('changeButtonColor');
    opt3.classList.remove('changeButtonColor');
    opt4.classList.remove('changeButtonColor');
    opt5.classList.remove('changeButtonColor');

    switch (option) {
        case 'opt1':
            opt1.classList.add('changeButtonColor');
            break;
        case 'opt2':
            opt2.classList.add('changeButtonColor');
            break;
        case 'opt3':
            opt3.classList.add('changeButtonColor');
            break;
        case 'opt4':
            opt4.classList.add('changeButtonColor');
            break;
        case 'opt5':
            opt5.classList.add('changeButtonColor');
            break;
    }
}

opt1.addEventListener("click", () => {
    changeButtonColorOnClick('opt1');
    showSelectedRating('opt1');
});

opt2.addEventListener("click", () => {
    changeButtonColorOnClick('opt2');
    showSelectedRating('opt2');
});

opt3.addEventListener("click", () => {
    changeButtonColorOnClick('opt3');
    showSelectedRating('opt3');
});

opt4.addEventListener("click", () => {
    changeButtonColorOnClick('opt4');
    showSelectedRating('opt4');
});

opt5.addEventListener("click", () => {
    changeButtonColorOnClick('opt5');
    showSelectedRating('opt5');
});

const submitButton = document.getElementById("submitButton");
const ratingState = document.querySelector(".rating__state--content");
const thankYouState = document.querySelector(".thank__you__state--content");
var ratingSelected = document.querySelector(".thank__you__state--content--rating--selected");

document.addEventListener("DOMContentLoaded", () => {
    
    function submitRating() {
    
        submitButton.addEventListener("click", () => {
            if(opt1.classList.contains('changeButtonColor') ||
            opt2.classList.contains('changeButtonColor') ||
            opt3.classList.contains('changeButtonColor') ||
            opt4.classList.contains('changeButtonColor') ||
            opt5.classList.contains('changeButtonColor')){
                ratingState.classList.add('display__none');
                thankYouState.classList.remove('display__none');
                showSelectedRating();
            } else {
                alert('Please select a rating');
            }
        })
    };

    submitRating();
})

function showSelectedRating(rating) {

    switch (rating) {
        case 'opt1':
            ratingSelected.textContent = '1';
            break;
        case 'opt2':
            ratingSelected.textContent = '2';
            break;
        case 'opt3':
            ratingSelected.textContent = '3';;
            break;
        case 'opt4':
            ratingSelected.textContent = '4';
            break;
        case 'opt5':
            ratingSelected.textContent = '5';
            break;
    }
}