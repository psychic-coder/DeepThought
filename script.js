document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('leftbody-container');
    const arrow = document.getElementById('leftbody-arrow');
    

    arrow.addEventListener('click', () => {
        if (container.style.transform === 'translateX(-500px)') {
            container.style.transform = 'translateX(-100px)';
        } else {
            container.style.transform = 'translateX(-500px)';
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const arrow = document.querySelector('.arrow');
    const body = document.querySelector('#card-body');
    let rotated = false;

    arrow.addEventListener('click', function() {
        rotated = !rotated;
        if (rotated) {
            arrow.style.transform = 'rotate(90deg)';
            body.classList.add('hidden');
        } else {
            arrow.style.transform = 'rotate(270deg)';
            body.classList.remove('hidden');
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const arrow = document.querySelector('.arrow2');
    const sliderDiv = document.querySelector('.slider-div');
    const card= document.querySelector("#card4-intro");
    let isVisible = true;

    arrow.addEventListener('click', function() {
        isVisible = !isVisible;
        if (isVisible) {
            arrow.style.transform = 'rotate(0deg)';
            sliderDiv.classList.remove('hidden');
            card.style.borderBottom="1px solid #e0e0e0"
            
        } else {
            arrow.style.transform = 'rotate(180deg)';
            sliderDiv.classList.add('hidden');
            card.style.borderBottom="none";
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const arrow = document.querySelector('.arrow3');
    const sliderDiv = document.querySelector('.slider-div2');
    let isVisible = true;

    arrow.addEventListener('click', function() {
        isVisible = !isVisible;
        if (isVisible) {
            arrow.style.transform = 'rotate(0deg)';
            sliderDiv.classList.remove('hidden2');
        } else {
            arrow.style.transform = 'rotate(180deg)';
            sliderDiv.classList.add('hidden2');
        }
    });
});
