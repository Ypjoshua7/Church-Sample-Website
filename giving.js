const amountButtons = document.querySelectorAll("[data-amount]");
const amountNotice = document.querySelector(".notice");

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    const amount = button.dataset.amount === "other" ? "another amount" : `$${button.dataset.amount}`;
    amountNotice.textContent = `Selected ${amount}. Contact New City Church about online giving.`;
  });
});
