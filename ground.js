class Ground{
    constructor(x,y,w,h){
        var options ={
            isStatic: true,
            restitution:0
        }
    this.width=w
    this.height=h
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x,pos.y,this.width,this.height)
    }
}
    
