(function () {
  "use strict";

  var HEADER_FALLBACK = '<header class="site-header"><div class="container header-inner"><a href="index.html" class="brand"><span class="brand-name">Xưởng đá Ngọc Cẩn</span><span class="brand-sub">NGOCCAN Granite</span></a><nav class="nav-desktop" aria-label="Điều hướng chính"><a href="index.html#gioi-thieu" data-page="gioi-thieu">Giới thiệu</a><a href="dich-vu.html" data-page="dich-vu">Dịch vụ</a><a href="san-pham.html" data-page="san-pham">Sản phẩm</a><a href="loai-da.html" data-page="loai-da">Loại đá</a><a href="index.html#lien-he" data-page="lien-he">Liên hệ</a></nav><div class="header-cta"><a href="tel:0905035789" class="btn btn-outline-light">0905 035 789</a><a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Chat Zalo</a></div><button type="button" class="menu-toggle" id="menuToggle" aria-label="Mở menu" aria-expanded="false" aria-controls="mobileMenu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16" /></svg></button></div><div class="mobile-menu" id="mobileMenu" hidden><nav aria-label="Điều hướng di động"><a href="index.html#gioi-thieu" data-page="gioi-thieu">Giới thiệu</a><a href="dich-vu.html" data-page="dich-vu">Dịch vụ</a><a href="san-pham.html" data-page="san-pham">Sản phẩm</a><a href="loai-da.html" data-page="loai-da">Loại đá</a><a href="index.html#lien-he" data-page="lien-he">Liên hệ</a></nav><div class="mobile-menu-cta"><a href="tel:0905035789" class="btn btn-outline-light block">Gọi 0905 035 789</a><a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="btn btn-primary block">Chat Zalo</a></div></div></header>';

  var FOOTER_FALLBACK = '<section id="lien-he" class="section section-tint"><div class="container"><div class="section-heading"><span class="eyebrow">Liên hệ</span><h2>Liên hệ báo giá</h2><p>Gọi điện hoặc nhắn Zalo kèm ảnh/kích thước để được tư vấn và báo giá nhanh nhất.</p></div><div class="contact-grid"><div class="contact-cards"><a href="tel:0905035789" class="contact-card"><span class="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span><div><p class="contact-label">Điện thoại</p><p class="contact-value">0905 035 789</p></div></a><a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="contact-card"><span class="contact-icon contact-icon-text">Zalo</span><div><p class="contact-label">Zalo</p><p class="contact-value">0905 035 789</p></div></a><a href="https://www.facebook.com/profile.php?id=61575612324085" target="_blank" rel="noopener noreferrer" class="contact-card"><span class="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></span><div><p class="contact-label">Facebook</p><p class="contact-value">Kho Đá Ngọc Cẩn</p><span class="contact-link">Ghé thăm Trang Facebook →</span></div></a><a href="https://maps.app.goo.gl/am6ZZ63BUA5D7sE89" target="_blank" rel="noopener noreferrer" class="contact-card"><span class="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span><div><p class="contact-label">Địa chỉ xưởng</p><p class="contact-value">93/17 Đường Nguyễn Thị Tú, Bình Tân, Hồ Chí Minh, Việt Nam</p><span class="contact-link">Xem trên Google Maps →</span></div></a><div class="contact-card contact-card-static"><span class="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></span><div><p class="contact-label">Giờ làm việc</p><p class="contact-value">Thứ 2 – Thứ 7</p><p class="contact-note">Chủ nhật nghỉ</p></div></div></div><div class="map-wrap"><iframe title="Bản đồ xưởng đá Ngọc Cẩn" src="https://maps.google.com/maps?q=Kho%20%C4%90%C3%A1%20Hoa%20C%C6%B0%C6%A1ng%20Ng%E1%BB%8Dc%20C%E1%BA%A9n%2093%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20T%C3%BA%20B%C3%ACnh%20T%C3%A2n%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></section><footer class="site-footer"><div class="container footer-inner"><div><p class="footer-name">Xưởng đá Ngọc Cẩn</p><p class="footer-brand">NGOCCAN Granite</p><p class="footer-address">93/17 Đường Nguyễn Thị Tú, Bình Tân, Hồ Chí Minh, Việt Nam</p></div><div class="footer-links"><a href="tel:0905035789">0905 035 789</a><a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer">Zalo</a><a href="https://www.facebook.com/profile.php?id=61575612324085" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://maps.app.goo.gl/am6ZZ63BUA5D7sE89" target="_blank" rel="noopener noreferrer">Google Maps</a></div></div><p class="footer-copy">© <span id="year"></span> Xưởng đá Ngọc Cẩn. Bản quyền được bảo lưu.</p></footer>';

  function renderHeader(html) {
    var headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = html;
      initMobileMenu();
      highlightActiveLink();
      initHeaderScroll();
    }
  }

  function renderFooter(html) {
    var footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = html;
      var yearEl = document.getElementById("year");
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    }
  }

  // ----- Tải các phần dùng chung -----
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Nạp Header
    if (document.getElementById("header-placeholder")) {
      fetch("header.html")
        .then(function (res) {
          if (!res.ok) throw new Error("Không thể tải Header");
          return res.text();
        })
        .then(function (html) {
          renderHeader(html);
        })
        .catch(function () {
          // Fallback khi chạy file:// không cần qua server HTTP
          renderHeader(HEADER_FALLBACK);
        });
    }

    // 2. Nạp Footer & Bản đồ
    if (document.getElementById("footer-placeholder")) {
      fetch("footer.html")
        .then(function (res) {
          if (!res.ok) throw new Error("Không thể tải Footer");
          return res.text();
        })
        .then(function (html) {
          renderFooter(html);
        })
        .catch(function () {
          // Fallback khi chạy file:// không cần qua server HTTP
          renderFooter(FOOTER_FALLBACK);
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

    if (pageName === "" || pageName.startsWith("#")) {
      pageName = "index.html";
    }

    var selector = 'a[href="' + pageName + '"]';
    if (pageName === "index.html") {
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
