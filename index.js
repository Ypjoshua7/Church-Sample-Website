const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");

const siteContactBar = document.createElement("div");
siteContactBar.className = "site-contact-bar";
siteContactBar.innerHTML = `
  <div class="contact-bar-inner">
    <a class="contact-bar-address" href="https://maps.google.com/?q=22531+FM+508+Harlingen+Texas+78550" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
      <span>22531 FM 508, Harlingen, TX 78550</span>
    </a>
    <div class="top-service-times" aria-label="Weekly service times">
      <span>Sunday · 10:30 AM</span>
      <span>Wednesday · 6:30 PM</span>
      <span>Friday · 6:30 PM</span>
    </div>
    <div class="contact-bar-links" aria-label="Contact, maps, and social media">
      <a class="contact-bar-phone" href="tel:+19562021805" aria-label="Call 956-202-1805">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.7 11.7 0 0 0 3.67.59 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A19 19 0 0 1 3 4a1 1 0 0 1 1-1h3.47a1 1 0 0 1 1 1 11.7 11.7 0 0 0 .59 3.67 1 1 0 0 1-.25 1.01z"/></svg>
        <span>956-202-1805</span>
      </a>
      <a href="https://maps.google.com/?q=22531+FM+508+Harlingen+Texas+78550" target="_blank" rel="noopener noreferrer" aria-label="Open location in Google Maps">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
      </a>
      <a href="https://maps.apple.com/?address=22531%20FM%20508,Harlingen,TX,78550" target="_blank" rel="noopener noreferrer" aria-label="Open location in Apple Maps">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.37 12.03c.01-2.44 2-3.61 2.09-3.67-1.14-1.67-2.92-1.9-3.55-1.93-1.51-.15-2.95.89-3.72.89-.77 0-1.96-.87-3.22-.85-1.66.03-3.19.97-4.04 2.45-1.72 2.98-.44 7.39 1.24 9.82.82 1.18 1.81 2.51 3.11 2.46 1.25-.05 1.73-.81 3.24-.81 1.52 0 1.95.81 3.27.78 1.35-.02 2.21-1.21 3.03-2.39.95-1.39 1.34-2.73 1.36-2.8-.03-.01-2.61-1-2.81-3.95zM14.2 4.9c.69-.84 1.16-2.02 1.04-3.2-.99.04-2.19.66-2.9 1.5-.64.74-1.2 1.93-1.05 3.05 1.11.09 2.23-.56 2.91-1.35z"/></svg>
      </a>
      <a href="https://www.instagram.com/worship_him_church?mdxt=NmdwNTQ0bxduY3Bh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
      </a>
      <a href="https://www.facebook.com/WorshipMinistriesChurch/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.3 1.6-4.3 4.5v2.1H7v3.2h2.8V21h3.6z"/></svg>
      </a>
      <a href="https://www.youtube.com/@WorshipHimChurch" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>
      </a>
    </div>
  </div>
`;

const announcementBar = document.querySelector(".announcement-bar");

if (announcementBar) {
  document.body.insertBefore(siteContactBar, announcementBar);
  const announcement = announcementBar.querySelector("p");
  if (announcement) {
    const message = announcement.textContent.trim();
    announcement.className = "announcement-track";
    announcement.setAttribute("aria-label", message);
    const visibleMessage = document.createElement("span");
    visibleMessage.textContent = message;
    const loopMessage = document.createElement("span");
    loopMessage.textContent = message;
    loopMessage.setAttribute("aria-hidden", "true");
    announcement.replaceChildren(visibleMessage, loopMessage);
  }
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




