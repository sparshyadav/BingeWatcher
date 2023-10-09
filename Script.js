const API_URL = `http://www.omdbapi.com/?apikey=23e5f07d&`;

async function fetchData(query) {
  try {
    let res = await fetch(`${API_URL}s=${query}`);
    let data = await res.json();
    console.log(data);

    let imdbID = data.Search[0].imdbID;
    data = await fetch(`${API_URL}i=${imdbID}`);
    data = await data.json();
    console.log(data);

    let div = document.createElement("div");
    div.classList.add("container");
    const container = document.querySelector(".container");

    container.innerHTML = `
        <div class="left">
            <img src="${data.Poster}" alt="">
        </div>
        <div class="right">
            <h1 class="title">${data.Title}</h1>
            <h2 class="actors"><span>Actors: </span>${data.Actors}</h2>
            <p class="plot"><span>Plot: </span>${data.Plot}</p>
            <p><span>Release: </span>${data.Released}</p>
            <p><span>Language: </span>${data.Language}</p>
            <p><span>Country: </span>${data.Country}</p>
            <p><span>IMDB Rating: </span>${data.imdbRating}</p>
        </div>`;

    document.querySelector(".box-main").append(container);
  } catch (error) {
    console.error("Error Fetching Data: ", error);
  }
}

let idx = 0;
const button = document.querySelector(".search-icon");
button.addEventListener("click", () => {
  let input = document.querySelector(".search-input").value;
  fetchData(input);
});

const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let input = searchInput.value;
    fetchData(input);
  }
});
