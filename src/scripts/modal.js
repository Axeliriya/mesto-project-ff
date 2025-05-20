import { handleEscClose, handleOverlayCloseClick } from "./handlers";

export const openModal = (modal) => {
  const closeBtn = modal.querySelector(".popup__close");

  modal.classList.add("popup_is-opened");

  closeBtn.addEventListener("click", () => closeModal(modal));
  modal.addEventListener("mousedown", handleOverlayCloseClick);
  document.addEventListener("keydown", handleEscClose);
};

export const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");

  modal.removeEventListener("mousedown", handleOverlayCloseClick);
  document.removeEventListener("keydown", handleEscClose);
};
