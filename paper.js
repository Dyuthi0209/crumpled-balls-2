class Paper {

    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:0.35
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(this.x, this.y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        strokeWeight(3);
        this.body.scale=5;
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }