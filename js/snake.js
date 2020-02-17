//  waiting for html for load and then asign game objects 
window.addEventListener("load", ()=>{
const snake = document.querySelector('#snake');
const cherry = document.querySelector('#cherry');

//  check if snake and cherry are loaded propery 
if(snake == undefined || cherry == undefined){
    error();
}else{
    gameLoop(snake, cherry);
}

});
// speed of the snake
let gameSpeed = 400;
//snake s:snake d-direction(0:top, 1:right, 2:down, 3:left)
let sx = 5;
let sy = 5;
let slength = 1;
let sd = 6;
//cherry c:cherry
let cx = 2;
let cy = 1;

//  game objects positons
const snakePosition = [sx,sy];
const cherryPosition = [cx,cy];

// keySensor
window.addEventListener("keydown", (event)=>{
    switch(event.key){
        case "w": sd = 2;
            break;
        case "d": sd = 6;
            break;
        case "s": sd = 8;
            break;
        case "a": sd = 4;
            break;
        default: 
            break;
    }
})

// game loop 
let loop;
function gameLoop(){
loop = setInterval(moveSnake, gameSpeed);
}

// update snake position on screen
function update(){
    snake.style.gridColumn = `${sx}`
    snake.style.gridRow = `${sy}`
}

// functions


function moveSnake(){
    switch(sd){
        case 2: 
            if(sy>0 && sy <10){
                sy--;
                console.log("moved snake up: " + sy);
                update();
            }else{
                endGame();
            }
            break;
        case 6: 
            if(sx>0 && sx <10){
                sx++;
                console.log("moved snake right: " +sx);
                update();
            }else{
                endGame();
            }
            break;
        case 8: 
            if(sy>0 && sy <10){
                sy++;
                console.log("moved snake down: " +sy);
                update();
            }else{
                endGame();
            }
            break;
        case 4: 
            if(sx>0 && sx <10){
                sx--;
                console.log("moved snake left: " +sx);
                update();
            }else{
                endGame();
            }
            break;
    }
}
function endGame(){
    console.log("snake died(wall)");
    clearInterval(loop);
}
function error(){
    document.querySelector('#game').style.display = 'none';
    document.querySelector('body').innerHTML += '    <div id="error">error</div>'
    console.log('error');
}