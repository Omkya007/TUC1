const cl=console.log;
let img=document.getElementById("imgArray");




var imgArray = [
    {title : "City", imgUrl :'https://source.unsplash.com/random/?city'},
    {title : "fashion", imgUrl :'https://source.unsplash.com/random/?fashion'},
    {title : "foodanddrink", imgUrl :'https://source.unsplash.com/random/?foodanddrink'},
    {title : "nature", imgUrl :'https://source.unsplash.com/random/?nature'},
    {title : "javascript", imgUrl :'https://source.unsplash.com/random/?javascript'},
    {title : "flowers", imgUrl :'https://source.unsplash.com/random/?flower'},
    {title : "birds", imgUrl :'https://source.unsplash.com/random/?birds'},
    {title : "angular", imgUrl :'https://source.unsplash.com/random/?angular'},
    {title : "html", imgUrl :'https://source.unsplash.com/random/?html'},
    {title : "css", imgUrl :'https://source.unsplash.com/random/?css'},
    {title : "bootstrap", imgUrl :'https://source.unsplash.com/random/?bootstrap'},
    {title : "Web", imgUrl :'https://source.unsplash.com/random/?web'},
];

let result='';
for(let i=0;i<imgArray.length;i++){
    result+=`<div class="col-md-4 mb-4">
    <div class="card imgcard">
        <div class="card-header">
            <h3 class="m-0 text-uppercase">${imgArray[i].title}</h3>
        </div>
        <div class="card-body">
            <img src="${imgArray[i].imgUrl}" alt="${imgArray[i].title}" title="${imgArray[i].title}">
        </div>
        <div class="card-footer">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
        </div>
    </div>
</div>`;
}
cl(result);
img.innerHTML=result;