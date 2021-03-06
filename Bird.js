class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imageA = loadImage("sprites/smoke.png");
    this.path = []
  }

  display() {
    super.display();
    if(this.body.position.x>220&& this.body.velocity.x>6){
    var position = [this.body.position.x,this.body.position.y];
    this.path.push(position);
    }
    for(var i = 0;i<this.path.length;i = i + 1){
      image(this.imageA,this.path[i][0],this.path[i][1]);
    }
  }
}
