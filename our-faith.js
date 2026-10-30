const missionButton = document.querySelector(".mission-button");
const missionValues = document.querySelector(".mission-values");

if (missionButton && missionValues) {
  missionButton.addEventListener("click", () => {
    missionValues.hidden = !missionValues.hidden;
    missionButton.textContent = missionValues.hidden ? "Read our values" : "Hide our values";
  });
}







const verses = {

    prov:{
        verse:
        "Trust in the Lord with all your heart and lean not on your own understanding.",
        reference:
        "Proverbs 3:5"
    },

    john:{
        verse:
        "I am the way, the truth, and the life. No one comes to the Father except through Me.",
        reference:
        "John 14:6"
    },

    col:{
        verse:
        "That in everything He might have the supremacy.",
        reference:
        "Colossians 1:18"
    }

};

const scriptureButtons =
document.querySelectorAll('.scripture-tab');

const verse =
document.getElementById('verse');

const reference =
document.querySelector('.scripture-display span');

scriptureButtons.forEach(btn => {

    btn.addEventListener('click', () => {

        scriptureButtons.forEach(button =>
            button.classList.remove('active')
        );

        btn.classList.add('active');

        const selected =
        verses[btn.dataset.scripture];

        verse.textContent =
        `"${selected.verse}"`;

        reference.textContent =
        selected.reference;

    });

});







