document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.querySelector(".main-header");
  const stickyHeader = document.querySelector(".sticky-header");
  const mainHeaderHeight = mainHeader.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > mainHeaderHeight - 10) {
      mainHeader.classList.add("hidden");
      stickyHeader.classList.add("visible");
    } else {
      mainHeader.classList.remove("hidden");
      stickyHeader.classList.remove("visible");
    }
  });
});
