const cl=console.log;


//Destructuring of arrays


let person ={
    fname:"Om",
    lname:"Khot",
    contact:784857676,
    profession:"Software Engineer"
}


console.log(person.fname);


// let fname=person.fname;
// let lname=person.lname;
// let Contact=person.Contact;
// let profession=person.profession;


// cl(fname,lname,Contact,profession);


// the order is not important here
let {lname,fname,contact,profession,age=34}=person;
cl(fname,lname,contact,profession,age);

//here fname dec is assigned to personfname
let {fname:personFname,lname:Lname}=person

cl(personFname,Lname);



let object={
    training:"Web",
    linka:{
        social:{
            facebook:"fb"
        },
        web:{
            blogs:"blog",
            website:"website"
        }
    }
}


// let {blogs,website}=object.linka.web;

// cl(blogs,website);


let {training ,linka:{web:{website,blogs}}}=object
cl(training,website,blogs)


let person1 ={
    fname:"Om",
    lname:"Khot",
    contact:784857676,
    profession:"Software Engineer"
}
const greet=({fname,lname})=>{
    cl(`Hello Im ${fname} ${lname}`)
}
greet(person1)


//destructing of array

let info=["om khot","om@gmail.com","sotware",57578875];


// let fname1=info[0];
// let lname1=info[1];
// let profession1=info[2];
// let contact1=info[3];

//order of declaration is imp
let [fname1,lname1,profession1,contact1]=info;
cl(fname1,lname1,profession1,contact1);


let cricket="Cricket KapilDev 1984"

let [sport,Name,year]=cricket.split(',')
cl(sport,Name,year);


let x=10;
let y=20;

[y,x]=[x,y];
cl(x,y);

let a="om";
let b="khot";

[a,b]=[b,a];
cl(a,b);


//spread operator

let ab=[..."pizza"]
cl(ab);


let feature=["Deep","Puska"];
let special=["Indian","Chinese"];

let all=[...feature,...special]
cl(all);

let clone=[...feature];//cloning the array with new reference
clone.pop();
cl(clone);
cl(feature);


//cloning the objects

let circle={
    rad:10,
}

//let c2=circle;


let c2={
    ...circle
}
cl(circle);
cl(c2);


c2.rad=200;
cl(c2);
cl(circle);


//concating the obj

let p={
    fname:"jhon"
}

let q={
    lname:"doe"
}

let e={
    ...p,
    ...q
}
cl(e);


const obj1={
    a:1,
    b:2
}

const obj2={
    a1:3,
    b1:4
}

let res={
    ...obj1,
    ...obj2
}

cl(res);

