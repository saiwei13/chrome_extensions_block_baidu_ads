//var count = 0;

var console = chrome.extension.getBackgroundPage().console;

console.log('background.js  start by saiwei');

(function($){
	chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){

		console.log('tab.url='+tab.url+ " , changeInfo.status="+changeInfo.status)

		if(tab.url != undefined && changeInfo.status == 'complete'){

			// Block Ads for www.baidu.com
			if(tab.url.match('http://www.baidu.com') || tab.url.match('https://www.baidu.com')){
				console.log("----match------ tabId = "+tabId)
				//chrome.tabs.insertCSS(tabId,{code:".EC_result,.EC_mr15,div[data-rendered=true],#ec_im_container,.hint_right_bottom,.ec_bdtg {display:none;}",runAt:"document_start"});
				chrome.tabs.executeScript(tabId,{file:"/js/block_ads.js",runAt:"document_end"});
			}
			console.log("----end--------------")
		}
	});
})(jQuery);