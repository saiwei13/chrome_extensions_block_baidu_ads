var x;

/**
 * 屏蔽右侧广告
 */
function block_right_ads(){
    //console.log("block_right_ads()")

    //右侧 推广链接
    x = document.getElementById('ec_im_container')
	if(x != null) {
        x.parentNode.removeChild(x);
        //console.log('ec_im_container block')
    } else{
        //console.log('ec_im_container  null')
    }

    //右侧 咨询热线
    x = document.getElementsByClassName('ec-figcaption')[0]
    if(x != null) {
        x.parentNode.removeChild(x);
        //console.log('ec-figcaption block')
    }else{
        //console.log('ec-figcaption  null')
    }
}

/**
 * 屏蔽左上广告
 * <a class="WapncK" href="http://e.baidu.com/?refer=666" target="_blank">推广链接</a>
 */
function block_left_top_ads(){

    //console.log("block_left_top_ads()")

    //x = document.getElementById('4003')
    //if(x != null ) {
    //    x.parentNode.removeChild(x)
    //    console.log('4003 block')
    //}else{
    //    console.log('4003 null')
    //}
    //
    //x = document.getElementById('4002')
    //if(x != null ) {
    //    x.parentNode.removeChild(x)
    //    console.log('4002 block')
    //}else{
    //    console.log('4002 null')
    //}
    //
    //x = document.getElementById('4001')
    //if(x != null ) {
    //    x.parentNode.removeChild(x)
    //    console.log('4001 block')
    //} else{
    //    console.log('4001 null')
    //}

    //方法三
    x = document.getElementById('4001')
    if(x != null) {
        x = x.parentNode;
        if(x != null) {
            x.parentNode.removeChild(x)
        }
    }

    //方法四
    //$("#4001").parent().remove();
}

/**
 * 屏蔽左下广告
 * <a class="WapncK" href="http://e.baidu.com/?refer=666" target="_blank">推广链接</a>
 */
function block_left_bottom_ads(){

    //console.log("block_left_bottom_ads()")

    x = document.getElementById('5003')
    if(x != null) {
        x.parentNode.removeChild(x);
        //console.log('5003 block')
    }else{
        //console.log('5003 null')
    }

    x = document.getElementById('5002')
    if(x != null) {
        x.parentNode.removeChild(x);
        //console.log('5002 block')
    }else{
        //console.log('5002 null')
    }

    x = document.getElementById('5001')
    if(x != null) {
        x.parentNode.removeChild(x);
        //console.log('5001 block')
    } else{
        //console.log('5001 null')
    }

}

//console.log("document.documentElement=",(document.documentElement==null))

//console.log("time: "+new Date())

//console.log("document.readyState="+document.readyState)

var t ;
var count = 0;

function block_ads(){

    count++;

    console.log("block_ads()  count="+count)

    if(count>12){
        return;
    }

    block_right_ads();
	block_left_top_ads();
	block_left_bottom_ads();
    t = window.setTimeout(block_ads, 300)
}

if(t != null){
    clearTimeout(t)
}

setTimeout(function(){
    console.log("time: "+new Date())
	block_ads()
},300);



