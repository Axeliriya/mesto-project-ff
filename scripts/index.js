// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки
const addCard = ({ name, link }, onDelete) => {
  const cardItem = cardTemplate.querySelector(".places__item").cloneNode(true);
  const deleteButton = cardItem.querySelector(".card__delete-button");

  cardItem.querySelector(".card__image").src = link;
  cardItem.querySelector(".card__image").alt = name;
  cardItem.querySelector(".card__title").textContent = name;

  deleteButton.addEventListener("click", () => onDelete(cardItem));

  cardList.append(cardItem);
};

// @todo: Функция удаления карточки
const deleteCard = (card) => {
  card.remove();
};

// @todo: Вывести карточки на страницу
const renderInitialCards = (cards) => {
  cards.forEach((card) => {
    addCard(card, deleteCard);
  });
};

renderInitialCards(initialCards);
