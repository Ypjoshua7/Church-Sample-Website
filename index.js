const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");

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

const mediaVideos = [
  { title: "A Message for the Journey", category: "Messages" },
  { title: "Faith for Every Season", category: "Messages" },
  { title: "Worship Together", category: "Worship" },
  { title: "Stories of Hope", category: "Stories" },
  { title: "A Church for Everyone", category: "More" }
];
const youtubeUrl = "https://youtu.be/nHvg18GPUuE?si=ZUwH1MbyHrOAQoPr";
const videoId = "nHvg18GPUuE";
const mediaRow = document.querySelector("#media-row");
const mediaSearch = document.querySelector("#media-search");
const mediaEmpty = document.querySelector("#media-empty");
const mediaCount = document.querySelector(".media-row-heading span");
const mediaFilters = document.querySelectorAll(".media-filter");
const videoModal = document.querySelector("#video-modal");
const videoFrame = document.querySelector("#video-frame");
const videoModalTitle = document.querySelector("#video-modal-title");
let selectedCategory = "All";
let lastFocusedElement;

function renderMediaVideos() {
  if (!mediaRow || !mediaSearch || !mediaEmpty || !mediaCount) return;

  const query = mediaSearch.value.trim().toLowerCase();
  const matchingVideos = mediaVideos.filter((video) => {
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    return matchesCategory && video.title.toLowerCase().includes(query);
  });

  mediaRow.replaceChildren();
  matchingVideos.forEach((video) => {
    const card = document.createElement("a");
    card.className = "media-card";
    card.href = youtubeUrl;
    card.setAttribute("aria-label", `Play ${video.title}`);

    const imageContainer = document.createElement("div");
    imageContainer.className = "media-card-image";
    const image = document.createElement("img");
    image.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    image.alt = "";
    image.loading = "lazy";
    imageContainer.append(image);

    const playIcon = document.createElement("span");
    playIcon.className = "media-play";
    playIcon.setAttribute("aria-hidden", "true");
    playIcon.textContent = "▶";
    imageContainer.append(playIcon);

    const info = document.createElement("div");
    info.className = "media-card-info";
    const category = document.createElement("p");
    category.className = "media-card-category";
    category.textContent = video.category;
    const title = document.createElement("h4");
    title.className = "media-card-title";
    title.textContent = video.title;
    info.append(category, title);
    card.append(imageContainer, info);
    mediaRow.append(card);
  });

  mediaCount.textContent = `${matchingVideos.length} ${matchingVideos.length === 1 ? "video" : "videos"}`;
  mediaEmpty.hidden = matchingVideos.length > 0;
}

if (mediaRow && mediaSearch && videoModal && videoFrame && videoModalTitle) {
  renderMediaVideos();
  mediaSearch.addEventListener("input", renderMediaVideos);

  mediaFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      selectedCategory = filter.dataset.category || "All";
      mediaFilters.forEach((button) => {
        const isActive = button === filter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      renderMediaVideos();
    });
  });

  mediaRow.addEventListener("click", (event) => {
    const card = event.target.closest(".media-card");
    if (!card) return;
    event.preventDefault();
    lastFocusedElement = card;
    videoModalTitle.textContent = card.querySelector(".media-card-title").textContent;

    const player = document.createElement("iframe");
    player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    player.title = videoModalTitle.textContent;
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    videoFrame.replaceChildren(player);

    videoModal.hidden = false;
    document.body.classList.add("video-modal-open");
    videoModal.querySelector(".video-modal-close").focus();
  });

  videoModal.addEventListener("click", (event) => {
    if (!event.target.closest("[data-close-video]")) return;
    videoModal.hidden = true;
    videoFrame.replaceChildren();
    document.body.classList.remove("video-modal-open");
    lastFocusedElement?.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || videoModal.hidden) return;
    videoModal.hidden = true;
    videoFrame.replaceChildren();
    document.body.classList.remove("video-modal-open");
    lastFocusedElement?.focus();
  });
}
