const cl=console.log;

let info=document.getElementById("info");
let info2=document.getElementById("info2");
let info3=document.getElementById("info3");

info.innerHTML="JAVASCRIPT";

let img=info.classList;
cl(img);

cl(info.className);

let image=[...img];
cl(image);

let images=info2.className;
cl(images);

let src=[...images];
cl(src)

src[0]='q';
cl(src);

cl(info3.getAttribute('title'));
cl(info3.getAttribute('id'));
cl(info3.getAttribute('class'));


info3.setAttribute('title','imagehover');
info3.setAttribute('class','hover');
cl(info3.getAttribute('class'));

let imgsrc="https://source.unsplash.com/random/200x200?sig=1";
info3.setAttribute('src','imgsrc');





