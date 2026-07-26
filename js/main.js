(function () {
  "use strict";

  // ----- Tải các phần dùng chung -----
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Nạp Header
    var headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      fetch("header.html")
        .then(function (res) {
          if (!res.ok) throw new Error("Không thể tải Header");
          return res.text();
        })
        .then(function (html) {
          headerPlaceholder.innerHTML = html;
          initMobileMenu();
          highlightActiveLink();
          initHeaderScroll();
        })
        .catch(function (err) {
          console.error(err);
        });
    }

    // 2. Nạp Footer
    var footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
      fetch("footer.html")
        .then(function (res) {
          if (!res.ok) throw new Error("Không thể tải Footer");
          return res.text();
        })
        .then(function (html) {
          footerPlaceholder.innerHTML = html;
          var yearEl = document.getElementById("year");
          if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  });

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

    // Nếu đang ở trang chủ rỗng hoặc dạng hash, mặc định là index.html
    if (pageName === "" || pageName.startsWith("#")) {
      pageName = "index.html";
    }

    var selector = 'a[href="' + pageName + '"]';
    if (pageName === "index.html") {
      // Đối với trang chủ, nếu URL chứa hash cụ thể thì không highlight trang chủ chính
      var hash = window.location.hash;
      if (hash === "#gioi-thieu") {
        selector = 'a[data-page="gioi-thieu"]';
      } else if (hash === "#lien-he") {
        selector = 'a[data-page="lien-he"]';
      }
    }

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
})();
