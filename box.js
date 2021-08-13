class Box{
    constructor(x,y,w,h){
        var options ={
            isStatic: false,
            restitution:0.8
        }
    this.width=w
    this.height=h
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        rectMode(CENTER)
        fill(255)
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,this.height)
        pop()
    }
}