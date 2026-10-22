const groupButtons = document.querySelectorAll("[data-group-filter]");
const groupCards = document.querySelectorAll("[data-group-city]");

groupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    groupButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    groupCards.forEach((card) => {
      card.hidden = button.dataset.groupFilter !== "all" && card.dataset.groupCity !== button.dataset.groupFilter;
    });
  });
});
