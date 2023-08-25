import axios from "axios";
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = "live_q9vPwmKhWY7WS3bvEkLazM5VrkuGp6XtRUfuhBICgBV6JiyxClkiF72xn9t5sljo";


function fetchBreeds() {
    return axios.get(`breeds`);
}


function fetchCatByBreed(breedId){
    return axios.get(`images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };