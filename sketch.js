var x = 0;

function setup() {
 
  img = loadImage('Knife3.png');
  
}

function draw() {
  var canvDim = 600
  createCanvas(canvDim, canvDim);
  imageMode(CENTER);

  var imgScl = .3
  var imgW = img.width * imgScl
  var imgH = img.height * imgScl

imageMode(CENTER);
let a = atan2(mouseY - height / 2, mouseX - width / 2);
  
    x -= 0.005;
    
    translate(canvDim / 2, canvDim / 2); 

  if (
    mouseX > 20 &&
    mouseX < width-20 &&
    mouseY > 20 &&
    mouseY < height-20
  ) {
    overBox = true;
  } else {
    overBox = false;
  }

  if (overBox == false){
  rotate(cos(x));
    for (let i = 0; i < 10; i++) {
      rotate(cos(x));
      image(img, 0, 0, imgW, imgH);
    }
  }
  
  if (overBox == true){
    rotate(a-PI);
    image(img, 0, 0, imgW, imgH);
  }


}


