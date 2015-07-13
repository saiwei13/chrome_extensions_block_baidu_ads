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

/**
 * 屏蔽 [推广]　　【推广　评价】
 * 关键字：　百度搜　域名注册，网站建设
 */
function block_300x_ads(){

    //console.log("block_left_bottom_ads()")

    var tmp = ['3001','3002','3003','3004','3005','3006','3007','3008']

    for(var i=0;i<tmp.length;i++){
        x = document.getElementById(tmp[i])

        if(x != null) {
            x.parentNode.removeChild(x);
        } else {
            break;
        }
    }
}

/**
 * 屏蔽“百安装百度杀毒确保软件安全”的提示
 */
function block_baidu_soft_bind_tip(){
    x = document.getElementsByClassName('op-soft-checkbox')[0]
    //console.log('type='+type(x))
    //console.log('defaultChecked='+ x.defaultChecked)
    if(x != null){
        if(x.checked == false){
        return;
        }
        console.log('x.checked='+ x.checked)
        x.click();
    }
}

//console.log("document.documentElement=",(document.documentElement==null))

//console.log("time: "+new Date())

//console.log("document.readyState="+document.readyState)

var t ;
var count = 0;

function block_ads(){

    count++;

    //console.log("block_ads()  count="+count)

    if(count>12){
        return;
    }

    block_right_ads();
	block_left_top_ads();
	block_left_bottom_ads();
    block_baidu_soft_bind_tip();
    block_300x_ads();
    t = window.setTimeout(block_ads, 300)
}

if(t != null){
    clearTimeout(t)
}

setTimeout(function(){
    //console.log("time: "+new Date())
	block_ads()
},300);



