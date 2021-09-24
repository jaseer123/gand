var gand,apj,nehr,mother
function setup(){
    createCanvas(displayWidth-20,displayHeight-30)
    gand= createButton(' Mahathma')
  //  (displayWidth/2-42,displayHeight/2-32)
    gand.position(displayWidth/2-120,displayHeight/2-350)
    apj=createButton('apj Abdul kalam')
    apj.position(displayWidth/2-235,displayHeight/2-350)
    nehr=createButton('jawaharlal nehru')
    nehr.position(displayWidth/245,displayHeight/2-350)
mother=createButton('mother tharesea')
mother.position(displayWidth/2-10,displayHeight/2-350)
}
function draw(){
  background('white')
  
  gand.mousePressed(()=>{
    gand.hide()
    mother.hide()
    apj.hide()
    nehr.hide()
    textSize(30)
    text("father of nation",displayWidth/2-120,displayHeight/2-350)
  })

drawSprites()
}