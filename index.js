const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");

if (navigation && !navigation.querySelector('a[href="index.html"]')) {
  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.textContent = "Home";
  navigation.insertBefore(homeLink, navigation.firstChild);
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("open", !open);
  });
}

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const videoId = "GfVCLiWjIRg";
const sermonVideoPlay = document.querySelector("#sermon-video-play");

if (sermonVideoPlay) {
  sermonVideoPlay.addEventListener("click", () => {
    const player = document.createElement("iframe");
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&playsinline=1&rel=0`;
    player.title = "A Message for the Journey";
    player.allow = "autoplay; encrypted-media; picture-in-picture; web-share";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    sermonVideoPlay.replaceWith(player);
  });
}
