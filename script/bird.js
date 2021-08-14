const birdDom = document.querySelector('.bird');
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdLeft = parseFloat(birdStyles.left);
const birdTop = parseFloat(birdStyles.top);
const gameDom = document.querySelector('.game');
const gameWidth = gameDom.clientWidth;
const gameHeight = gameDom.clientHeight;
class Bird extends Rectangle{
    constructor(){
        super(birdWidth,birdHeight,birdLeft,birdTop,0,0,birdDom)
        this.g = 500;//向下的加速度，单位（像素/秒²）
        //最大的y坐标
        this.maxY = gameHeight - landHeight - birdHeight;
        this.swingStatus = 1;//小鸟翅膀的状态
        this.timer = null;//翅膀扇动的计时器
    }
    //开始扇动翅膀
    startSwing(){
        if(this.timer){
            return;
        }
        this.timer = setInterval(()=>{
            this.swingStatus = (this.swingStatus + 1) % 4;
        },300)
        this.render();
    }
    render(){
        super.render();
        this.dom.className = `bird swing${this.swingStatus}`;
    }
    //停止扇动翅膀
    stopSwing(){
        clearInterval(this.timer);
        this.timer = null;
    }
    move(duration){
        super.move(duration);//调用父类方法
        //根据加速度改变速度
        this.ySpeed += this.g * duration;
    }
    onMove(){
        //控制坐标范围
        if(this.top < 0){
            this.top = 0
        }else if(this.top > this.maxY){
            this.top = this.maxY;
        }
    }
    jump(){
        this.ySpeed = -250;
    }
    
}
var bird = new Bird();
setInterval(()=>{
    bird.move(16/1000);
},16)