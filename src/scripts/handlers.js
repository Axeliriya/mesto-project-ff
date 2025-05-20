import { createCard, deleteCard, handleLikeClick } from "./card.js";
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
  closeModal(refs.popupTypeNewCard);
};

export const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  refs.profileName.textContent = refs.nameInput.value;
  refs.profileDescription.textContent = refs.jobInput.value;
  closeModal(refs.popupTypeEdit);
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
};

export const handleAddButtonClick = () => {
  refs.formNewCard.reset();
  openModal(refs.popupTypeNewCard);
};

export const handleCloseButtonClick = (evt) => {
  const modal = evt.target.closest(".popup");
  if (modal) {
    closeModal(modal);
  }
};
