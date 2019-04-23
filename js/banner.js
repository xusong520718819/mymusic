window.onload = function() {//html css js  img  mp3 mp4...
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if(newLeft<-2400){
            list.style.left = 0+ 'px';
        }
        if(newLeft>0){
            list.style.left = -2400+ 'px';
        }
    }

    prev.onclick = function() {
        animate(800);
    }
    next.onclick = function() {
        animate(-800);
    }
    var timer;
    function play() {
        timer = setInterval(function () {
            next.onclick()
        }, 3000)
    }
    play();
    //把图片停住
    var container = document.getElementById('banner');

    function stop() {
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
}