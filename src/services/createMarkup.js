function createMarkupCard(createCards) {
  
  return createCards
        .map(createCard => `<div class="photo-card">
  <img src="${createCard.webformatURL}" alt="${createCard.tags}" class="photo" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${createCard.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${createCard.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${createCard.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${createCard.downloads}</b>
    </p>
  </div>
</div>`).join('')
  }
  
export { createMarkupCard };