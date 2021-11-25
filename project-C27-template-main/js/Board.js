class Board{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
     this.body=Bodies.rectangle(x,y,w,h,option);

     this.width = w;
     this.height = h;
     this.image = loadImage("./assets/download.jpg");

     World.add(world, this.body)
    }


display() {
    var pos = this.body.position;
    push();
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.width,this.height);
pop()
}
}