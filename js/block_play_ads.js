/**
 * Created by chenwei on 15-6-27.
 */

var x;

/**
 * 屏蔽百度音乐右侧广告
 */
function block_baidu_play_ads(){

    console.log("block_baidu_play_ads()")

    //屏蔽右侧广告
    x = document.getElementById('right-ads')
    if(x != null) x.parentNode.removeChild(x);

    //屏蔽暂停广告
    x = document.getElementById('pauseAd')
    if(x != null) x.parentNode.removeChild(x);
}

setTimeout(function(){
	block_baidu_play_ads();
},100);