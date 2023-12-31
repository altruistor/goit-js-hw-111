import Notiflix from 'notiflix';
import refs from './services/refs';
import { createMarkupCard } from './services/createMarkup';
import { fetchPhoto } from './services/fetch';
import { perPage } from './services/fetch';

const { formEl, galleryEl, loadMore } = refs

let page = 1
let userRequest = null




formEl.addEventListener('submit', sendRequest)
function sendRequest(e) {
  e.preventDefault()
  userRequest = e.target.firstElementChild.value.trim()
  e.target.firstElementChild.value = ""
  if (userRequest === "") {
      return;
  }
  console.log(userRequest);
  fetchPhoto(userRequest).then((data) => 
  {
    (galleryEl.innerHTML = createMarkupCard(data.hits))
    // console.log(data.totalHits);
    // console.log(perPage);
    if (perPage < data.totalHits) {
      loadMore.style.display = 'flex';
     Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
    }
    if(perPage > data.totalHits) {
      loadMore.style.display = 'none';
     Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
    }
    if (data.hits.length === 0) {
      Notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.')
        loadMore.style.display = 'none';
    }
    }).catch(console.log());
  
};
loadMore.addEventListener('click', onNextPage) 

function onNextPage() {
 
   page += 1
  fetchPhoto(userRequest, page)
    .then((data) => {
      galleryEl.insertAdjacentHTML("beforeend", createMarkupCard(data.hits))
    //   console.log(data.hits.length);
    //   console.log(data.totalHits);
    //   console.log(perPage*page);
      if (data.totalHits<=perPage*page){
        loadMore.style.display = 'none';
        Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
      }
    })
    .catch(console.log());
  
}
export { userRequest };