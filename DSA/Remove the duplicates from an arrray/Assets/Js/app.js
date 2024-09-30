const cl=console.log;

let nums=[10,12,30,20,40,20,40,50,70,80];

let s1=new Set(nums); //Set is collection where duplicates are not allowed.
cl(s1);

const duplicate=(dup)=>{
    let s1=new Set(dup)
    return s1;
}
cl(duplicate(nums));


// for each
let uniqueArr=[];

nums.forEach(num=>{
    if(!uniqueArr.includes(num)){
        uniqueArr.push(num)
    }
})
cl(uniqueArr);

// function of for loop

const dup=(arr)=>{
    let uniqueArr=[];
    nums.forEach(num=>{
        if(!uniqueArr.includes(num)){
            uniqueArr.push(num)
        }
        
    })
    return uniqueArr;
   
}
cl(dup(nums));

// using indexof method
 nums=[10,12,30,20,40,20,40,50,70,80];

const removeDup=(arr)=>{
    let uniqueArr=[];
    arr.forEach(num=>{
        if(uniqueArr.indexOf(num)===-1){
            uniqueArr.push(num)
        }
    })
    return uniqueArr
}
cl(removeDup(nums));


nums=[10,12,30,20,40,20,40,50,70,80];

 uniqueArr=[];

 for(let i=0;i<nums.length;i++){
    let uniquenum=true;

    for(let j=0;j<uniqueArr.length;j++){
        if(nums[i]===uniqueArr[j]){
            uniquenum=false;
            break;
        }
    }
    if(uniquenum){
        uniqueArr.push(nums[i])
    }
 }
 cl(uniqueArr)

