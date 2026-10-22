const missionButton = document.querySelector(".mission-button");
const missionValues = document.querySelector(".mission-values");

if (missionButton && missionValues) {
  missionButton.addEventListener("click", () => {
    missionValues.hidden = !missionValues.hidden;
    missionButton.textContent = missionValues.hidden ? "Read our values" : "Hide our values";
  });
}
