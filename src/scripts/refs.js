const refs = {
  cardTemplate: document.querySelector("#card-template").content,

  cardList: document.querySelector(".places__list"),

  popupTypeEdit: document.querySelector(".popup_type_edit"),
  popupTypeNewCard: document.querySelector(".popup_type_new-card"),
  popupTypeImage: document.querySelector(".popup_type_image"),
  popupTypeUpdateAvatar: document.querySelector(".popup_type_update-avatar"),
  popupTypeDeleteCard: document.querySelector(".popup_type_delete-card"),

  popupImage: document.querySelector(".popup__image"),
  popupCaption: document.querySelector(".popup__caption"),

  editButton: document.querySelector(".profile__edit-button"),
  addButton: document.querySelector(".profile__add-button"),
  closeButtons: document.querySelectorAll(".popup__close"),
  deleteCardButton: document.querySelector(".popup__delete-card"),

  profileName: document.querySelector(".profile__title"),
  profileDescription: document.querySelector(".profile__description"),
  profileImage: document.querySelector(".profile__image"),

  formEdit: document.forms["edit-profile"],
  formNewCard: document.forms["new-place"],
  formUpdateAvatar: document.forms["update-avatar"],

  nameInput: document.querySelector(".popup__input_type_name"),
  jobInput: document.querySelector(".popup__input_type_description"),
  cardNameInput: document.querySelector(".popup__input_type_card-name"),
  urlInput: document.querySelector(".popup__input_type_url"),
  avatarInput: document.querySelector(".popup__input_type_update-avatar"),

  spinner: document.querySelector("#page-loader"),
};

export default refs;
