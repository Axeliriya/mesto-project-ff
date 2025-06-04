const textInputPattern = /^[a-zA-Zа-яёА-ЯЁ\s-]+$/;
const urlInputPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
const textInputErrorMessage =
  "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";
const urlInputErrorMessage = "Введите корректный URL (например, https://example.com)";

const showError = (form, input, errorMessage, validationConfig) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  if (!errorElement) return;

  input.classList.add(validationConfig.inputErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = errorMessage;
  errorElement.setAttribute("data-tooltip", errorMessage);

  if (input.type === "text") {
    input.setAttribute("data-error-message", textInputErrorMessage);
  } else if (input.type === "url") {
    input.setAttribute("data-error-message", urlInputErrorMessage);
  }
};

const hideError = (form, input, validationConfig) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  if (!errorElement) return;

  input.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = "";
  errorElement.removeAttribute("data-tooltip");
  input.removeAttribute("data-error-message");
};

const checkInputValidity = (form, input, validationConfig) => {
  if (!input.validity.valid) {
    showError(form, input, input.validationMessage, validationConfig);
  } else if (input.type === "url" && !urlInputPattern.test(input.value)) {
    showError(form, input, urlInputErrorMessage, validationConfig);
  } else if (input.type === "text" && !textInputPattern.test(input.value)) {
    showError(form, input, textInputErrorMessage, validationConfig);
  } else {
    hideError(form, input, validationConfig);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    if (input.type === "url") {
      return !input.validity.valid || !urlInputPattern.test(input.value);
    }
    return !input.validity.valid || !textInputPattern.test(input.value);
  });
};

const toggleButtonState = (form, inputList, validationConfig) => {
  const buttonElement = form.querySelector(validationConfig.submitButtonSelector);

  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

const setEventListeners = (form, validationConfig) => {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  toggleButtonState(form, inputList, validationConfig);

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(form, input, validationConfig);
      toggleButtonState(form, inputList, validationConfig);
    });
  });
};

export const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((form) => {
    setEventListeners(form, validationConfig);
  });
};

export const clearValidation = (form, validationConfig) => {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  const errorList = form.querySelectorAll(`.${validationConfig.errorClass}`);
  const buttonElement = form.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach((input) => {
    hideError(form, input, validationConfig);
  });

  errorList.forEach((error) => {
    error.classList.remove(validationConfig.errorClass);
    error.textContent = "";
    error.removeAttribute("data-tooltip");
  });

  buttonElement.disabled = true;
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
};

export const validateFormOnOpen = (form, validationConfig) => {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((input) => {
    checkInputValidity(form, input, validationConfig);
  });
  toggleButtonState(form, inputList, validationConfig);
};
