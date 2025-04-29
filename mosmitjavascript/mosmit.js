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


const container = document.querySelector(".container1");
const input = document.querySelector(".search");
const button = document.getElementById("_button");
const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");


button.addEventListener("click",()=>{

    container.classList.toggle("active");
    button.classList.toggle("active");

    if(container.classList.contains("active")){
        searchIcon.style.opacity = 0;
        closeIcon.style.opacity = 1;
    }else{
        searchIcon.style.opacity = 1;
        closeIcon.style.opacity = 0;
    }

    input.focus();
})