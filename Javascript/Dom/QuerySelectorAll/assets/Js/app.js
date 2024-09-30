const cl=console.log;

let info=document.querySelectorAll("#info");
cl(typeof info);

info.forEach(ele=>{
    ele.style.backgroundColor="blue"
})
cl(info);


let info1=document.querySelectorAll(".info1");
cl(info1);

info1.forEach(ele=>{
    ele.innerHTML="HI ME AND MYSELF";
})
cl(info1);

let info3=document.querySelectorAll("#two");
cl(info3);

info3.forEach(ele=>{
    ele.style.fontSize="23px";
})
cl(info3);

let info4=document.querySelectorAll("li");
cl(info4);

info4.forEach(ele=>{
    ele.style.color="orange";
})
cl(info4);


