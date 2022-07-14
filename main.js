var canvas=new fabric.Canvas("can");
blockht=30;
blockwd=30;
playerx=10;
playery=10;
var playerObject="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerObject);
    });
}
function newimg(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockwd);
        blockObject.scaleToHeight(blockht);
        blockObject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockObject);
    });
}
window.addEventListener("keydown",Bruh);
function Bruh(e){
    key=e.keyCode;
    console.log(key);
    if (e.shiftKey==true && key=="80"){
        blockht=blockht+10;
        blockwd=blockwd+10;
        document.getElementById("current_width").innerHTML=blockwd;
        document.getElementById("current_height").innerHTML=blockht;
    }
    if (e.shiftKey==true && key=="77"){
        blockht=blockht-10;
        blockwd=blockwd-10;
        document.getElementById("current_width").innerHTML=blockwd;
        document.getElementById("current_height").innerHTML=blockht;
    }
    if(key=="37"){
        left();
    }
    if(key=="38"){
        up();
    }
    if(key=="39"){
        right();
    }
    if(key=="40"){
        down();
    }
    if(key=="67"){
        newimg("cloud.jpg");
    }
    if(key=="68"){
        newimg("dark_green.png");
    }
    if(key=="71"){
        newimg("ground.png");
    }
    if(key=="76"){
        newimg("light_green.png");
    }
    if(key=="82"){
        newimg("roof.jpg");
    }
    if(key=="84"){
        newimg("trunk.jpg");
    }
    if(key=="85"){
        newimg("unique.png");
    }
    if(key=="87"){
        newimg("wall.jpg");
    }
    if(key=="89"){
        newimg("yellow_wall.png");
    }
}
function up(){
    if(playery>=0){
        playery=playery-blockht;
        console.log(playerx,playery);
        canvas.remove(playerObject)
        playerupdate()
    }
}
function down(){
    if(playery<=500){
        playery=playery+blockht;
        console.log(playerx,playery);
        canvas.remove(playerObject)
        playerupdate()
    }
}
function left(){
    if(playery>=0){
        playerx=playerx-blockwd;
        console.log(playerx,playery);
        canvas.remove(playerObject)
        playerupdate()
    }
}
function right(){
    if(playery<=800){
        playerx=playerx+blockwd;
        console.log(playerx,playery);
        canvas.remove(playerObject)
        playerupdate()
    }
}