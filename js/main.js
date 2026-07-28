(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    highlightActiveLink();
    initHeaderScroll();
    initYear();
    initStoneFilter();
  });

  // ----- Dynamic Year in Footer -----
  function initYear() {
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // ----- Logic Mobile Menu -----
  function initMobileMenu() {
    var menuToggle = document.getElementById("menuToggle");
    var mobileMenu = document.getElementById("mobileMenu");

    if (!menuToggle || !mobileMenu) return;

    function closeMenu() {
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      mobileMenu.hidden = false;
      menuToggle.setAttribute("aria-expanded", "true");
    }

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

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !mobileMenu.hidden) {
        closeMenu();
      }
    });
  }

  // ----- Đánh dấu trang hiện tại -----
  function highlightActiveLink() {
    var path = window.location.pathname;
    var pageName = path.split("/").pop() || "index.html";

    if (pageName === "" || pageName.startsWith("#")) {
      pageName = "index.html";
    }

    // Nếu đã có class active sẵn trong HTML tĩnh, giữ nguyên
    var existingActive = document.querySelector(".nav-desktop a.active");
    if (existingActive) return;

    var selector = 'a[href="' + pageName + '"]';
    var activeLinks = document.querySelectorAll(selector);
    activeLinks.forEach(function (link) {
      link.classList.add("active");
    });
  }

  // ----- Hiệu ứng cuộn thu nhỏ Header -----
  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 50) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ----- Bộ lọc loại đá động -----
  function initStoneFilter() {
    var filterButtons = document.querySelectorAll(".stone-filter-btn");
    var stoneItems = document.querySelectorAll(".stone-product-card");

    if (!filterButtons.length || !stoneItems.length) return;

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");

        var filterValue = button.getAttribute("data-filter");

        stoneItems.forEach(function (item) {
          if (filterValue === "all") {
            item.classList.remove("hide");
            item.style.opacity = "0";
            setTimeout(function () {
              item.style.opacity = "1";
            }, 20);
          } else {
            var itemGroup = item.getAttribute("data-group");
            if (itemGroup === filterValue) {
              item.classList.remove("hide");
              item.style.opacity = "0";
              setTimeout(function () {
                item.style.opacity = "1";
              }, 20);
            } else {
              item.classList.add("hide");
            }
          }
        });
      });
    });
  }
})();
