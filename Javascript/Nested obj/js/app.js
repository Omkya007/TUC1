

var person1={

    fname:"Om",
    lname:"Khot",
    age:54,
    gender:"male",
    child:{
        fname:"sam",
        lname:"khot",
        age:24,
        gender:"male",
        grandchild:{
            fname:"joey",
            lname:"khot",
            age:2,
            gender:"male"
        }
    }


};
var result="Myself "+person1.fname+" "+person1.lname+" I'm "+" "+person1.age+" years old and I have a child whose name is "+person1.child.fname+" "+
person1.child.lname+" he is "+person1.child.age+" years old ,he has son whose name is "+person1.child.grandchild.fname+" "+person1.child.grandchild.lname+" and he is "+person1.child.grandchild.age+" years old.";

var info=document.getElementById("info");
info.innerHTML=result;

var person2={

    fname:"Om",
    lname:"Khot",
    age:60,
    gender:"male",
    child:{
        fname:"sam",
        lname:"khot",
        age:34,
        gender:"male",
        grandchild:{
            fname:"samuel",
            lname:"khot",
            age:4,
            gender:"male"
        }
    }


};

var result="Myself "+person2.fname+" "+person2.lname+" I'm "+" "+person2.age+" years old and I have a child whose name is "+person2.child.fname+" "+
person2.child.lname+" he is "+person2.child.age+" years old ,he has son whose name is "+person2.child.grandchild.fname+" "+person2.child.grandchild.lname+" and he is "+person1.child.grandchild.age+" years old.";

var info=document.getElementById("info-1");
info.innerHTML=result;

var person3={

    fname:"Reena",
    lname:"Khot",
    age:60,
    gender:"female",
    child:{
        fname:"ravi",
        lname:"khot",
        age:34,
        gender:"male",
        grandchild:{
            fname:"juhi",
            lname:"khot",
            age:4,
            gender:"female"
        }
    }


};

var result="Myself "+person3.fname+" "+person3.lname+" I'm "+" "+person3.age+" years old and I have a child whose name is "+person3.child.fname+" "+
person3.child.lname+" he is "+person3.child.age+" years old ,he has daughter whose name is "+person3.child.grandchild.fname+" "+person3.child.grandchild.lname+" and she is "+person3.child.grandchild.age+" years old.";

var info=document.getElementById("info-2");
info.innerHTML=result;

person1.child.fname="Ramesh";
console.log(person1.child.fname);

person2.child.grandchild.lname="Sharma";
console.log(person2.child.grandchild.lname);

delete person1.child.age;
