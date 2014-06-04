function patch(){
        location.href = "http://www.dmm.com/netgame/social/application/-/detail/=/app_id=******";
        setTimeout("jumpPage(),1000");
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);
