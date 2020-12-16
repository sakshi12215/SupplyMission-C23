class Box{
    constructor(x,y,w,h){
        
        this.body=Bodies.rectangle (x,y,w,h)
        this.width = w 
        this.height = h
        World.add(world,this.body)
    }
        display(){
            
            rectMode(CENTER)
            strokeWeight (0)
            fill("red")
            rect(0,0,this.width,this.height) 
            
        }
    }