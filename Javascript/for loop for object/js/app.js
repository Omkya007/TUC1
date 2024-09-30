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


var comp=[
    {
        Cname:"Cognizant",
        Clocation:"NJ,NewYork",
        Corigin:"USA"
    },
    {
        Cname:"Accenture",
        Clocation:"Bangalore",
        Corigin:"Dublin"
    },
    {
        Cname:"Hcl",
        Clocation:"Bangalore",
        Corigin:"Noida"
    }
];

var info2=document.getElementById("company");
var output='';
for(var i=0;i<comp.length;i++){
    output+=`<tr>
                <td>${i+1}</td>
                <td>${comp[i].Cname}</td>
                <td>${comp[i].Clocation}</td>
                <td>${comp[i].Corigin}</td>
           </tr>`;
}
info2.innerHTML=output;


let colleges=[
    {
        strname:"CSE",
        passper:"35 %",
        noofseats:"50"

    },
    {
        strname:"ECE",
        passper:"35 %",
        noofseats:"50"

    },
    {
        strname:"MECH",
        passper:"35 %",
        noofseats:"50"

    },

];

const com=document.getElementById("college");
 let result01="";

 for(let i=0;i<colleges.length;i++){
    result01+=`<tr>
                <td>${i+1}</td>
                <td>${colleges[i].strname}</td>
                <td>${colleges[i].passper}</td>
                <td>${colleges[i].noofseats}</td>
  </tr>`
 }
 cl(result01);
 com.innerHTML=result01;

 let bikes=[
    {
       Bname:"BMW",
        Bmodel:"2020",
        Bprice:"50 Lakhs"

    },
    {
        Bname:"Ducati",
        Bmodel:"2024",
        Bprice:"56 Lakhs"

    },
    {
        Bname:"Harley Davidson",
        Bmodel:"2018",
        Bprice:"30 Lakhs"
    },

];

const bike=document.getElementById("sector");
 let result001="";

 for(let i=0;i<bikes.length;i++){
    result001+=`<tr>
                <td>${i+1}</td>
                <td>${bikes[i].Bname}</td>
                <td>${bikes[i].Bmodel}</td>
                <td>${bikes[i].Bprice}</td>
  </tr>`
 }
 cl(result001);
 bike.innerHTML=result001;
 