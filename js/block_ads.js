

var count = 0;
var x;


/**
 * 屏蔽右侧广告
 */
function block_right_ads(){
    x = document.getElementById('ec_im_container')
    x.parentNode.removeChild(x);

    x = document.getElementsByClassName('ec-figcaption')[0]
    x.parentNode.removeChild(x);
}

/**
 * 屏蔽左上广告
 * <a class="WapncK" href="http://e.baidu.com/?refer=666" target="_blank">推广链接</a>
 */
function block_left_top_ads(){
    //方法一：
    //x = document.getElementById('content_left')
    //var children = x.childNodes;
    ////删除第二个节点
    //x.removeChild(children[1])

    //方法二： 漏掉 【推广链接】字样的节点
    //x = document.getElementById('4001')
    //x.parentNode.removeChild(x);
    //
    //x = document.getElementById('4002')
    //x.parentNode.removeChild(x);
    //
    //x = document.getElementById('4003')
    //x.parentNode.removeChild(x);

    //方法三
    x = document.getElementById('4001')
    x = x.parentNode
    x.parentNode.removeChild(x)
}



/**
 * 屏蔽左下广告
 * <a class="WapncK" href="http://e.baidu.com/?refer=666" target="_blank">推广链接</a>
 */
function block_left_bottom_ads(){

    x = document.getElementById('5001')
    x.parentNode.removeChild(x);

    x = document.getElementById('5002')
    x.parentNode.removeChild(x);

    x = document.getElementById('5003')
    x.parentNode.removeChild(x);
}


block_right_ads();
block_left_top_ads();
block_left_bottom_ads();




console.log('block baidu ads by saiwei  count='+count++)


