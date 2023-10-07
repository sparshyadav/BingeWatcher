const API_URL=`http://www.omdbapi.com/?apikey=23e5f07d&`;

async function fetchData(query){
    let input='The Avengers';
    
    let res=await fetch(`${API_URL}s=${input}`);
    let data=await res.json();
    console.log(data);
}

fetchData(avengers);