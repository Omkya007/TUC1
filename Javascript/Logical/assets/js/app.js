var cl=console.log;


var p=10;
var q=10;
var res=(p==q);
cl(res);
var info=document.getElementById("info4");
info.innerHTML=res;

var p=10;
var q=20;
var res=(p===20);
cl(res);
var info=document.getElementById("info5");
info.innerHTML=res;

var p=10;
var q=20;
var res=(p!=q);
var info=document.getElementById("info6");
info.innerHTML=res;

var p=20;
var q=20;
var res=(p!==q);
var info=document.getElementById("info7");
info.innerHTML=res;


var p=10;
var q=30;
var res=(p>q);
cl(res);
var info=document.getElementById("info8");
info.innerHTML=res;

var p=20;
var q=60;
var res=(p<q);
var info=document.getElementById("info9");
info.innerHTML=res;