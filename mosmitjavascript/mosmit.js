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
});


const container2 = document.getElementById("_container2");

//adding different green colors

let greenColorCodes = [
    "#7CFC00",
    "#78AB46",
    "#3B5323",
    "#458B00",
    "#BCED91",
    "#61B329",
    "#5DFC0A",
    "#4CBB17",
    "#4AC948",
    "#00EE00",
    "#33FF33",
    "#00C957",
]

const numberOfSquares = 99;

for(let i = 0; i < numberOfSquares; i++){

    const activity = document.createElement("div");
    activity.classList.add("activity");

    activity.addEventListener("mouseover", ()=>{
        addColor(activity);
    });

    activity.addEventListener("mouseout", ()=>{
        addColor(activity);
    });

    container2.appendChild(activity);
}

function addColor(squaresTile){
    const gettingColor = greenColors();
    squaresTile.style.backgroundColor = gettingColor;
    squaresTile.style.boxshadow = ` 0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}



function greenColors(){
    return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)]
}


const letters = document.querySelectorAll(".letters span");

letters.forEach((letter)=>{

    letter.addEventListener("click", (e)=>{
        e.target.classList.add("active");
    });
});


const searchHistory = [];

searchIcon.addEventListener("click", ()=>{

    const searchValue = input.value;
    const resultText = document.getElementById("resultText");
    resultText.textContent = `You Searched For: ${searchValue}`;

    if (searchValue){
        searchHistory.push(searchValue);
        console.log(searchHistory);
    }

})
// closeIcon.addEventListener("click", ()=>{
    
    
//     document.getElementById("resultText").textContent = " ";
// })


