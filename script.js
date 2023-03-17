var canvas = document.getElementById("myBeautifulPainting");
var ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height= 400;

//variables
var changeRadius = 200;

//bacground
ctx.fillStyle = "#000"
ctx.fillRect(0, 0, 400, 400);

function funnyCircle(color, radius){
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(200, 200, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function changeColor(){
    var myBeautifulColors = ["black", "yellow", "orange", "red", "brown"];
var myRandomColors = Math.floor(Math.random()*myBeautifulColors.length)


var resultColor = ctx.fillStyle= myBeautifulColors[myRandomColors];

 return resultColor;

}


function myBeautifulRefresh(){

    //bacground
ctx.fillStyle = "#000"
ctx.fillRect(0, 0, 400, 400);


for(i=0; i<20; i++){
    changeRadius -= 10; 
    
funnyCircle(changeColor(), changeRadius)


}
changeRadius = 200;
}

setInterval(myBeautifulRefresh, 1000)





