Canvas=document.getElementsById("myCanvas");
CDX=Canvas.getContext("2d");
RW=100;
RH=90;
BGimg="mars.jpg";
Rimg="rover.png";
RX=10;
RY=10;
function add(){
    newBG=new Image();
    newBG.onload=uploadBackground;
    newBG.src=BGimg;
    
    newRimg=new Image();
    newRimg.onload=uploadrover;
    newRimg.src=Rimg;
}
function uploadBackground(){
    CDX.drawImage(newBG,0,0,Canvas.width,canvas.height);
}
function uploadrover(){
    CDX.drawImage(newRimg,RX,RY,RW,RH);
}
window.addEventListener('keydown',mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38")
    {
        up();
    console.log("up");
    }

    if(keypress=="40")
    {
        down();
    console.log("down");
    }

    if(keypress=="37")
    {
        left();
    console.log("left");
    }

    if(keypress=="39")
    {
        right();
    console.log("right");
    }
}