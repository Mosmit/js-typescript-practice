const lights = document.querySelectorAll(".light");
const section = document.querySelector('section');

let active = 0;

setInterval(() => {
    changeColor();
}, 1000);

function changeColor() {
    if (active > 0) {
        lights[active - 1].classList.remove('active');
    }

    const color = getComputedStyle(lights[active]).getPropertyValue('--light-color');
    section.style.backgroundColor = color;

    lights[active].classList.add('active');

    if (active === lights.length - 1) {
        setTimeout(() => {
            lights[active].classList.remove('active');
            active = 0;
        }, 900);
    } else {
        active++;
    }
}
