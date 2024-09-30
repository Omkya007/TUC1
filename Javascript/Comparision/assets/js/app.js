var cl=console.log;


var flag=true;

document.write(flag);

var antiflag=true;

document.write(antiflag);

var p=10;
var q=20;
var r='10';
var s='20';
var m=50;
var res=(p>=q && p>=r);
var info=document.getElementById("info6");
info.innerHTML=res;

var p=10;
var q=20;
var r='10';
var s='20';
var m=50;
var res=(p>q && p>r);
var info=document.getElementById("info7");
info.innerHTML=res;


var p=10;
var q=20;
var r='10';
var s='20';
var m=50;
var res=(p>q && p>r);
var info=document.getElementById("info8");
info.innerHTML=res;

var p=20;
var q=60;
var r='10';
var s=30;
var res=(p<q || p>s);
var info=document.getElementById("info9");
info.innerHTML=res;

var p=30;
var q=40;
var r=50;
var s=10;

var res=(p<q || p>r);
var info=document.getElementById("info10");
info.innerHTML=res;