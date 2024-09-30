const cl=console.log;

let info=document.querySelector("#info");
cl(typeof info);

info.innerHTML="Hi How are you";

let info2=document.querySelector(".info1");
cl(typeof info2);

info2.style.backgroundColor="blue";

const info3=document.querySelector(".list-group-item");
cl(info3);

info3.innerText="Numbers";

const info4=document.querySelector("#two");
cl(info4);

info4.style.fontStyle="italic";

const info5=document.querySelector("#four");
cl(info5);

info5.style.backgroundColor="orange";
info5.innerText="Four are more";

const three=document.querySelector("#three");
cl(three);

three.style.fontSize="30px";
three.style.fontStyle="Roman";