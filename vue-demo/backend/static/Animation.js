var animation={
    animations:[{
        el:'',
        animation:{

        }
    }],

}

function AnimationQueue(){
    this.animations=[];
}
AnimationQueue.prototype.init=function init(animations){

}
AnimationQueue.prototype.add=function add(animation) {
    this.animations.push(animation);
}