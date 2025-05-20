import { createCard, deleteCard } from "./card.js";
import { openModal, closeModal } from "./modal.js";
import refs from "./refs.js";

export const handleFormNewCardSubmit = (evt) => {
  evt.preventDefault();

  const card = {
    name: refs.cardNameInput.value,
    link: refs.urlInput.value,
  };

  const newCard = createCard(card, deleteCard, handleImageClick, handleLikeClick);
  refs.cardList.prepend(newCard);

  refs.formNewCard.reset();
  closeModal(refs.popupNewCard);
};

export const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  refs.profileName.textContent = refs.nameInput.value;
  refs.profileDescription.textContent = refs.jobInput.value;
  closeModal(refs.popupEdit);
};

export const handleImageClick = ({ name, link }) => {
  const image = {
    attr: refs.popupImage.querySelector(".popup__image"),
    caption: refs.popupImage.querySelector(".popup__caption"),
  };

  image.attr.src = link;
  image.attr.alt = name;
  image.caption.textContent = name;

  openModal(refs.popupImage);
};

export const handleEditButtonClick = () => {
  refs.nameInput.value = refs.profileName.textContent;
  refs.jobInput.value = refs.profileDescription.textContent;

  openModal(refs.popupEdit);
};

export const handleAddButtonClick = () => {
  refs.formNewCard.reset();
  openModal(refs.popupNewCard);
};

export const handleLikeClick = (button) => {
  button.classList.toggle("card__like-button_is-active");
};

export const handleOverlayCloseClick = (evt) => {
  if (evt.target.classList.contains("popup")) {
    const popup = evt.target;
    closeModal(popup);
  }
};

export const handleEscClose = (evt) => {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_is-opened");
    if (openedModal) closeModal(openedModal);
  }
};
