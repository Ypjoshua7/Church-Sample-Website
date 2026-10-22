const visitDetails = document.querySelector(".visit-details");

if (visitDetails) {
  visitDetails.addEventListener("toggle", () => {
    visitDetails.setAttribute("aria-expanded", String(visitDetails.open));
  });
}
