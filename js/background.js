//var count = 0;

var console = chrome.extension.getBackgroundPage().console;

console.log('background.js  start by saiwei');


var count = 0;

(function($){
	chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){

		console.log('tab.url='+tab.url+ " , changeInfo.status="+changeInfo.status)

		//if(count == 0){
		//	chrome.tabs.executeScript(tabId,{file:"/js/jquery-1.11.3.min.js",runAt:"document_end"});
		//	count++;
		//}

		if(tab.url != undefined && changeInfo.status == 'complete'){

			// Block Ads for www.baidu.com
			if(tab.url.match('http://www.baidu.com') || tab.url.match('https://www.baidu.com')){


				console.log("document.readyState="+document.readyState)

				console.log("----match------ tabId = "+tabId)
				//chrome.tabs.insertCSS(tabId,{code:".EC_result,.EC_mr15,div[data-rendered=true],#ec_im_container,.hint_right_bottom,.ec_bdtg {display:none;}",runAt:"document_start"});
				chrome.tabs.executeScript(tabId,{file:"/js/block_ads.js",runAt:"document_end"});

			} else if(tab.url.match('http://play.baidu.com')){
				chrome.tabs.executeScript(tabId,{file:"/js/block_play_ads.js",runAt:"document_end"});
			}
			console.log("----end--------------")
		}
	});
})(jQuery);