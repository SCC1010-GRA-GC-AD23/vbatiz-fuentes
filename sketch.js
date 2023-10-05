//https://www.dafont.com/
let miFuente
function preload() {
  // put preload code here
  miFuente = loadFont("./fonts/mexcellentrg.otf")
}
function setup() {
  // put setup code here
  createCanvas(800,800)
}
function draw() {
  // put drawing code here
  background(0,255,0)
  //rect(100,100,200,200)
  textFont(miFuente)
  textSize(100)
  fill(255,0,0)
  text("MEXICO", 100, 100)
}
