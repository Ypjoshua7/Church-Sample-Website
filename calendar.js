const cityButtons = document.querySelectorAll("[data-city-filter]");
const eventCards = document.querySelectorAll("[data-city]");

cityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cityButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    eventCards.forEach((card) => {
      card.hidden = button.dataset.cityFilter !== "all" && card.dataset.city !== button.dataset.cityFilter;
    });
  });
});
