var cl=console.log;


let stdArr=[
    {
        fname:"Om",
        lname:"Strak",
        email:"Om@gmail.com",
        contact:12345
    },
    {
        fname:"Bruse",
        lname:"Wayne",
        email:"bruce@gmail.com",
        contact:123445
    },
    {
        fname:"Reva",
        lname:"Khan",
        email:"reva@gmail.com",
        contact:12345
    }
];

// for loop
var std=document.getElementById("std");
var resu2='';
for(var i=0; i<stdArr.length;i++){
   resu2+=`<tr>
              <td>${i+1}</td>
              <td>${stdArr[i].fname}</td>
              <td> ${stdArr[i].lname}</td>
              <td>${stdArr[i].email}</td> 
              <td> ${stdArr[i].contact} </td>
              </tr>`
}
cl(resu2);

std.innerHTML=resu2;

// for each

let result="";
stdArr.forEach(function(arr,index){
    result+=`<tr>
    <td>${index + 1}</td>
    <td>${arr.fname}</td>
    <td> ${arr.lname}</td>
    <td>${arr.email}</td> 
    <td> ${arr.contact} </td>
    </tr>`;
})
cl(result);
let st=document.getElementById("fool");
st.innerHTML=result;

// for each with arrow

let result1="";
stdArr.forEach((std,index)=>{
    result1+=`<tr>
    <td>${index + 1}</td>
    <td>${std.fname}</td>
    <td> ${std.lname}</td>
    <td>${std.email}</td> 
    <td> ${std.contact} </td>
    </tr>`;
})
cl(result1);
let sts=document.getElementById("fool1");
sts.innerHTML=result1;

var cars=[
    {
        carname:"BMW",
        carmodel:"1989",
        carprice:230000

    },
    {
        carname:"Mercerdes",
        carmodel:"1999",
        carprice:340000
    },
    {
        carname:"Audi",
        carmodel:"1959",
        carprice:200000
    }
];

// for loop

var info=document.getElementById("car");
var out="";
for(var i=0;i<cars.length;i++){
    out+=`<tr>
                <td>${i+1}</td>
                <td>${cars[i].carname} </td>
                <td>${cars[i].carmodel} </td>
                <td> ${cars[i].carprice}</td>
            </tr>`;
}

info.innerHTML=out;

// for each
let str="";

cars.forEach(function(car,index){
    str+=`<tr>
    <td>${index + 1}</td>
    <td>${car.carname} </td>
    <td>${car.carmodel} </td>
    <td> ${car.carprice}</td>
</tr>`;
})
cl(str);
let sout=document.getElementById("cars");
sout.innerHTML=str;

// for each with arrow

let strs=document.getElementById("car1");
let str1="";
cars.forEach((std1,index)=>{
    str1+=`<tr>
    <td>${index+1}</td>
    <td>${std1.carname} </td>
    <td>${std1.carmodel} </td>
    <td> ${std1.carprice}</td>
</tr>`;
})
cl(str1);
strs.innerHTML=str1;



var books=[
    {
        bookname:"HarryPotter",
        bookauthor:"JK rowling",
        bookprice:1200
    },
    {
        bookname:"Headson",
        bookauthor:"Luice",
        bookprice:2000
    },
    {
        bookname:"PrimeNews",
        bookauthor:"Shukla",
        bookprice:20001
    }

];

// for loop
var info1=document.getElementById("books");
var reso='';
for(var i=0;i<books.length;i++){
    reso+=`<tr>
            <td>${i+1}</td>
            <td>${books[i].bookname}</td>
            <td>${books[i].bookauthor}</td>
            <td>${books[i].bookprice}</td>
        </tr>`;
}
info1.innerHTML=reso;

// for each 
let str12="";
let sout1=document.getElementById("books1");

books.forEach(function(book,index){
    str12+=`<tr>
    <td>${index+1}</td>
    <td>${book.bookname} </td>
    <td>${book.bookauthor} </td>
    <td> ${book.bookprice}</td>
</tr>`;
})
cl(str12);

sout1.innerHTML=str12;

// for each with arrow
let str13=document.getElementById("books2");
let sout2="";
books.forEach((book1,index)=>{
    sout2+=`<tr>
    <td>${index+1}</td>
    <td>${book1.bookname} </td>
    <td>${book1.bookauthor} </td>
    <td> ${book1.bookprice}</td>
</tr>`;
})

cl(sout2);
str13.innerHTML=sout2;


