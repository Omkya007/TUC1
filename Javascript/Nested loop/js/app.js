cl=console.log;


for(var a=1;a<=5;a++){
    for(b=1;b<=a;b++){
        cl(b);
        document.write(b+" ");
    }
    document.write("<hr>");
}

for(var a=1;a<=5;a++){
    for(b=1;b<=6-a;b++){
       document.write(b+" ");
    }
    document.write("<hr>");
}

for(a=1;a<=5;a++){
    for(b=1;b<=a;b++){
        document.write(a+" ");
    }
    document.write("<hr>");
}

for(a=5;a>=1;a--){
    for(b=0;b<a;b++){
        document.write(a+" ");
    }
    document.write("<hr>");
}

