const cl=console.log;

const info=document.getElementById("info");
// cl(info);

info.classList.remove("text");
info.classList.add("alert");
info.classList.add("alert-primary");
cl(info);

const info1 = document.getElementById("info1");

info1.classList.remove("textlist");
info1.classList.add("alert");
info1.classList.add("alert-success");

const info2=document.getElementById("info2");

info2.classList.remove("textarray");
info2.classList.add("alert");
info2.classList.add("alert-danger");


