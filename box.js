class Box {
    constructor(x, y) {

      this.body = Bodies.rectangle(x, y, width, height);
     this. Boxwidth = 100;
this.BoxHeight=100;
    }
     display(){
      push()
       rectMode(CENTER)
       angleMode(RADIANS) 
       fill(255)
         rotate(this.angle)
          rect(0,0,this.Boxwidth, this.BoxHeight);
     pop()
    }
  };
  