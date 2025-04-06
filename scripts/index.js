// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки
const createCard = ({ name, link }, onDelete) => {
  const cardItem = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = cardItem.querySelector(".card__image");
  const cardTitle = cardItem.querySelector(".card__title");
  const deleteButton = cardItem.querySelector(".card__delete-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  deleteButton.addEventListener("click", () => onDelete(cardItem));

  return cardItem;
};

// @todo: Функция удаления карточки
const deleteCard = (card) => {
  card.remove();
};

// @todo: Вывести карточки на страницу
const renderInitialCards = (cards) => {
  cards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
    cardList.append(cardElement);
  });
};

renderInitialCards(initialCards);
