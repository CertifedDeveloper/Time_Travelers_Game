
function Title(topText, bottomText){//When you click the start button, enter the main loop.

    function mm(e){
        var w = c.measureText("Start").width;
        if (e.x > 100 && e.x < 100+w && e.y < 200 && e.y > 200-64){
            c.fillStyle = "rgba(255,115,115,0.5)";
            c.fillText(bottomText, 100,200);
        }
        else{
            c.fillStyle = "rgb(125,25,25)";
            c.fillText(bottomText, 100,200);
        }
    }
    function cl(e){
        var w = c.measureText("Start").width;
        if (e.x > 100 && e.x < 100+w && e.y < 200 && e.y > 200-64){
            document.removeEventListener("mousemove", mm, false);
            document.removeEventListener("click", cl, false);
            main();
        }
    }

    c.clearRect(0,0,canvas.width,canvas.height);

    //draws obvious text snippets using arbitrary temporary variable p. start saved to later provide click checking
    c.fillStyle = "rgb(125,25,25)";
    c.font = "128px serif";
    c.fillText(topText, 100,100);
    c.font = "64px sans";
    c.fillText(bottomText, 100,200);

    document.addEventListener("mousemove",mm,false);
    document.addEventListener("click",cl,false);

}