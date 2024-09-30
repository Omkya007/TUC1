const cl=console.log;

const username=document.getElementById("username")
const bgColor=document.getElementById("bgColor")

const body=document.querySelector("body")


const onblur=(eve)=>{
  eve.target.style.border="1px solid"

}
const onfocus=(eve)=>{
  eve.target.style.border="3px solid red"


}
const onkeydown=(eve)=>{
 cl(eve.target.value)

}
const onChange= eve => {
  let bgColorval=eve.target.value;
  cl(bgColorval)
  body.style.backgroundColor=bgColorval;
}





username.addEventListener('keyup',onkeydown)
username.addEventListener('blur',onblur)
username.addEventListener('focus',onfocus)
bgColor.addEventListener('change',onChange)