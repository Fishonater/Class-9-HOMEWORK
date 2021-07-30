var btn_red;
var btn_green;

var btn_red = createSprite(200, 200, 25, 50);
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

btn_red = createButton("RED");
btn_red.position(100,50);
btn_red.mousePressed(red_bg);

btn_red = createButton("GREEN");
btn_red.position(250,50);
btn_red.mousePressed(green_bg);

}

function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
  draw();
}

function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
  draw();
}



function draw() {
  background(r,g,b);
  drawSprites();
}

