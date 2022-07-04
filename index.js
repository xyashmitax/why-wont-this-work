var cnv, ctx, loop;
var snake, tail, apple;

window.onload = function() {

    cnv = document.getElementById("canvas");
    ctx = cnv.getContext("2d");
    addEventListener("keydown",keyPressed);

    init();
    loop = setInterval(()=> {

        update();
        render();
    },1000/15);
}
//drawing rectangles
function drawRect(x,y,width,height,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
    ctx.fil();
}

function init(){

}

function update(){
console.log("updating . . . ");
}

function render(){

}

function keyPressed(){

}