import "./pages/index.css";
import { createCard, handleLikeClick } from "./scripts/card.js";
import {
  handleAddButtonClick,
  handleAvatarClick,
  handleDeleteCardClick,
  handleCloseButtonClick,
  handleEditButtonClick,
  handleFormAvatarSubmit,
  handleFormNewCardSubmit,
  handleFormProfileSubmit,
  handleImageClick,
  openDeleteCardModal,
} from "./scripts/handlers.js";
import refs from "./scripts/refs.js";
import validationConfig from "./scripts/validationConfig.js";
import { enableValidation } from "./scripts/validation.js";
import { api } from "./scripts/api.js";
import { state } from "./scripts/state.js";
import loader from "./scripts/loader.js";

refs.editButton.addEventListener("click", handleEditButtonClick);
refs.addButton.addEventListener("click", handleAddButtonClick);
refs.profileImage.addEventListener("click", handleAvatarClick);
refs.formEdit.addEventListener("submit", handleFormProfileSubmit);
refs.formNewCard.addEventListener("submit", (evt) =>
  handleFormNewCardSubmit(evt, state.currentUserId)
);
refs.formUpdateAvatar.addEventListener("submit", handleFormAvatarSubmit);
refs.deleteCardButton.addEventListener("click", handleDeleteCardClick);
refs.closeButtons.forEach((btn) => {
  btn.addEventListener("click", handleCloseButtonClick);
});

const renderInitialCards = (cards, userId) => {
  cards.forEach((card) => {
    const cardElement = createCard(
      card,
      userId,
      openDeleteCardModal,
      handleImageClick,
      handleLikeClick
    );
    refs.cardList.append(cardElement);
  });
};

loader.showLoader();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    state.currentUserId = user._id;
    refs.profileName.textContent = user.name;
    refs.profileDescription.textContent = user.about;
    refs.profileImage.style.backgroundImage = `url(${user.avatar})`;
    renderInitialCards(cards, user._id);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally(() => {
    loader.hideLoader();
  });

enableValidation(validationConfig);
