export const openModal = (modal) => {
  modal.classList.add("popup_is-opened");

  modal.addEventListener("mousedown", handleOverlayCloseClick);
  document.addEventListener("keydown", handleEscClose);
};

export const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");

  modal.removeEventListener("mousedown", handleOverlayCloseClick);
  document.removeEventListener("keydown", handleEscClose);
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
