var randNum1=Math.floor(Math.random()*6+1);
var randDiceImg1="dice"+randNum1+".png"
var randImgSrc1="images/"+randDiceImg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randImgSrc1);

var randNum2=Math.floor(Math.random()*6+1);
var randDiceImg2="dice"+randNum2+".png"
var randImgSrc2="images/"+randDiceImg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randImgSrc2);

if(randNum1>randNum2){
    document.querySelector("h1").innerHTML="Player1 Wins!"
}
else if(randNum2>randNum1){
    document.querySelector("h1").innerHTML="Player2 Wins!"
}else{
    document.querySelector("h1").innerHTML="Game Draw!"
}