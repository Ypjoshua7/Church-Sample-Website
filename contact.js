const questions = document.querySelectorAll(".content details");

questions.forEach((question) => {
  question.addEventListener("toggle", () => {
    if (question.open) {
      questions.forEach((other) => {
        if (other !== question) other.open = false;
      });
    }
  });
});

const coffeeForm = document.querySelector("#coffee-form");
const coffeeStatus = document.querySelector("#coffee-status");
const coffeeSmsLink = document.querySelector("#coffee-sms-link");

if (coffeeForm && coffeeStatus && coffeeSmsLink) {
  coffeeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(coffeeForm);
    const details = [
      ["First name", formData.get("firstName")],
      ["Last name", formData.get("lastName")],
      ["Email", formData.get("email")],
      ["Description", formData.get("description")]
    ].filter(([, value]) => typeof value === "string" && value.trim())
      .map(([label, value]) => `${label}: ${value.trim()}`);
    const message = ["Coffee with Pastor Gilbert De Leon", ...details].join("\n");
    const smsUrl = `sms:+19562021805?body=${encodeURIComponent(message)}`;

    coffeeSmsLink.href = smsUrl;
    coffeeSmsLink.hidden = false;
    coffeeStatus.textContent = "Your message is ready. Open your messaging app and send it when you're ready.";
    coffeeSmsLink.focus();

    window.location.href = smsUrl;
  });
}
