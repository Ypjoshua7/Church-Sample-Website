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
