var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);

var x = 100;
var y = 100;
var w = 100;
var h = 100;
var vx = 5;
var vy = 5;

var s = [];
var co = ["red","blue","green","yellow"];
for(var i =0; i < 100; i++){
    s[i]= new GameObject();
    s[i].x = Math.random() * canvas.width;
    s[i].y = Math.random() * canvas.height;
    s[i].w = 20;
    s[i].h = 20;
    s[i].vy= Math.random() * 15 + 5;
    s[i].color = co[Math.ceil(Math.random() * co.length)];

}
console.log(s);


function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for (i =0; i <s.length; i++){
        s[i].drawRect();
        s[i].move();
    }
    /*ctx.fillStyle="red";
    ctx.fillRect(x,y,w,h);
    x += vx;
    if(x >= canvas.width - w){
        vx= vx * -1;
    }
    if(x <= 0){
        vx = vx * -1;
    }*/
   
}
