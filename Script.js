const API_URL=`http://www.omdbapi.com/?apikey=23e5f07d&`;

async function fetchData(query){
    
    let res=await fetch(`${API_URL}s=${query}`);
    let data=await res.json();
    console.log(data);
}

fetchData('Stranger Things');