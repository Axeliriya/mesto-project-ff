import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { createCard, deleteCard } from "./scripts/card.js";
import {
  handleAddButtonClick,
  handleEditButtonClick,
  handleFormNewCardSubmit,
  handleFormProfileSubmit,
  handleImageClick,
  handleLikeClick,
} from "./scripts/handlers.js";
import refs from "./scripts/refs.js";

refs.editButton.addEventListener("click", handleEditButtonClick);
refs.addButton.addEventListener("click", handleAddButtonClick);
refs.formEdit.addEventListener("submit", handleFormProfileSubmit);
refs.formNewCard.addEventListener("submit", handleFormNewCardSubmit);

const renderInitialCards = (cards) => {
  cards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, handleImageClick, handleLikeClick);
    refs.cardList.append(cardElement);
  });
};

renderInitialCards(initialCards);
