const cl=console.log;

const tabhead=[...document.querySelectorAll('.tab-heading li')];
const tabContent=[...document.querySelectorAll('.tab-content')];
// tabhead is array of document object so we need to iterate the array

const onTab =(eve) =>{
  document.querySelector('.tab-heading li.active').classList.remove('active')
  eve.target.classList.add('active')
  let getId=eve.target.getAttribute('data-id')
  document.querySelector('.tab-content.active').classList.remove('active')
  document.getElementById(getId).classList.add('active')
}








tabhead.forEach(li=>{
  cl(li)
  li.addEventListener("click",onTab)
})







