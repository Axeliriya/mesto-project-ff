import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { createCard, deleteCard, handleLikeClick } from "./scripts/card.js";
import {
  handleAddButtonClick,
  handleCloseButtonClick,
  handleEditButtonClick,
  handleFormNewCardSubmit,
  handleFormProfileSubmit,
  handleImageClick,
} from "./scripts/handlers.js";
import refs from "./scripts/refs.js";

refs.editButton.addEventListener("click", handleEditButtonClick);
refs.addButton.addEventListener("click", handleAddButtonClick);
refs.formEdit.addEventListener("submit", handleFormProfileSubmit);
refs.formNewCard.addEventListener("submit", handleFormNewCardSubmit);
refs.closeButtons.forEach((btn) => {
  btn.addEventListener("click", handleCloseButtonClick);
});

const renderInitialCards = (cards) => {
  cards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, handleImageClick, handleLikeClick);
    refs.cardList.append(cardElement);
  });
};

renderInitialCards(initialCards);
