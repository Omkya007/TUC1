let fname="Om";
let lname="Khot";
let nativeplace="Kolhapur";
let profile="Engineer";

let res=`Hello Im ${fname} ${lname} ,and my nativeplace is ${nativeplace} and by profesion I'm ${profile}`;
let info=document.getElementById("info");
info.innerHTML=res;
console.log(res);

let fn="Om";
let ln="Khot";
let place="Puna";
let profession="Junior Software Engineer";

let result=`Hello Myself ${fn} ${ln} , and my nativeplace is ${place} and by profession I'm ${profession}`;

console.log(result);
let info1=document.getElementById("info1");
info1.innerHTML=result;

let person1={

    full:"Om",
   lastname:"Khot",
    native:"Belgaum",
    pro:"Frontend Developer"
};

let result1=`Hello myself ${person1.full} ${person1.lastname} , I live in Karnataka near ${person1.native} and by profession I'm ${person1.pro}`;
console.log(result1);
let info2=document.getElementById("info2");
info2.innerHTML=result1;

let skills={
    frontend:"Html",
    backend:" Java",
    scriptinglang:"javascript"

};

let result01=`Hi Im Omkar Khot having skills in ${skills.frontend} and ${skills.backend} and another scripting language as ${skills.scriptinglang}`;
 console.log(result01);
 let info3=document.getElementById("info3");
 info3.innerHTML=result01;

 let hobbies={
    indoor:"Carrom",
    outdoor:"football",
    extra:"bike riding"

 };

 let res01=`Hi Im  Omkar khot having hobbies in ${hobbies.indoor} and ${hobbies.outdoor} and ${hobbies.extra}`;
 console.log(res01);
 let info4=document.getElementById("info4");
 info4.innerHTML=res01;