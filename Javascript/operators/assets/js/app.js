var cl=console.log;
// arthimetic operators
var x=10;
var y=10;
var res=x+y;
cl(res);
var info=document.getElementById("info");
info.innerHTML="Addition of 2 numbers is "+" "+res;

var a=10;
var b=30;
var res=b-a;
cl(res);
var info=document.getElementById("info1");
info.innerHTML="Substraction of 2 numbers is "+" "+res;

var q=10;
var r=40;
var res=q*r;
cl(res);
var info=document.getElementById("info2");
info.innerHTML="The multiplication of two numbers are "+" "+res;

var a=10;
var b=50;
var res=b/a;
var info=document.getElementById("info3");
info.innerHTML="the division of two numbers are "+" "+res;

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