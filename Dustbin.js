class dustbin{
    constructor(x,y,w,h){
     var options = {
         isStatic:true,
         restitution: 0.3,
         friction: 0.5,
         density:1.2
       }
       this.x=x;
       this.y=y;
       this.w=w;
       this.h=h;
       this.body = Bodies.rectangle(this.x,this.y,this.w,this.h, options);
       World.add(world,this.body);
       this.image=loadImage("images/dustbingreen.png");
    }

    display(){
   
    var paperpos=this.body.position;

     push()
     translate(paperpos.x,paperpos.y)
     imageMode(CENTER);
     image(this.image,0,0,this.w,this.h)
     pop()
    }
}