const API_URL = `http://www.omdbapi.com/?apikey=23e5f07d&`;

async function fetchData(query) {

    let res = await fetch(`${API_URL}s=${query}`);
    let data = await res.json();
    // const movie=data.Search[0];
    console.log(data);

    // let final=(await fetch(`${API_URL}i=${data.imdbid}`)).json();

}

let idx = 0;
const button = document.querySelector('.search-icon');
button.addEventListener('click', () => {
    let input = document.querySelector('.search-input').value;
    fetchData(input);

    const container = document.querySelector('.container');
    container.innerHTML = "";
    container.innerHTML = `
    <div class="left">
        <img src="${data.Search[idx].Poster}" alt="">
    </div>
    <div class="right">
        <h1 class="title">${data.Search[idx].Title}</h1>
        <p>Release Year: ${data.Search[idx].Year}</p>
        <p>Type: ${data.Search[idx].Type}</p>
    </div>`;
    document.querySelector('.box-main').append(container);
})
// fetchData('Inception');
