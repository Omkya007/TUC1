let list =["Html","Css","Javascript","ANgular"];

var cl=console.log;

let result=`<ul class="list-group">`;
for(let i=0;i<list.length;i++){
   result+=`<li class="list-group-item">I have following ${list[i]} </li>`

}
result+=`</ul>`;
cl(result);

let info=document.getElementById("info");
info.innerHTML=result;

// for each ""
let lists=["ENglish","History","Maths","Geography"];

let info1=document.getElementById("info1");

let res=`<ul class="list-group">`;
lists.forEach(ele =>{
    res+=`<li class="list-group-item">I love  following ${ele} </li>`;
});
cl(res);
info1.innerHTML=res;

// for loop for table
let tab=[
    {
        fname:"Om",
        lname:"khot",
        contact:123456
    },
    {
        fname:"Omi",
        lname:"khota",
        contact:1234564
    },
    {
        fname:"Omy",
        lname:"khoti",
        contact:1234565
    }
];

let resu=``;
for(let i=0;i<tab.length;i++){
    resu+=`<tr>
            <td>${i+1}</td>
            <td> ${tab[i].fname}</td>
            <td> ${tab[i].lname}</td>
            <td>${tab[i].contact}</td>
            `;
}
resu+=`</tr>`;
cl(resu);
let info03=document.getElementById("in");
info03.innerHTML=resu;

let std=[
    {
        fname:"Om",
        class:12,
        region:"Ind"
        
    },
    {
        fname:"Sam",
        class:10,
        region:"Ind"
        
    },
    {
        fname:"John",
        class:6,
        region:"Ind"
        
    }
];

let out=``;
std.forEach((td,i)=>{
    out+=`<tr>
    <td>${i+1}</td>
    <td>${td.fname}</td>
    <td>${td.class}</td>
    <td>${td.region}</td>
    `;

});
cl(out);
let info01=document.getElementById("info4");
info01.innerHTML=out;
