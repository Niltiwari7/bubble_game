var timer=60;
var score=0;
var hitrn=0;
function increasScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble()
{
    let clutter="";
for(var i=1;i<=126;i++){
 var rn=Math.floor(Math.random()*10);
  clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer(){
    var tim=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(tim);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clikktar=Number(dets.target.textContent);
    if(clikktar===hitrn){
        increasScore();
        makeBubble();
        getNewHit();
    }
})

runtimer();
makeBubble();
getNewHit();
