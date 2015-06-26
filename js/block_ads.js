var x;

/**
 * 屏蔽右侧广告
 */
function block_right_ads(){
    //console.log("block_right_ads()")

    x = document.getElementById('ec_im_container')
	if(x != null) x.parentNode.removeChild(x);

    x = document.getElementsByClassName('ec-figcaption')[0]
    if(x != null) x.parentNode.removeChild(x);
}

/**
 * 屏蔽左上广告
 * <a class="WapncK" href="http://e.baidu.com/?refer=666" target="_blank">推广链接</a>
 */
function block_left_top_ads(){

    //console.log("block_left_top_ads()")

    //方法三
	x = document.getElementById('4001')
    if(x != null) x = x.parentNode;
    if(x != null) x.parentNode.removeChild(x)
}

/**
 * 屏蔽左下广告
 * <a class="WapncK" href="http://e.baidu.com/?refer=666" target="_blank">推广链接</a>
 */
function block_left_bottom_ads(){

    //console.log("block_left_bottom_ads()")

    x = document.getElementById('5001')
    if(x != null) x.parentNode.removeChild(x);

    x = document.getElementById('5002')
    if(x != null) x.parentNode.removeChild(x);

    x = document.getElementById('5003')
    if(x != null) x.parentNode.removeChild(x);
}

setTimeout(function(){

	block_right_ads();
	block_left_top_ads();
	block_left_bottom_ads();

},1000);



