const cl=console.log;

let info=document.getElementById("info");
cl(info);

let inf=info.innerText;//it gives content inside the info obj without empty space
cl(inf);

let info1=document.getElementById("info1");
cl(info);

let inf1=info1.innerHTML;//it gives content inside the info obj with empty space and html element 
cl(inf1);

let info2=document.getElementById("info2");
cl(info2);

let ins=info2.textContent;//it gives content inside the info obj with empty space and html element 
cl(ins);

let info3=document.getElementById("info3");//to set an string in an given element using innerHTML.
cl(info3);

info3.innerHTML="I have Following Skills such as Frontend skills";
cl(info3);

let info4=document.getElementById("info4");//to set an string in an given element using textContent.
cl(info3);

info4.textContent="Hi Myslef Omkar Khot.";


