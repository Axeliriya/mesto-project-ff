export const createCard = ({ name, link }, onDelete, onImageClick, onLike) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardItem = cardTemplate.querySelector(".places__item").cloneNode(true);

  const cardImage = cardItem.querySelector(".card__image");
  const cardTitle = cardItem.querySelector(".card__title");
  const deleteButton = cardItem.querySelector(".card__delete-button");
  const likeButton = cardItem.querySelector(".card__like-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  deleteButton.addEventListener("click", () => onDelete(cardItem));
  cardImage.addEventListener("click", () => onImageClick({ name, link }));
  likeButton.addEventListener("click", () => onLike(likeButton));

  return cardItem;
};

export const deleteCard = (card) => {
  card.remove();
};

export const handleLikeClick = (button) => {
  button.classList.toggle("card__like-button_is-active");
};
