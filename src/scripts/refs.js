const refs = {
  cardList: document.querySelector(".places__list"),

  popupTypeEdit: document.querySelector(".popup_type_edit"),
  popupTypeNewCard: document.querySelector(".popup_type_new-card"),
  popupTypeImage: document.querySelector(".popup_type_image"),

  popupImage: document.querySelector(".popup__image"),
  popupCaption: document.querySelector(".popup__caption"),

  editButton: document.querySelector(".profile__edit-button"),
  addButton: document.querySelector(".profile__add-button"),
  closeButtons: document.querySelectorAll(".popup__close"),

  profileName: document.querySelector(".profile__title"),
  profileDescription: document.querySelector(".profile__description"),

  formEdit: document.forms["edit-profile"],
  formNewCard: document.forms["new-place"],

  nameInput: document.querySelector(".popup__input_type_name"),
  jobInput: document.querySelector(".popup__input_type_description"),
  cardNameInput: document.querySelector(".popup__input_type_card-name"),
  urlInput: document.querySelector(".popup__input_type_url"),
};

export default refs;
