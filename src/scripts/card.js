import { api } from "./api";
import { closeModal, openModal } from "./modal";
import refs from "./refs";
import { state } from "./state";

export const createCard = (
  { name, link, likes, owner, _id },
  userId,
  onImageClick,
  onLike
) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardItem = cardTemplate.querySelector(".places__item").cloneNode(true);

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
    deleteButton.addEventListener("click", () => {
      state.cardItem = cardItem;
      state.cardID = _id;
      openModal(refs.popupTypeDeleteCard);
    });
  }

  cardImage.addEventListener("click", () => onImageClick({ name, link }));
  likeButton.addEventListener("click", () => onLike(_id, likeButton, likeCount));

  return cardItem;
};

export const deleteCard = (card, cardId) => {
  refs.deleteCardButton.textContent = "Удаление...";
  refs.deleteCardButton.disabled = true;

  api
    .deleteCard(cardId)
    .then(() => {
      card.remove();
      closeModal(refs.popupTypeDeleteCard);
      state.delete.cardItem = null;
      state.delete.cardID = null;
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      refs.deleteCardButton.textContent = "Да";
      refs.deleteCardButton.disabled = false;
    });
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
