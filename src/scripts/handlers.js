import { api } from "./api.js";
import { createCard, removeCard, handleLikeClick } from "./card.js";
import { openModal, closeModal } from "./modal.js";
import refs from "./refs.js";
import { clearValidation, validateFormOnOpen } from "./validation.js";
import validationConfig from "./validationConfig.js";
import { state } from "./state.js";

export const handleFormNewCardSubmit = (evt, userId) => {
  evt.preventDefault();
  const submitButton = refs.formNewCard.querySelector(".popup__button");
  submitButton.textContent = "Сохранение...";
  submitButton.disabled = true;

  const card = {
    name: refs.cardNameInput.value,
    link: refs.urlInput.value,
  };

  api
    .addCard(card)
    .then((cardData) => {
      const newCard = createCard(
        cardData,
        userId,
        openDeleteCardModal,
        handleImageClick,
        handleLikeClick
      );
      refs.cardList.prepend(newCard);
      refs.formNewCard.reset();
      clearValidation(refs.formNewCard, validationConfig);
      closeModal(refs.popupTypeNewCard);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      submitButton.textContent = "Сохранить";
      submitButton.disabled = false;
    });
};

export const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  const submitButton = refs.formEdit.querySelector(".popup__button");
  submitButton.textContent = "Сохранение...";
  submitButton.disabled = true;

  const userInfo = {
    name: refs.nameInput.value,
    about: refs.jobInput.value,
  };

  api
    .editUserInfo(userInfo)
    .then((user) => {
      refs.profileName.textContent = user.name;
      refs.profileDescription.textContent = user.about;
      closeModal(refs.popupTypeEdit);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      submitButton.textContent = "Сохранить";
      submitButton.disabled = false;
    });
};

export const handleFormAvatarSubmit = (evt) => {
  evt.preventDefault();
  const submitButton = refs.formUpdateAvatar.querySelector(".popup__button");
  submitButton.textContent = "Сохранение...";
  submitButton.disabled = true;

  const avatarUrl = refs.avatarInput.value;

  api
    .updateAvatar(avatarUrl)
    .then((user) => {
      refs.profileImage.style.backgroundImage = `url(${user.avatar})`;
      refs.formUpdateAvatar.reset();
      closeModal(refs.popupTypeUpdateAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      submitButton.textContent = "Сохранить";
      submitButton.disabled = false;
    });
};

export const handleDeleteCardClick = () => {
  if (!state.delete.cardItem || !state.delete.cardID) return;

  refs.deleteCardButton.textContent = "Удаление...";
  refs.deleteCardButton.disabled = true;

  api
    .deleteCard(state.delete.cardID)
    .then(() => {
      removeCard(state.delete.cardItem);
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

export const openDeleteCardModal = (cardItem, cardId) => {
  state.delete.cardItem = cardItem;
  state.delete.cardID = cardId;
  openModal(refs.popupTypeDeleteCard);
};

export const handleAvatarClick = () => {
  refs.formUpdateAvatar.reset();
  openModal(refs.popupTypeUpdateAvatar);
  clearValidation(refs.formUpdateAvatar, validationConfig);
};

export const handleImageClick = ({ name, link }) => {
  refs.popupImage.src = link;
  refs.popupImage.alt = name;
  refs.popupCaption.textContent = name;

  openModal(refs.popupTypeImage);
};

export const handleEditButtonClick = () => {
  refs.nameInput.value = refs.profileName.textContent;
  refs.jobInput.value = refs.profileDescription.textContent;

  openModal(refs.popupTypeEdit);
  clearValidation(refs.formEdit, validationConfig);
  validateFormOnOpen(refs.formEdit, validationConfig);
};

export const handleAddButtonClick = () => {
  openModal(refs.popupTypeNewCard);
};

export const handleCloseButtonClick = (evt) => {
  const modal = evt.target.closest(".popup");
  if (modal) {
    closeModal(modal);
  }
};
