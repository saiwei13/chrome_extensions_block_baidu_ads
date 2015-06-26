var url = 'http://sneezryworks.sinaapp.com/ip.php'
url = 'http://127.0.0.1:8888/test'
function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

//httpRequest(url, function(ip){
//    document.getElementById('ip_div').innerText = ip;
//});

var count = 0;

function getCurUrl(){
    console.log('getCurUrl()  count='+count++);
    document.getElementById('ip_div').innerText = document.URL

    console.log("1: " + window.location.href);
    console.log("2: " + window.location);
    console.log("3: " + location.href);
    console.log("4: " + parent.location.href);
    console.log("5: " + top.location.href);
    console.log("6: " + document.location.href);
}

getCurUrl();