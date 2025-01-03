document.addEventListener("DOMContentLoaded", () => {
  const burgerMenus = document.querySelectorAll(".burger-menu");
  const navLists = document.querySelectorAll(".nav-list");

  burgerMenus.forEach((menu) => {
    menu.addEventListener("click", () => {
      const navList = menu.parentElement.querySelector(".nav-list");
      navList.classList.toggle("show");
    });
  });

  window.addEventListener("scroll", () => {
    navLists.forEach((list) => list.classList.remove("show"));
  });
});
