
import SlimSelect from 'slim-select'
import "slim-select/dist/slimselect.css"
import Notiflix from 'notiflix';
import  { fetchBreeds, fetchCatByBreed } from './cat-api';


const selectForm = document.querySelector(".breed-select");
const card = document.querySelector(".cat-info");
const loader = document.querySelector(".loader")


selectForm.addEventListener('change', onChange);


showLoader();

fetchBreeds()
.then(data => {
    selectForm.innerHTML = createList(data)
    new SlimSelect({
        select: '#single'
    })
})
.catch(() => {
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
})


function createList(arr) {
    return arr.map(({id, name}) => `<option value="${id}">${name}</option>`).join("")
}


function onChange(evt) {
    let breedId = evt.target.value;
    showLoader();
    card.innerHTML = "";
    fetchCatByBreed(breedId)
    .then(data => {
        card.innerHTML = createCardMarcup(data);
        showLoader();
    })
    .catch(() => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    })
}


function createCardMarcup(arr) {
    return arr.map(({ url, breeds: [{ name, description, temperament }]}) => `
    <img src="${url}" alt="${name}" class="cat-img" />
    <div class = "text">
        <h2 class = "">${name}</h2>
        <p>${description}</p>
        <p><b>Temperament: ${temperament}</b></p>
    </div>
    `).join("")
}


function showLoader() {
    loader.classList.toggle('loader');
}
