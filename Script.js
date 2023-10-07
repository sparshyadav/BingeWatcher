const API_URL = `http://www.omdbapi.com/?apikey=23e5f07d&`;

async function fetchData(query) {

    let res = await fetch(`${API_URL}s=${query}`);
    let data = await res.json();
    console.log(data);
}

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    let input = document.querySelector('.search-input');
    fetchData(input);

    const container = document.querySelector('.container');
    container.innerHTML = "";
    container.innerHTML = `
    <div class="left">
        <img src="" alt="">
    </div>
    <div class="right">
        <h1 class="title">The Avengers</h1>
]       <p>Release Year: </p>
        <p>Type: </p>
    </div>`;

})
// fetchData('Top Gun: Maverick');
