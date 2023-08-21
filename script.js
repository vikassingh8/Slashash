function myfunc() {
    let val = document.getElementById("searchValue").value

    fetchdata(val)
}

async function fetchdata(val) {
    fetch(`https://omdbapi.com/?s=${val}&apikey=40979902&page=1`)
        .then((data) => {
            return data.json()
        }).then((data) => {

            // console.log(data.Search)
            if (data.Search == undefined) {
                document.getElementById("print").innerHTML = "No Results Found"
            } else {

                document.getElementById("print").innerHTML = data.Search.map((data) =>
                    `
        <div class="card" >
        <img id="image" src="${data.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="movieName" class="card-title">${data.Title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li id="year" class="list-group-item"><b>Type: </b> ${data.Type}</li>
          <li id="type" class="list-group-item"><b>Year: </b> ${data.Year}</li>
        </ul>
        <div class="card-body">
          <a href="#" id="Favorite" onclick="Favorite()" class="card-link">Favorite</a>
        </div>
      </div>
        `
                ).join("");

            }
        }).catch((err) => {
            console.log(err)
        })

}


function Favorite() {
    console.log("database")
    let obj = {
        image: document.getElementById("image").value,
        movie: document.getElementById("movieName").value,
        year: document.getElementById("year").value,
        type: document.getElementById("type").value
    }
    console.log(obj)
}