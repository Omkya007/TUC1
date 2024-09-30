const cl=console.log;

let nums=[111,91,123,345,234,456,233];

cl(Math.max(...nums));

// in form of Function
const findmax=(arr)=>{
    return Math.max(...arr)
}
cl(findmax(nums))


// using for loop
let maxnum=[];

for(let i=0;i<nums.length;i++){
    if(nums[i]>=maxnum){
        maxnum=nums[i]

    }
    
}
cl(maxnum)

// In form of function

const findmax1=(arr)=>{
    let maxnum=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=maxnum){
            maxnum=arr[i]
        }
    }
    return maxnum
}
cl(findmax1(nums))