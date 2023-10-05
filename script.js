let movies =[
  {
    name:"Aveangers end game",
    poster:"https://images-cdn.ubuy.co.in/63b7b107d4159432fb5ec817-avengers-infinity-war-movie-poster.jpg",
    rating:9.1
  
},
{
    name:"DARK",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavZL5-qqVSr4hDfnGQbKI5rcth5nmcro1Vw&usqp=CAU",
    rating:8.5

},
{
    name:"JOKER",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBHd5yjnhFjNKxZ9h2AkFH7t1LHu_JRPHyA&usqp=CAU",
    rating:8.9

},
{
    name:"LAGAAN",
    poster:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster-400x571.jpg",
    rating:8.8

},
{
    name:"THE BOY",
    poster:"https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
    rating:8.1

},
{
    name:"JOHN WICK",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirhnhk5wF2OfeBj-eMD75QHNNiVLz0e7DJg&usqp=CAU",
    rating:9.9

},

{
    name:"Stanger things",
    poster:" https://www.tallengestore.com/cdn/shop/products/stranger_things_10_f7c483ef-e935-4498-8d56-faef7923664c.jpg?v=1514020489",
    rating:8.1

},
{
    name:"Breaking bad",
    poster:"https://www.tallengestore.com/cdn/shop/products/BreakingBad-BryanCranston-WalterWhite-TVShowPoster4_00caeea5-1182-41ec-87ce-2ee2c9e208c3.jpg?v=1683604464 ",
    rating:8.1

},
{
    name:"THE WALKING DEAD",
    poster:" https://i.redd.it/ulas62ssfmf61.jpg",
    rating:8.1

},
{
    name:"THE  WITCHER",
    poster:" https://m.media-amazon.com/images/I/81TUfw3vc7L._AC_UF1000,1000_QL80_.jpg",
    rating:8.1

},
{
    name:"  ONE PIECE",
    poster:"https://static.animecorner.me/2023/08/one-piece-live-action-new-visual-august-31.jpg ",
    rating:8.1

},
{
    name:"GAME OF THRONES",
    poster:"https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg ",
    rating:8.1

},

];

function searchMovie()
{

 let movieName = document.getElementById('search').value;
 
  if (movieName!=="")
  {
    let result= movies.filter(function(movie)
    {
        return movie.name.toUpperCase().includes(movieName.toUpperCase())
    })
    displayMovies(result);


  }
  else{
    displayMovies(movies);
  }

}

function displayMovies(data)
{
 document.getElementById("movies").innerHTML=" ";

   let  htmlString =``;

   for(let i=0;i<data.length;i++)
   {

        
        htmlString = htmlString + `
        <div class="movie">
   <div class="overlay">

       <div class="video">

       </div>
       <div class="deatils">
           <h1>${data[i].name}</h1>
           <h2>${data[i].rating}</h2>
            <p>Ram Malek.Jhon Jacobas.Emma Stone</p>

       </div>

   </div>
   <img class="poster"
       src="${data[i].poster}"
       alt="poster">
</div> 
   `}
console.log(htmlString);
   document.getElementById("movies").innerHTML=htmlString;

}

displayMovies(movies);







// let movieDIV = document.createElement("div");
// movieDIV.classList.add("movie");

// let overlayDIV = document.createElement("div");
// overlayDIV.classList.add("overlay");

// movieDIV.appendChild(overlayDIV)

// console.log(movieDIV);