var data = { "pages": [{ "pageId": 1530518671659, "targets": [{ "tag": "text", "targetId": 1530518676625, "pageId": 1530518671659, "props": { "color": "#7A0505", "backgroundColor": "#B3990D", "fontSize": 20, "fontWeight": "", "fontFamily": "", "letterSpacing": 0, "lineHeight": 20, "opacity": 1, "width": 200, "height": 20, "left": 50, "top": 50, "content": "请输入文字", "zIndex": 0, "animationDelay": "1s", "animationIterationCount": 1, "animationDuration": "2s", "animationName": "zoomInRight" } }, { "tag": "image", "targetId": 1530518677041, "pageId": 1530518671659, "props": { "opacity": 1, "width": 200, "height": 150, "left": 142, "top": 250, "zIndex": 0, "url": "http://192.168.1.133:8080/dist/assets/demoImage.png?82b9c", "animation": {}, "animationDelay": "0s", "animationIterationCount": 1, "animationDuration": "1s", "animationName": "rotateInDownRight" } }], "props": { "backgroundColor": "#3AC210", "stayTime": 10 } }, { "pageId": 1530518682176, "targets": [{ "tag": "text", "targetId": 1530518683632, "pageId": 1530518682176, "props": { "color": "#000000", "backgroundColor": "#ffd700", "fontSize": 20, "fontWeight": "", "fontFamily": "", "letterSpacing": 0, "lineHeight": 20, "opacity": 1, "width": 200, "height": 20, "left": 50, "top": 50, "content": "请输入文字", "zIndex": 0, "animationDelay": "0s", "animationIterationCount": 1, "animationDuration": "1s", "animationName": "fadeInRight" } }], "props": { "backgroundColor": "#9A2121", "stayTime": 10 } }], "uploadedMaterials": { "images": [{ "id": 1530518656480, "title": "图片名称", "tag": "image", "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/10" }, { "id": 1530518656481, "title": "图片名称", "tag": "image", "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/10" }, { "id": 1530518656482, "title": "图片名称", "tag": "image", "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/10" }, { "id": 1530518656483, "title": "图片名称", "tag": "image", "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/10" }, { "id": 1530518656484, "title": "图片名称", "tag": "image", "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/10" }], "videos": [], "musics": [{ "id": 1530518656480, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656481, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656482, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656483, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656484, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656485, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656486, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656487, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656488, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656489, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656490, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656491, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656492, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656493, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }, { "id": 1530518656494, "title": "mp3xxxxxxxxxxxxsdsPdsxsx", "tag": "audio", "url": "" }] }, "bg": { "music": null, "effect": "slide", "delay": 10 }, "globalSetting": { "width": 360, "height": 640 }, "selectedPageIndex": 0, "selectedTargetIndex": 1, "editorTag": "image" }

var a = {
    "pageId": 123213,
    "targets": [
        {
            "tag": "text",
            "targetId": 888,
            "pageId": 123213,
            "props": {

            }
        }
    ]
}

function AnimationQueue(page) {
    this.animations = [];
    this.init(page);
}
AnimationQueue.animate = function (animations) {
    if (animations.length === 0) return;
    var animation = animations.shift();
    var el = document.getElementById(animation.el);
    function animationEnd() {
        el.style.animationName = '';//去掉动画,使得下次添加动画生效
        el.removeEventListener('webkitAnimationEnd', animationEnd);
        el.removeEventListener('animationend', animationEnd);
        AnimationQueue.animate(animations);
    }
    if (window.onanimationend === null) {
        el.addEventListener('animationend', animationEnd)
    } else {
        el.addEventListener('webkitAnimationEnd', animationEnd)
    }


    el.style.webkitAnimationName = animation.animationName;
    el.style.webkitAnimationDelay = animation.animationDelay;
    el.style.webkitAnimationDuration = animation.animationDuration;
    el.style.webkitAnimationIterationCount = animation.animationIterationCount;
    el.style.webkitAnimationFillMode = 'both';

    el.style.animationName = animation.animationName;
    el.style.animationDelay = animation.animationDelay;
    el.style.animationDuration = animation.animationDuration;
    el.style.animationIterationCount = animation.animationIterationCount;
    el.style.animationFillMode = 'both';
}
AnimationQueue.prototype.init = function init(page) {
    var targets = page.targets;
    if (!Array.isArray(targets) || targets.length === 0) return;
    targets.forEach(function (target) {
        var animation = {};
        var el = target.targetId;
        animation.el = el;
        animation['animationName'] = target.props.animationName;
        animation['animationDelay'] = target.props.animationDelay;
        animation['animationDuration'] = target.props.animationDuration;
        animation['animationIterationCount'] = target.props.animationIterationCount;
        this.animations.push(animation);
    }, this)
}
AnimationQueue.prototype.run = function run() {
    var animations = this.animations.slice();//复制数组
    AnimationQueue.animate(animations);//递归初执行队列动画
}
