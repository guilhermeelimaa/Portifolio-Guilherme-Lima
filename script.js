function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <=
    (window.innerHeight || document.documentElement.clientHeight) * 0.9
  );
}

function checkFadeSlide() {
  const elements = document.querySelectorAll(".fade-slide");
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkFadeSlide);
window.addEventListener("load", checkFadeSlide);
