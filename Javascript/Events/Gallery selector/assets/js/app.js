const cl=console.log;

const selectedColor=document.getElementById("selectedColor");
const alldiv=[...document.querySelectorAll('.all')];


const oncolorChange=(eve)=>{
  // cl(eve.target.value)
  let getClassName=eve.target.value
  alldiv.forEach(div=>{
    div.classList.add('d-none')
  })

  let selectedDiv=[...document.getElementsByClassName(getClassName)];
  
  selectedDiv.forEach(div=>{
    div.classList.remove('d-none')
  })
  
}









selectedColor.addEventListener('change',oncolorChange)