
var audio = new Audio("jenno-notto.mp3");

function main(){
audio.loop = true;
audio.play();
}

document.querySelector("body").addEventListener("onload",main());




