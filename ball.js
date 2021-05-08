class Ball{
    constructor(x,y){
    var options={
        restitution : 0.8 ,
        density : 1 

        
        
    }

    this.image=loadImage("paper.png")


    this.body = Bodies.circle(x , y , 30 , options )
    World.add(world , this.body)
     this.x = x
     this.y = y


    }

    display(){
        var pos = this.body.position
       
        push()
        translate(pos.x , pos.y)
        imageMode(CENTER)
       image( this.image , 0 , 0 , 70 ,70 )
        pop()

      
    }
}

