

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

block_right_ads();


console.log('block baidu ads by saiwei  count='+count++)


