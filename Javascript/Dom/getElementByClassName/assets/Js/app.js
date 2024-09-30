const cl=console.log;

let info=document.getElementsByClassName("info");
cl(info);

let str=[...info];
cl(str);

str[0].innerHTML="Hey Myself Omkar and I'm a software Engineer";
str[0].style.backgroundColor="red";

let info1=document.getElementsByClassName("info1");
cl(info);

let str1=[...info1];
cl(str1);

str1[0].style.color="orange";
str1[0].style.backgroundColor="pink";

let ls=document.getElementsByClassName("list-group-item");
cl(ls);

let list=[...ls];
cl(list);

list.forEach(ele=>{
   ele.style.backgroundColor="skyblue";
   ele.style.fontSize="30px";
   ele.style.color="white";
})



