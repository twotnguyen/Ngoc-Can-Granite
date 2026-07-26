(function () {
  "use strict";

  // ----- Năm hiện tại ở footer -----
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Menu mobile -----
  var menuToggle = document.getElementById("menuToggle");
  var mobileMenu = document.getElementById("mobileMenu");

  function closeMenu() {
    mobileMenu.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    mobileMenu.hidden = false;
    menuToggle.setAttribute("aria-expanded", "true");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      if (mobileMenu.hidden) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  // ----- Lightbox thư viện ảnh -----
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var galleryItems = document.querySelectorAll(".gallery-item");

  function openLightbox(src, label) {
    lightboxImg.src = src;
    lightboxImg.alt = label;
    lightboxCaption.textContent = label;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    lightboxImg.alt = "";
    document.body.style.overflow = "";
  }

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var src = item.getAttribute("data-src") || "";
      var label = item.getAttribute("data-label") || "";
      openLightbox(src, label);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (!lightbox.hidden) closeLightbox();
      if (!mobileMenu.hidden) closeMenu();
    }
  });
})();
