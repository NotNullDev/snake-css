//  waiting for html for load and then asign game objects 
window.addEventListener("load", ()=>{
// const snakehead = document.querySelector('#snakehead');
// const cherry = document.querySelector('#cherry');

// //  check if snake and cherry are loaded propery 
// if(snakehead == undefined || cherry == undefined){
//     error();
// }else{
// document.querySelector('#start').style.display = "block";
// randomizeCherry();
// }
document.querySelector('#start').style.display = "block";
});
// speed of the snake
let gameSpeed = 400;
//snake s:snake d-direction(0:top, 1:right, 2:down, 3:left)
let sx = 5;
let sy = 5;
let slength = 1;
let sd = 6;
let stx = 0;
let sty = 0;
//cherry c:cherry
let cx = 2;
let cy = 1;

//  game objects positons
const snakePositions = {
    head: [sx,sy],
    lenght: slength,
    tail: [stx,sty]
}
const cherryPosition = [cx,cy];

// keySensor
window.addEventListener("keydown", (event)=>{
    event.preventDefault();
    switch(event.key){
        case "w": sd = 2;
            break;
        case "d": sd = 6;
            break;
        case "s": sd = 8;
            break;
        case "a": sd = 4;
            break;
        case "ArrowUp": sd = 2;
            break;
        case "ArrowRight": sd = 6;
            break;
        case "ArrowDown": sd = 8;
            break;
        case "ArrowLeft": sd = 4;
            break;
        default: 
            break;
    }
})

// game loop 
let loop;
function gameLoop(){
    updateCherry();
    update();
    document.querySelector('#start').style.display = "none";
loop = setInterval(moveSnake, gameSpeed);
}

// update snake, cherry positions on screen
function update(){
    snakehead.style.gridColumn = `${sx}`
    snakehead.style.gridRow = `${sy}`
}
function updateCherry(){
    cherry.style.gridColumn = `${cx}`
    cherry.style.gridRow = `${cy}`
}

// functions

//cherry
function randomizeCherry(){
    cx = Math.floor(Math.random()*(9) +1);
    cy = Math.floor(Math.random()*(9) +1);
    if(cx == sx && cy == cy){
        randomizeCherry();
    }else{
            updateCherry();
        }
    }


function moveSnake(){
    switch(sd){
        case 2: 
            if(sy>0 && sy <10){
                sy--;
                update();
                Colizion('gora');
            }else{
                endGame();
            }
            break;
        case 6: 
            if(sx>0 && sx <10){
                sx++;
                update();
                Colizion('prawo');
            }else{
                endGame();
            }
            break;
        case 8: 
            if(sy>0 && sy <10){
                sy++;
                update();
                Colizion('dol');
            }else{
                endGame();
            }
            break;
        case 4: 
            if(sx>0 && sx <10){
                sx--;
                update();
                Colizion('prawo');
            }else{
                endGame();
            }
            break;
    }
}


function Colizion(kierunek){
    if(sx == cx && sy == cy){
       // addTail(kierunek);
        score += 100;
        randomizeCherry();
    }
}
// function addTail(kierunek){
//     const game = document.querySelector('#game');
//     switch(kierunek){
//         case 'gora':
//             game.innerHTML += '<div class="snakebody"></div>'
//         case 'dol':
//         case 'lewo':
//         case 'prawo':

//     }

// }

let score = 0;

function startGame(){
    gameLoop();
}

function restart(){
    score = 0;
    sx = 5;
    sy = 5;
    slength = 1;
    sd = 6;
    cx = 2;
    cy = 1;
    gameLoop();
    document.querySelector('#restart').style.display = "none";
    document.querySelector('#score').style.display = "none";

}

function endGame(){
    document.querySelector('#restart').style.display = "block";
    document.querySelector('#score').innerHTML = `Score: ${score}` 
    document.querySelector('#score').style.display = "block";
    console.log("snake died(wall)");
    clearInterval(loop);

}


function error(){
    document.querySelector('#game').style.display = 'none';
    document.querySelector('body').innerHTML += '    <div id="error">error</div>'
    console.log('error');
}