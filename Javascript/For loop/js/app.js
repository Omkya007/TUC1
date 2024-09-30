cl=console.log;

for ( var i=0; i<=5;i++){
   cl(i);
  document.write(i+" ");  

}
document.write("<hr>");

for( var i=0;i<=15;i++){
    cl(i);
    document.write(i+" ");
}
document.write("<hr>");

for(var i=0;i<=15;i++){
    if(i%2==0){
       cl(i);
       document.write(i+" ");
    }
}
document.write("<hr>");

for(i=0;i<=100; i++){
    if(i%2==0 && i%3==0){
        cl(i);
        document.write(i+" ");
    }
}
document.write("<hr>");

