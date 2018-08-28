class GameObject{
    constructor(){
        this.x =canvas.width/2;
        this.y =canvas.width/2;
        this.w =100;
        this.h = 100;
        this.vx = 5;
        this.vy = 0;
        this.color= "";

    }
    drawRect(){
        ctx.save();
        //ctx.translate(this.x, this.y);
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);


        ctx.restore();
    }
    move(){
        this.x += this.vx;
        this.y += this.vy;
        if(this.x >= canvas.width - this.w){
            this.vx= this.vx * -1;
        }
        if(this.x <= 0){
            this.vx = this.vx * -1;
        }
        if(this.y >= canvas.height - this.h){
            this.vy= this.vy * -1;
        }
        if(this.y <= 0){
            this.vy = this.vy * -1;
        }
    }
}