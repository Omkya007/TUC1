const cl=console.log;

let str= 'I Love Javascript';

let rev = str.split('');
let rs = rev.reverse();
let reve = rs.join('');
cl(reve);


const str1 ="I have You";

const revString =str=> str.split("").reverse().join('');

cl(revString(str1));


let res = ''
for(let i =0;i<str1.length;i++){
    res = str1[i]+res;
}
cl(res);


const revS =(str)=>{
    let res = ""
    for(let i=0;i<str.length;i++){
        res=str[i]+res;
    }
    return res

}
cl(revS("I have you"))



//find largest number in js
nums =[1,23,34];
const largest =(arr)=>{
let lagest =arr[0];

for(let i=0 ;i<arr.length;i++){
    if(arr[i]>lagest)
        lagest=arr[i]
}
return lagest
}

cl(largest(nums));


//remove the duplicates

const num =[1,22,33,4,4,5,5,6,6];
const removeDup =(arr)=>{
    return [...new Set(arr)]
}


cl(removeDup(num))


const string ="abbbscccd";

const removS=(str)=>{
    return [...new Set(str)].join();
}

cl(removS(string))


// for loop

let uni =[1,2,3,4,4,5,5];

for(let i=0;i<str.length;i++){
    if(uni.indexOf(str[i])=== -1){
        uni+=str[i];
    }
}
cl(uni)


