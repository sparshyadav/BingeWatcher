const API_URL = `http://www.omdbapi.com/?apikey=23e5f07d&`;

async function fetchData(query) {
    try {
        let res = await fetch(`${API_URL}s=${query}`);
        let data = await res.json();
        console.log(data);

        let div = document.createElement("div");
        div.classList.add('container');
        const container = document.querySelector('.container');
        container.innerHTML = `
        <div class="left">
            <img src="${data.Search[idx].Poster}" alt="">
        </div>
        <div class="right">
            <h1 class="title">${data.Search[idx].Title}</h1>
            <p>Release Year: ${data.Search[idx].Year}</p>
            <p>Type: ${data.Search[idx].Type}</p>
        </div>`;
        container.style.opacity = 1;
        document.querySelector('.box-main').append(container);
    }
    catch (error) {
        console.error("Error Fetching Data: ", error);
    }
}

let idx = 0;
const button = document.querySelector('.search-icon');
button.addEventListener('click', () => {
    let input = document.querySelector('.search-input').value;
    fetchData(input);
});

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let input = searchInput.value;
        fetchData(input);
    }
});
