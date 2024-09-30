const cl=console.log;

let nums=[10,20,30,40];

let num=nums.map(numr=>{

    return numr*2;
})
cl(num);

let numus=nums.map(ele=>{
    return ele+ele;
})
cl(numus);

let n=nums.map(ele=>{
    return ele/ele;
})
cl(n);

let sqrt=nums.map((ele)=>{
    return Math.sqrt(ele);
})
cl(sqrt);

// Companies

companies = [
    { name: "Company One", id: 1, category: "finAnce", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: " Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
 ];

 let comp=[];

 for(let i=0;i<companies.length;i++){
    comp.push(companies[i].name);

 }
 cl(comp);

 let comp1=[];

 companies.forEach(comp=>{
   comp1.push( comp.name);
 })
 cl(comp1);

 let compa=companies.map(ele=>{
    return ele.name
 })
 cl(compa);

 let comp2=companies.map(comp=>{
    return comp.name;
 })
 cl(comp2);

//  Catg:"category", compName:"Compname";
// for loop
let compn=[];

for(let i=0;i<companies.length;i++){
    let obj={
        compName:companies[i].name,
        Catg:companies[i].category
    }
    compn.push(obj);
}
cl(compn);

// forEach

let compn1=[];

companies.forEach(comp=>{
    let obj1={
        compName:comp.name,
        Catg:comp.category
    }
    compn1.push(obj1);
})
cl(compn1);

// map
let compn2=companies.map(comp=>{
    return {
        compName:comp.name,
        Catg:comp.category
    }
})
cl(compn2);

let Compcat=companies.map(ele=>{
    return obj={
        compname:ele.name,
        compcat:ele.category
    }
})
cl(Compcat);


// Complifespan :1978-2003 ,Compname:name
// for loop
let Complife=[];

for(let i=0;i<companies.length;i++){
    let obj2={
        compName:companies[i].name,
        compnlife:`${companies[i].start}-${companies[i].end}`
    }
    Complife.push(obj2);
}
cl(Complife);

// for each

let complife1=[];

companies.forEach(comp=>{
    let obj3={
        compName:comp.name,
        Complife:`${comp.start}-${comp.end}`
    }
    complife1.push(obj3);
})
cl(complife1);

// map

let complife3=companies.map(comp=>{
    return{
        compName:comp.name,
        Complife:`${comp.start}-${comp.end}`
    }
})
cl(complife3);

// CompDur=22,Compname:Name
// for loop

let Compdur=[];

for(let i=0;i<companies.length;i++){
    let ob={
        compName:companies[i].name,
        compdur:companies[i].end-companies[i].start
    }
    Compdur.push(ob);
}
cl(Compdur);

// for each

let Compdur1=[];

companies.forEach(comp=>{
    let ob1={
        compName:comp.name,
        compDur:comp.end-comp.start
    }
    Compdur1.push(ob1);
})
cl(Compdur1);

// map
let compdur1=companies.map(comp=>{
    return{
        compName:comp.name,
        compDur:comp.end-comp.start
    }

})
cl(compdur1);



