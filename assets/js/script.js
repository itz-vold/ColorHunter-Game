const startBtn = document.querySelector("footer button");
const card = document.querySelector(".card");
const boxes = document.querySelectorAll('.item');
const scoreElement = document.querySelector('nav h4');
const container = document.querySelector('.container');
let score = 0;
let started = false;
const containerBackground = container.style.backgroundColor;

startBtn.addEventListener('click', e => {
    handleClick();

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