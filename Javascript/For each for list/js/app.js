 const cl=console.log;

let skills=["Html","Css","JS","Angular","Jquery"];

// for loop
let resu=`<ul class="list-group">`;

for(let i=0;i<skills.length;i++){
    resu+=`<li class="list-group-item"> I like ${skills[i]}
    </li>`;
}
resu+=`</ul>`;
cl(resu);

let resu1=document.getElementById("set");
resu1.innerHTML=resu;


// for each
let result=`<ul class="list-group">`;

skills.forEach(function(arr){
    result+=`<li class="list-group-item">I love ${arr}</li>`;
})
result+=`</ul>`;
cl(result);
let str1=document.getElementById("set1");
 str1.innerHTML=result;
 

// arrow with for each
 let res=`<ul class="list-group">`;
 skills.forEach(arr1=>res+=`<li class="list-group-item">I love ${arr1}</li>`);
 res+=`</ul>`;
 let str=document.getElementById("sets");
 str.innerHTML=res;


let books=["Jim Corbett","Daily Dose","Henry the blind"];

// for loop 

let out=`<ul class="list-group">`;

for(let i=0;i<books.length;i++){
    out+=`<li class="list-group-item"> i have listed books ${books[i]} </li>`;
}
out+=`</ul>`;
cl(out);
let output=document.getElementById("sets1");
output.innerHTML=out;

// for each

let result01=`<ul class="list-group">`;

books.forEach(function(out){
    result01+=`<li class="list-group-item">I love ${out}</li>`;
})
result01+=`</ul>`;
cl(result01);
let str2=document.getElementById("sets2");
 str2.innerHTML=result01;


// for each with arrow

let output1=`<ul class="list-group">`;

books.forEach(arr01=>output1+=`<li class="list-group-item">I love ${arr01}</li>`);
output1+=`</ul>`;

let strg=document.getElementById("sets3");
strg.innerHTML=output1;


let movies=["Spiderman","Dhoom","Veer"];

// for loop
let bx=`<ul class="list-group">`;

for(let i=0;i<movies.length;i++){
    bx+=`<li class="list-group-item">I love ${movies[i]}</li>`;
}
bx+=`</ul>`;
cl(bx);
let mv=document.getElementById("sets11");
mv.innerHTML=bx;

// for each 

let bx1=`<ul class="list-group">`;

movies.forEach(function(box){
    bx1+=`<li class="list-group-item">I love ${box}</li>`;
})
bx1+=`</ul>`;
cl(bx1);
let mv1=document.getElementById("sets12");
mv1.innerHTML=bx1;

// for each with arrow

let bx2=`<ul class="list-group">`;
movies.forEach(box1=>bx2+=`<li class="list-group-item">I love ${box1}</li>`);
bx2+=`</ul>`;
cl(bx2);
let mv2=document.getElementById("sets13");
mv2.innerHTML=bx2;


 




 