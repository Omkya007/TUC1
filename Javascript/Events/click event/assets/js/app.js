const cl=console.log;

const hidebtn=document.getElementById("hidebtn");
const showbtn=document.getElementById("showbtn");
const tgbtn=document.getElementById("toggle");
const box=document.getElementById("box");
const hideshowbtn=document.getElementById("hideshowbtn");

const hidebutton=()=>{
  box.classList.add('d-none');


    
}

const showbutton=()=>{
box.classList.remove('d-none');
}
const togglebtn=()=>{
  
    box.classList.toggle('d-none');
}


// function onhideshow(){
// // if(flag){
// //   hideshowbtn.innerHTML="Show Box"
  
  
// // }else{
// //   hideshowbtn.innerHTML="hide box"
  
  
// // }
// flag?hideshowbtn.innerHTML="Show Box":hideshowbtn.innerHTML="hide box"
// box.classList.toggle('d-none')
// flag=!flag


// }
let flag;

function onhideshow(event){
  // cl(this)
  if(flag){
   event.target.innerHTML='hide box'; 
  // this.innerHTML='show box'
  }else{
    event.target.innerHTML='show box';
    // this.innerHTML='hide box'
  }
  box.classList.toggle('d-none');
  flag=!flag

}




tgbtn.addEventListener('click',togglebtn)
hidebtn.addEventListener('click',hidebutton);
showbtn.addEventListener('click',showbutton);

hideshowbtn.addEventListener('click',onhideshow);