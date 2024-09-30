var cl=console.log;

var skills=["Html","CSS","JS","Ang","React"];
cl(skills);

var res=`<ul class="list-group">`;
for(var i=0; i<skills.length;i++){
    res+=`<li class="list-group-item"> I know the following skills ${skills[i]} </li>`;
}
res+=`</ul>`;
cl(res);
var skillset=document.getElementById("skillset");
skillset.innerHTML=res;

var hobbies=["Racing","Riding ","Swimming","Walking"];
cl(hobbies);

var result=`<ul class="list-group">`;
for(var i=0; i<hobbies.length;i++){
    result+=`<li class="list-group-item"> I know the following skills ${hobbies[i]} </li>`;
}
result+=`</ul>`;
cl(result);
var info=document.getElementById("info");
info.innerHTML=result;

var cars=["Mercedes","BMW","Audi","Porsche","Rolls Royce"];
cl(cars);

var result1=`<ul class="list-group">`;
for(var i=0;i<cars.length;i++){
    result1+=`<li class="list-group-item"> I have listed cars ${cars[i]} </li>`;
}
result1+=`</ul>`;
cl(result1);
var carsinfo=document.getElementById("start");
carsinfo.innerHTML=result1;

var universe=["Moon","Sun","Jupiter","Pluto"];
cl(universe);


 var res2=`<ul class="list-group">`
for(var i=0;i<universe.length;i++){
    res2+=`<li class=list-group-item> The galaxy consits of listed planets ${universe[i]} </li>`;

}
res2+=`</ul>`;
cl(res2);
var uni=document.getElementById("galaxy");
uni.innerHTML=res2;




