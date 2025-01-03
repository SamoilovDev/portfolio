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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("photo-modal");
  const openModalDesktop = document.getElementById("open-photo-modal");
  const openModalMobile = document.getElementById("open-photo-modal-mobile");
  const closeModal = document.querySelector(".close-btn");
  const body = document.body;

  function openModal() {
    modal.style.display = "block";
    body.classList.add("no-scroll");
  }

  function closeModalWindow() {
    modal.style.display = "none";
    body.classList.remove("no-scroll");
  }

  openModalDesktop.addEventListener("click", openModal);
  openModalMobile.addEventListener("click", openModal);

  closeModal.addEventListener("click", closeModalWindow);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalWindow();
    }
  });
});
