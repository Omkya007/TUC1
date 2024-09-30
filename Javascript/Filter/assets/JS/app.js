const cl=console.log;

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

//  filter

let ages=[12,13,49,40,48,59];

let age=[];

for(let i=0;i<ages.length;i++){
    if(ages[i]>18){
        age.push(ages[i])
    }
    else{
        "Can't drive"
    }
    

}
cl(age);

let age1=[];

ages.forEach(age=>{
    if(age>=18){
        age1.push(age)
    }
})
cl(age1);

let ages1=ages.filter(age=>age>=18)
cl(ages1);
 
// even 

let Age=[12,13,49,40,48,59,39,30,40,20];

// for loop
let age01=[];

for(let i=0;i<Age.length;i++){
    if(Age[i]%2==0){
        age01.push(Age[i])
    }
}
cl(age01);

// forEach

let age001=[];
Age.forEach(age=>{
    if(age%2==0){
        age001.push(age)
    }
})
cl(age001);

// filter

let age0001=Age.filter(age=> age%2==0
)
cl(age0001);

// compcat="retail"
// for loop
let retailcomp=[];

for(let i=0;i<companies.length;i++){
    if(
        companies[i].category.trim().toLowerCase()==='retail'
    ){
        retailcomp.push(companies[i])
    }
}
cl(retailcomp);

// for Each

let retailcomp1=[];

companies.forEach(comp=>{
    if(comp.category.trim().toLowerCase()==='retail'){
        retailcomp1.push(comp)
    }
})
cl(retailcomp1);

// filter

let ret=companies.filter(comp=>{
    return comp.category.trim().toLowerCase()==='retail'
        
    
})
cl(ret);

// check if catg='retail'

let cat=[];
for(let i=0;i<companies.length;i++){
    if(companies[i].category.trim().toLowerCase().includes('retail')){
        cat.push(companies[i]);
    }
}
cl(cat);

let cat1=[];

companies.forEach(catg=>{
    if(catg.category.trim().toLowerCase().includes('retail')){
        cat1.push(catg)
    }
})
cl(cat1);

let cat2=companies.filter(catg=>{
    return catg.category.trim().toLowerCase().includes('retail')
})
cl(cat2);

// comp whose tenure is atleast 7 years

let year7=[];

for(let i=0;i<companies.length;i++){
    if(companies[i].end-companies[i].start>=7){
        year7.push(companies[i])
    }
}
cl(year7);

// for each

let year71=[];

companies.forEach(comp=>{
    if(comp.end-comp.start>=7){
        year71.push(comp)
    }
})
cl(year71);

// filter

let year72=companies.filter(comp=>{
    return comp.end-comp.start>=7
})
cl(year72);

// companies between 80's
// for loop

let comp80=[];
for(let i=0;i<companies.length;i++){
    if(companies[i].start>=1980 && companies[i].start<=1989){
        comp80.push(companies[i])
    }
}
cl(comp80);

// for each

let comp801=[];

companies.forEach(comp=>{
    if(comp.start>=1980 && comp.start<=1989){
        comp801.push(comp);
    }
})
cl(comp801);

// filter

let comp80s=companies.filter(comp=>{
    return (comp.start<=1989 && comp.start>=1980)
})
cl(comp80s)



// Array of company with 80s and catg =retail or finance

let comp80s1=companies.filter(comp=>{
    return (comp.start>=1980 && comp.start<=1989 )&&((comp.category.trim().toLowerCase().includes("retail"))||(comp.category.trim().toLowerCase().includes('finance')))

})
cl(comp80s1);

ages=[5,10,15,20,50];

let sqrt=ages.filter(age=>age%2==0)
              .map(age=>Math.sqrt(age))

              cl(sqrt);


let compi=companies.filter(comp=>
    comp.start>=1980 && comp.start<=1989)
    .map(comp=>({
        compName:comp.name,
        compCatg:comp.category
    }))

cl(compi);


let arr=companies.filter(comp=>comp.category.trim().toLowerCase().includes('retail'))
                    .map(comp=>({
                        compName:comp.name,
                        complife:`${comp.start}-${comp.end}`
                    }))


                    cl(arr);


let obj1=companies.find(comp=>{
    return comp.id===5
})
cl(obj1);

let getid=companies.findIndex(comp=>{
    return comp.id===5
    
})
cl(getid);


