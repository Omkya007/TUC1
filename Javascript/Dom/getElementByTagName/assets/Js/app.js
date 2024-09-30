const cl=console.log;

let info=document.getElementsByTagName("p");
cl(info);

let tag=[...info];
cl(tag);

tag[0].innerHTML="Now here I am in a hospice all on my own. As I lay here in a hospice on my deathbed. Time waits for no one, we have all been told. Make the most of every minute and hour, never waste a day.";

let info1=document.getElementsByTagName("li");
cl(info1);

let tagn=[...info1];
cl(tagn);

tagn.forEach(elem=>{
    elem.style.backgroundColor="purple";
});

let info2=document.getElementsByTagName("span");
cl(info2);

let tagn1=[...info2];
cl(tagn1);

tagn1[0].innerHTML="An HTMLCollection is a collection of document elements. A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes). HTMLCollection items can be accessed by their name, id, or index number. NodeList items can only be accessed by their index number.";
tagn1[0].style.color="orange";

