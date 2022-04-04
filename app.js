var color = document.querySelector("#color");
var erase = document.querySelector("#tay");
var tang = document.querySelector("#tang");
var giam = document.querySelector("#giam");
var size = document.querySelector("#size");
var clear = document.querySelector("#clear");

var canvas = document.querySelector("canvas");
console.log(canvas, color, erase);
var ve = false;
var ctx = canvas.getContext("2d");
var mau = "#000000";
var toado1 = {
  x: 0,
  y: 0,
};

var toado2 = {
  x: 0,
  y: 0,
};
var dolon = 5;
size.innerText = dolon
document.addEventListener("mousedown", function (e) {
  toado1 = {
    x: e.offsetX,
    y: e.offsetY,
  };
  ve = true;
});

document.addEventListener("mousemove", function (e) {
  if (ve) {
    toado2 = {
      x: e.offsetX,
      y: e.offsetY,
    };
    ctx.beginPath();
    ctx.arc(toado1.x, toado1.y, dolon, 0, 2 * Math.PI);
    ctx.fillStyle = mau;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(toado1.x, toado1.y);
    ctx.lineTo(toado2.x, toado2.y);
    ctx.strokeStyle = mau;
    ctx.lineWidth = dolon*2;
    ctx.stroke();

    toado1.x = toado2.x;
    toado1.y = toado2.y;
  }
});
document.addEventListener("mouseup", function () {
  ve = false;
});

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();

color.addEventListener("change", function (e) {
  console.log(e.target.value);
  mau = e.target.value;
});

erase.addEventListener("click", function () {
  mau = "white ";
});

giam.addEventListener('click',function(){
    if(dolon>5){

        dolon-=5
        size.innerText = dolon
    }else{

        dolon=5
size.innerText = dolon
    }
})
tang.addEventListener('click',function(){
    if(dolon<30){

        dolon+=5
        size.innerText = dolon
    }else{

        dolon=30 
        size.innerText = dolon
    }


})

clear.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width,canvas.height)


})