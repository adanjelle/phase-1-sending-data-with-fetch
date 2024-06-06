
document.addEventListener("DOMContentLoaded",function(){
getmovie()
deletemovies()


function getmovie(){
  fetch("http://localhost:3000/movies")
  .then(res=>res.json())
  .then(movies=>{
  movies.forEach(addmovie)   
  });
  function addmovie(movie){
    let row=document.getElementById("card")
    let div=document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML=`<div class="card">
    <img src="${movie.Poster}" 
    <div class=">
    <h5 class="${movie.Title}"</h5>
      <p class="card-text">${movie.Plot}</p>
      <button class="btn btn-outline-danger hind-light">Delete movie</a>
    </div>
    </div>`
    
    row.append(div)
    div.querySelector("button").addEventListener("click",function(){
      div.remove()
      deletedata(movie.id)
      
    })

   
  }
  function deleteData(id){
   
    fetch(`http:localhost:3000/movies/${id}`, {
            method:'DELETE',
            header:{
                'content-Type':'application/json'
            }
        })
        .then(response => response.json())

  }
}


})

document.querySelector("form").addEventListener("submit",postmovie)
 function postmovie(e){
    e.preventDefault()
    let Title=document.getElementById("title")
    let poster=document.getElementById("poster")
    let plot=document.getElementById("plot")
     const movieObject={
      Title:Title.value,
      Poster:poster.value,
      Plot:plot.value,
      
    }
  
    console.log(movieObject)
    fetch('http://localhost:3000/movies',{
      method:'POST',
  header:{
    'content-type':'application/JSON'
  },
  body:JSON.stringify(movieObject)
    })

    
    
 }

