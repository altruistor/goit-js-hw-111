function createMarkupCard(createCards) {
  
  return createCards
        .map(createCard => `<div class="photo-card">
  <img src="${createCard.webformatURL}" alt="${createCard.tags}" class="photo" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes:</b> ${createCard.likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${createCard.views}
    </p>
    <p class="info-item">
      <b>Comments:</b> ${createCard.comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${createCard.downloads}</b>
    </p>
  </div>
</div>`).join('')
  }
  
export { createMarkupCard };