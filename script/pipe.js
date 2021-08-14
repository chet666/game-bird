class Pipe extends Rectangle{
    constructor(height,top,speed,dom){
        super(52,height,gameWidth,top,speed,0,dom)
    }
    onMove(){
        if(this.left<-this.width){
            this.dom.remove();
        }
    }
}

function getRandom(max,min){
    return Math.floor(Math.random()*(max-min)+min);
}
class PipePare{
    constructor(speed){
        this.spaceHeight = 150; //空隙位置的高度
        this.minHeight = 80; //水管最小高度
        this.maxHeight = landTop - this.minHeight - this.spaceHeight;
        const upHeight = getRandom(this.minHeight,this.maxHeight)
        const upDom = document.createElement('div');
        upDom.className = 'pipe up';
        this.upPipe = new Pipe(upHeight,0,speed,upDom);
        const downHeight = landTop - upHeight - this.spaceHeight;
        const downTop = landTop - downHeight;
        const downDom = document.createElement('div');
        downDom.className = 'pipe down';
        this.downPipe = new Pipe(downHeight,downTop,speed,downDom)
        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
    }
    move(duration){
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
}
//不断产生柱子类
class PipePareProducer{
    constructor(){
        
    }
}
var pair = new PipePare(-50);
setInterval(()=>{
    pair.move(16/1000);
},16)