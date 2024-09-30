var cl=console.log;
var person1={
    fname:"Om",
    lname:"Khot",
    age:23,
    gender:"male",
    fullname:function (){
        return person1.fname+person1.lname;
    }
    
    
};
console.log(person1.fullname());


var result="Myself "+" "+person1.fname+" "+person1.lname+" and I'm "+person1.age+" "+"years old";
cl(result);
var info=document.getElementById("info-1");
info.innerHTML=(result);

var person2={
    fname:"Om",
    lname:"Khot",
    age:23,
    profession:"Engineer",
    persons:function(){
        return person2.age+" "+person2.lname;
    }

};
console.log(person2.persons());

var result="Myself "+" "+person2.fname+" "+person2.lname+" "+" and I'm "+person2.age+" "+"years old "+"by profesion Im a "+person2.profession; 
var info=document.getElementById("info-2");
info.innerHTML=(result);

var person3={
    fname:"Sam",
    lname:"Khot",
    age:25,
    profession:"Farmer",
    desc:function(){
        return person3.fname+" "+person3.lname;
    }

};
console.log(person3.desc());
var result ="Myself "+" "+person3.fname+" "+person3.lname+" "+"and I'm "+person3.age+" "+" years old "+" by profession I'm a "+person3.profession;
var info=document.getElementById("info-3");
info.innerHTML=result;

person1.age=23;
console.log(person1.age);

delete person1.profession;

var person3={
    fname:"Sam",
    lname:"Khot",
    age:25,
    profession:"Farmer",
    desc:function(){
        console.log(this);
        return person1.fname;
    }

};
console.log(person1.function());

