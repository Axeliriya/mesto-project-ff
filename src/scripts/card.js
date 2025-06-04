import { api } from "./api";
import refs from "./refs";

export const createCard = (
  { name, link, likes, owner, _id },
  userId,
  onDelete,
  onImageClick,
  onLike
) => {
  const cardItem = getCardTemplate();

  const cardImage = cardItem.querySelector(".card__image");
  const cardTitle = cardItem.querySelector(".card__title");
  const deleteButton = cardItem.querySelector(".card__delete-button");
  const likeButton = cardItem.querySelector(".card__like-button");
  const likeCount = cardItem.querySelector(".card__like-count");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  likeCount.textContent = likes.length;

  if (likes.some((like) => like._id === userId)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  if (owner._id !== userId) {
    deleteButton.style.display = "none";
  } else {
    deleteButton.addEventListener("click", () => onDelete(cardItem, _id));
  }

  cardImage.addEventListener("click", () => onImageClick({ name, link }));
  likeButton.addEventListener("click", () => onLike(_id, likeButton, likeCount));

  return cardItem;
};

export const removeCard = (card) => {
  card.remove();
};

export const handleLikeClick = (cardId, button, likeCount) => {
  const isLiked = button.classList.contains("card__like-button_is-active");
  const apiMethod = isLiked ? api.removeLike : api.addLike;

  apiMethod(cardId)
    .then((card) => updateLike(card, button, likeCount))
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};

const updateLike = (card, button, likeCount) => {
  button.classList.toggle("card__like-button_is-active");
  likeCount.textContent = card.likes.length;
};

const getCardTemplate = () => {
  return refs.cardTemplate.querySelector(".places__item").cloneNode(true);
};
