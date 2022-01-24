//NAVIGATION - Mobile Nav Toggle for smaller screens
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// PRELOADER
function fade() {
  $(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000);

// TOP PROGRESS BAR for PROJECT PAGE
let updateProgressBar = () => {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent =
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  document
    .getElementById("progress-bar")
    .style.setProperty("--progress", scrollPercent);
};

document.addEventListener("scroll", updateProgressBar);
