(function () {
  "use strict";

  // ----- Bộ lọc sản phẩm (Dynamic Filtering) -----
  var filterButtons = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Đổi trạng thái active nút bấm
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      var filterValue = button.getAttribute("data-filter");

      galleryItems.forEach(function (item) {
        if (filterValue === "all") {
          item.classList.remove("hidden");
        } else {
          var itemCategory = item.getAttribute("data-category");
          if (itemCategory === filterValue) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        }
      });
    });
  });

  // ----- Lightbox Thư Viện Ảnh -----
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  if (lightbox && lightboxImg && lightboxCaption) {
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

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });
  }
})();
