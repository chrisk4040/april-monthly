
function startGame (){
    gameArea.start()
}
let targets = [];
let distance = 0;


const gameArea () {
    let canve = this.canvas
    canvas:document.createElement("canvas"),
    start:function () {
        canve.width=300;
        canve.height=400;
        canve.style.backgroundColor="#6fafeb";
        canve.style.border="2px solid white"
        canve.style.margin="auto";
        canve.style.display="block";
        document.body.insertBefore(canve,document.body.childNodes[0]);
        this.context=canve.getContext("2d");
    }
    update:function () {
        gameArea.context.clearRect(0,0,300,400);
        if(targets.length == 0 || targets[targets.length-1].y>=distance)
    }
}
function target() {
    this.x=Math.floor(Math.random() *290);
    this.y=0;
    this.draw= function draw () {
        gameArea.context.fillStyle="black";
        gameArea.context.fillRect(this.x.this.y,20,20)
    }
}