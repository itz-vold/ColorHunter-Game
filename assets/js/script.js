const startBtn = document.querySelector("footer button");
const card = document.querySelector(".card");
const boxes = document.querySelectorAll('.item');
const scoreElement = document.querySelector('.score-bar h4');
const container = document.querySelector('.container');
const settingElement = document.querySelector(".setting");
const settingIcon = document.querySelector(".setting-icon");
const containerBackground = container.style.backgroundColor;
const darkModeElement = document.querySelector(".dark-mode");
const header = document.querySelector(".header");
const root = document.documentElement;
const icons = document.querySelectorAll(".icon, .setting-icon");
let score = 0;
let started = false;
let setting = {
    darkMode: false,
    isStarted: false
}

settingIcon.addEventListener('click', e => {
    settingElement.classList.toggle('open');
    settingIcon.classList.toggle('clicked')
});

darkModeElement.addEventListener('click', e => {
    if(setting['darkMode']){
        setting['darkMode'] = false;
        handleThemeChange();
    }else{
        setting['darkMode'] = true;
        handleThemeChange();
    }
})

startBtn.addEventListener('click', e => {
    handleClick();
    setting['isStarted'] = true;
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            if(box.id == "diff"){
                score += 10;
                scoreElement.textContent = score;
                box.removeAttribute('id');
                handleClick();
            }else{
                if(score <= 0){
                    score = 0;
                }else{
                    score -= 10;
                }
                scoreElement.textContent = score;
            }
        });
    })
});


function generateColor(){
    let red = Math.round(Math.random() * 256);
    let green = Math.round(Math.random() * 256);
    let blue = Math.round(Math.random() * 256);
    let randomChange = Math.round(Math.random() * 4);

    
    return {
        mainColor: `rgba(${red}, ${green}, ${blue}, 1)`,
        different: `rgba(${red}, ${green}, ${blue}, 0.7)`
    }
}

function handleClick(){
    color = generateColor();
    startBtn.style.display = "none";
    randomElement = Math.round(Math.random() * 15);
    


    boxes.forEach(e => {
        e.style.backgroundColor = color['mainColor'];
    });
    boxes[randomElement].style.backgroundColor = color['different'];
    boxes[randomElement].setAttribute('id', 'diff');
}

function handleThemeChange(){
    if(setting['darkMode']){
        container.style.backgroundColor = getComputedStyle(root).getPropertyValue('--dark-background-color');
        startBtn.style.backgroundColor = getComputedStyle(root).getPropertyValue('--dark-start-btn-color');
        card.style.backgroundColor = getComputedStyle(root).getPropertyValue('--dark-card-background');
        header.style.backgroundColor = getComputedStyle(root).getPropertyValue('--dark-navbar-background-color');
        scoreElement.style.color = getComputedStyle(root).getPropertyValue('--dark-score-bar-color');
        icons.forEach(icon => {
            icon.style.filter = 'invert()';
            
        });
        
        if(!setting['isStarted']){
        boxes.forEach(box =>  {
            box.style.backgroundColor = card.style.backgroundColor;
        });
        }
        
    }else{
        container.style.backgroundColor = getComputedStyle(root).getPropertyValue('--background-color');
        startBtn.style.backgroundColor = getComputedStyle(root).getPropertyValue('--start-btn-color');
        card.style.backgroundColor = getComputedStyle(root).getPropertyValue('--card-background');
        header.style.backgroundColor = getComputedStyle(root).getPropertyValue('--navbar-background-color');
        scoreElement.style.color = getComputedStyle(root).getPropertyValue('--score-bar-color');
        icons.forEach(icon => {
            icon.style.filter = 'invert()';
            
        });

        if(!setting['isStarted']){
        boxes.forEach(box =>  {
            box.style.backgroundColor = card.style.backgroundColor;
        });
        }
    }
}