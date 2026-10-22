const ministryDetails = document.querySelectorAll(".content details");

ministryDetails.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      ministryDetails.forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
