window.onload = function() {//html css js  img  mp3 mp4...
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    function animate(offset) {
        //��ȡ����style.left���������߻�ȡ���룬���Ե�һ��ͼ��style.left��Ϊ��ֵ��
        //��style.left��ȡ�����ַ�������Ҫ��parseInt()ȡ��ת��Ϊ���֡�
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
    //��ͼƬͣס
    var container = document.getElementById('banner');

    function stop() {
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
}