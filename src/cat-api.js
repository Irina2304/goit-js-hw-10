

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_q9vPwmKhWY7WS3bvEkLazM5VrkuGp6XtRUfuhBICgBV6JiyxClkiF72xn9t5sljo";

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))
        }
        return response.json();
    })
}


function fetchCatByBreed(breedId){
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))
        }
        return response.json();
    })
}

export { fetchBreeds, fetchCatByBreed };


// import axios from "axios";

// const API_KEY = "live_q9vPwmKhWY7WS3bvEkLazM5VrkuGp6XtRUfuhBICgBV6JiyxClkiF72xn9t5sljo";
// axios.defaults.headers.common["x-api-key"] = API_KEY;
// const BASE_URL = "https://api.thecatapi.com/v1/";

// function fetchBreeds() {
//     return axios.get(`${BASE_URL}breeds`);
// }

// function fetchCatByBreed(breedId) {
//     return axios.get(`${BASE_URL}images/search?breed_ids=${breedId}`);
// }

