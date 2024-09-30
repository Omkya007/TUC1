cl=console.log;

var str01="hello";
var str001=str01.length;
cl(str001);

// var str="Hello Im OM";
// var str1=str.length;
// cl(str1);

// Replace

var str1="Welcome to the world of Webdev";
var str10=str1.replace(/Webdev/i,"Js");
cl(str10);

var stra="Welcome to the world of JS and JS and Js";
var stra1=stra.replace(/Js/ig,"Html");
cl(stra1);

// touppercase //tolowercase

var strb="OMKAR KHOT";
var strb1=strb.toLowerCase();
cl(strb1);

var strb01="omkar khot";
var strb2=strb01.toUpperCase();
cl(strb2);

// Concat 
var st="Hi Myslef Om";
var st01="ME and Myslef";
var st1=st.concat(st01);
cl(st1);

var s=st+" "+st01;
cl(s);

// Trim removes the white spaces

var s1="   Hi Me and Myself   ";
var s2=s1.trim();
cl(s2);

// IndexOf

vars0="Hi Welcome to World of JavaScript";
cl(vars0.charAt(6));

vars01="Hi welcome to JavaScript";
cl(vars01);

vars00=vars01.indexOf("welcome");
cl(vars00);

vars001="Hi How are you";
cl(vars001);

vars002=vars001.indexOf("are");
cl(vars002);

var s001="Very soon As Soon as Possible";
var s20=s001.indexOf("As");
cl(s20);

// String methods to extract string

// slice

var a="How many are there in an box";
var ab=a.slice(1,5);
//var b=a.slice(2,8);
cl(ab);

var a1="Hi whatsapp how's going on";
var b1=a1.slice(-3,-5);
cl(b1);

var a2="Hey Are You a frontend Developer";
var b2=a2.slice(4,8);
cl(b2);

// Substring

var sub="Hey Are You a frontend Developer";
var sub1=sub.substring(3,10);
cl(sub1);

var sub01="Hi whatsapp how's going on";
var sub001=sub01.substring(4,9);
cl(sub001);

var su="Hey Hi Where were you";
var sa=su.substring(4,9);
cl(sa);


// to convert string to array
 
var skills="Hi Myslef Om and Im a frontend Developer";
var skills1=skills.split("");
cl(skills1);

var skills01="Hi Myslef Om and Im a frontend Developer";
var skills001=skills01.split(" ");
cl(skills001);

var skills01="Hi Myslef Om and Im a frontend Developer";
var skills001=skills01.split(",");
cl(skills001);

