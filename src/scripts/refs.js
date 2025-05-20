const refs = {
  cardList: document.querySelector(".places__list"),

  popupEdit: document.querySelector(".popup_type_edit"),
  popupNewCard: document.querySelector(".popup_type_new-card"),
  popupImage: document.querySelector(".popup_type_image"),

  editButton: document.querySelector(".profile__edit-button"),
  addButton: document.querySelector(".profile__add-button"),

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
