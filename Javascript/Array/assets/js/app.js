var cl=console.log;

var a=[10,20,30,40];


console.log(a);
var info=document.getElementById("info2");
info.innerHTML=a;

//to update an array

a[3]=50;
console.log(a);
var info=document.getElementById("info3");
info.innerHTML=a;
// to get an random index 
var getage=a[3];
console.log(getage);
var info =document.getElementById("info4");
info.innerHTML=getage;

// to delete an element from array
delete a[3];
console.log(a);
var info=document.getElementById("info5");
info.innerHTML=a;

a[4]="50";

var info=document.getElementById("info");
info.innerHTML=a;



var skills=["Html","Css","Js","Jquery","Bootstrap","Saas","Angular"];
skills[skills.length-1]="javascript";

console.log(skills);
var info=document.getElementById("info6");
info.innerHTML=skills;

var getSkills=skills[5];
console.log(getSkills);

skills[4]="React";
console.log(skills);

delete skills[3];
console.log(skills);

console.log(skills[4]);

var info1=document.getElementById("info1");
info1.innerHTML=skills;


for(var i=0;i<skills.length;i++){
    document.write(skills[i]);
}

// Array Methods

var array=['html5','CSS','JS','Angular'];
cl(array);

// Join Method

var str=array.join('');
cl(str);

var str1=array.join(" ");
cl(str1);

var str2=array.join(",");
cl(str2);

var str3=array.join(" ");
cl(str3);


// toString 

var str4=array.toString();
cl(str4);

// pop
var str5=array.pop();
cl(str5);
cl(array)

var str6=array.pop();
cl(str6);

// push

var str7=array.push("Angular 17");
cl(str7);

var str8=array.push("React");
cl(str8);

// shift

var str9=array.shift();
cl(str9);

var str10=array.shift();
cl(str9);

// unshift

var str11=array.unshift("HTML5");
cl(str11);

var str12=array.unshift("CSS3");
cl(str12);

// concating Array
var skills1=["html","css","sass"];
var skills2=["js","ang","react"];
var skills3=["node","express"];

var string=skills1.concat(skills2,skills3);
cl(string);

// splice

var skill=skills1.splice(1,1);
cl(skill);

var skill01=skills2.splice(2,1);
cl(skill01);

var skill001=skills2.splice(1,2,"bootstrap","JS");
cl(skill001);

var skillls=skills1.reverse();
cl(skillls);

// sort

var num=[1,100,300,2,356,345,3];
var sr=num.sort();
cl(sr);

var fruits=['apple','mango','jackfruit','kiwi'];
var fr=fruits.sort();
cl(fr);



