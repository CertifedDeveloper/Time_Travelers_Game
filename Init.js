var counter = 0; var enemyArray;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

//the keypresses array being set and unset by 
var keypress = {"Right":false, "Left":false, "Up":false, "Down":false};
window.addEventListener("keydown", function(e){
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d"){
        keypress["Right"] = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a"){
        keypress["Left"] = true;
    }
    if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w"){
        keypress["Up"] = true;
    }
    if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s"){
        keypress["Down"] = true;
    }
    if (e.key == "r"){
        Player.health = 0
    }
});
window.addEventListener("keyup", function(e){
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d"){
        keypress["Right"] = false;
    }
    if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a"){
        keypress["Left"] = false;
    }
    if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w"){
        keypress["Up"] = false;
    }
    if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s"){
        keypress["Down"] = false;
    }
});
window.addEventListener("resize", function(){//keeps the canvas fit to the window
    canvas.height = window.innerHeight - 2*8;
    canvas.width = canvas.height*16/9 - 2*8;
    canvas.height-= 2*8
});

function start(){//Makes sure that all the assets are loaded before going on to tile screen
    loaded = true
    for (const item in IMAGEDICT){
        if (IMAGEDICT[item].complete == false){
            loaded = false;
        }

    }
    if (loaded == false){
        window.setTimeout(start,100);
    }
    else{
        Title("Project Time Travelers", "Start")
    }
}
onload = function () {
  start();
}