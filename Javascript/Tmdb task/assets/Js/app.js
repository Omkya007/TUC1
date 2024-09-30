const cl=console.log;
 const movieContainer=document.getElementById("movieContainer");

let result=``;

movieArray.forEach(movie =>{
    result+=`<div class="col-md-3 mb-4">
<div class="card ">
    <figure class="movieCard">
        <img  class="movieImg" src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" alt="" title=""> 
        <figcaption>
            <div class="titleinfo text-white p-2">
                <div class="row">
                    <div class="col-10">
                        <h2>${movie.title}</h2>
                    </div>
                    <div class="col-2 align-self-center">
                        <span class="bg-success p-2">${movie.vote_average}/span>
                    </div>
                </div>
                
            </div>
            <div class="overview bg-white p-4">
                <h5>Overview</h5>
                <p>${movie.overview}</p>
            </div>
        </figcaption>
    </figure>
</div>
</div>`});
cl(result);
movieContainer.innerHTML=result;




