# Tách Trang Độc Lập Cho Dịch Vụ, Sản Phẩm & Loại Đá — Kế Hoạch Triển Khai

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Chuyển đổi Landing Page hiện tại thành hệ thống trang web đa trang gồm Trang chủ, Dịch vụ, Sản phẩm và Loại đá, sử dụng JavaScript fetch() để chia sẻ phần Header/Footer dùng chung nhằm tránh trùng lặp code.

**Architecture:** Tách phần Header và Footer của `index.html` thành hai tệp mẫu riêng biệt `header.html` và `footer.html`. Chèn các thẻ div placeholder vào các trang con và tải nội dung thông qua API `fetch` của JavaScript trong `js/main.js`. Các trang dịch vụ, sản phẩm và loại đá sẽ là các tệp HTML độc lập với nội dung chi tiết. Tạo thêm tệp `js/gallery.js` để lọc danh mục sản phẩm động bằng JS mà không tải lại trang.

**Tech Stack:** HTML5, Vanilla CSS3, Vanilla ES6 JavaScript.

## Global Constraints
- Toàn bộ code phải chạy thuần trên trình duyệt, không dùng thư viện ngoài (như React/JQuery).
- Hệ thống điều hướng Header/Footer tải động qua `fetch` phải đảm bảo các sự kiện mobile menu và active link được thiết lập chính xác sau khi hoàn thành việc tải DOM.
- Tên các liên kết dẫn trang phải đúng định dạng: `index.html#gioi-thieu`, `dich-vu.html`, `san-pham.html`, `loai-da.html`, `index.html#lien-he`.

---

### Task 1: Tạo Các Mẫu HTML Dùng Chung (Header & Footer)

**Files:**
- Create: `header.html`
- Create: `footer.html`

**Interfaces:**
- Consumes: Cấu trúc HTML Header & Footer hiện tại trong `index.html`.
- Produces: Hai tệp HTML chứa riêng phần Header và Footer để các trang nạp vào.

- [ ] **Step 1: Tạo tệp `header.html`**
  Tạo tệp `header.html` và sao chép cấu trúc Header từ `index.html` (dòng 67-128), cập nhật đường dẫn liên kết thành hệ đa trang:
  ```html
  <div class="container header-inner">
    <a href="index.html" class="brand">
      <span class="brand-name">Xưởng đá Ngọc Cẩn</span>
      <span class="brand-sub">NGOCCAN Granite</span>
    </a>

    <nav class="nav-desktop" aria-label="Điều hướng chính">
      <a href="index.html#gioi-thieu" data-page="gioi-thieu">Giới thiệu</a>
      <a href="dich-vu.html" data-page="dich-vu">Dịch vụ</a>
      <a href="san-pham.html" data-page="san-pham">Sản phẩm</a>
      <a href="loai-da.html" data-page="loai-da">Loại đá</a>
      <a href="index.html#lien-he" data-page="lien-he">Liên hệ</a>
    </nav>

    <div class="header-cta">
      <a href="tel:0905035789" class="btn btn-outline-light">0905 035 789</a>
      <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Chat Zalo</a>
    </div>

    <button type="button" class="menu-toggle" id="menuToggle" aria-label="Mở menu" aria-expanded="false" aria-controls="mobileMenu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  </div>

  <div class="mobile-menu" id="mobileMenu" hidden>
    <nav aria-label="Điều hướng di động">
      <a href="index.html#gioi-thieu" data-page="gioi-thieu">Giới thiệu</a>
      <a href="dich-vu.html" data-page="dich-vu">Dịch vụ</a>
      <a href="san-pham.html" data-page="san-pham">Sản phẩm</a>
      <a href="loai-da.html" data-page="loai-da">Loại đá</a>
      <a href="index.html#lien-he" data-page="lien-he">Liên hệ</a>
    </nav>
    <div class="mobile-menu-cta">
      <a href="tel:0905035789" class="btn btn-outline-light block">Gọi 0905 035 789</a>
      <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="btn btn-primary block">Chat Zalo</a>
    </div>
  </div>
  ```

- [ ] **Step 2: Tạo tệp `footer.html`**
  Tạo tệp `footer.html` chứa riêng phần Footer được sao chép từ `index.html` (dòng 573-598):
  ```html
  <div class="container footer-inner">
    <div>
      <p class="footer-name">Xưởng đá Ngọc Cẩn</p>
      <p class="footer-brand">NGOCCAN Granite</p>
      <p class="footer-address">
        93/17 Đường Nguyễn Thị Tú, Bình Tân, Hồ Chí Minh, Việt Nam
      </p>
    </div>
    <div class="footer-links">
      <a href="tel:0905035789">0905 035 789</a>
      <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer">Zalo</a>
      <a href="https://www.facebook.com/profile.php?id=61575612324085" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://maps.app.goo.gl/am6ZZ63BUA5D7sE89" target="_blank" rel="noopener noreferrer">Google Maps</a>
    </div>
  </div>
  <p class="footer-copy">
    © <span id="year"></span> Xưởng đá Ngọc Cẩn. Bản quyền được bảo lưu.
  </p>
  ```

- [ ] **Step 3: Commit**
  Run: `git add header.html footer.html`
  Run: `git commit -m "feat: add shared header and footer templates"`

---

### Task 2: Cấu Hình Logic Tải Layout Động (`js/main.js`)

**Files:**
- Modify: `js/main.js`

**Interfaces:**
- Consumes: Tệp `header.html` và `footer.html` qua các cuộc gọi `fetch`.
- Produces: Logic nạp Header/Footer tự động, sự kiện mobile menu và làm nổi bật nút điều hướng hiện tại.

- [ ] **Step 1: Cập nhật mã nguồn `js/main.js`**
  Thay thế toàn bộ nội dung trong `js/main.js` để nạp Header/Footer và gán các trình lắng nghe sự kiện (event listener) sau khi DOM được tải xong:
  ```javascript
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
  ```

- [ ] **Step 2: Commit**
  Run: `git commit -am "feat: rewrite main.js to handle dynamic header/footer loading and active links"`

---

### Task 3: Chỉnh Sửa Trang Chủ (`index.html`)

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: File Header/Footer tải động thông qua div placeholder.
- Produces: Trang chủ thu gọn, chứa các liên kết dẫn đến trang con.

- [ ] **Step 1: Cập nhật Header và Footer thành Placeholders**
  * Xóa khối `<header class="site-header">` đến hết thẻ đóng `</header>` (dòng 67-128). Thay bằng:
    ```html
    <div id="header-placeholder"></div>
    ```
  * Xóa khối `<footer class="site-footer">` đến hết thẻ đóng `</footer>` (dòng 573-598). Thay bằng:
    ```html
    <div id="footer-placeholder"></div>
    ```
  * Xóa khối `<div class="lightbox" id="lightbox" hidden>...</div>` (dòng 600-612) vì Lightbox sẽ được chuyển hẳn sang trang `san-pham.html`.

- [ ] **Step 2: Thu gọn danh sách Dịch Vụ**
  * Ở section `#dich-vu`, chỉ giữ lại 3 thẻ dịch vụ: Mặt bếp (`kitchen.webp`), Lavabo (`lavabo.webp`), và Ngạch cửa (`threshold.webp`).
  * Xóa bỏ các thẻ dịch vụ còn lại (Cầu thang, Bàn ghế, Gia công theo yêu cầu).
  * Ở phía dưới lưới dịch vụ (trước thẻ đóng `</div>` của `.container`), thêm một nút liên kết dẫn đến trang Dịch vụ chi tiết:
    ```html
    <div class="section-actions text-center" style="margin-top: 40px; text-align: center;">
      <a href="dich-vu.html" class="btn btn-primary btn-lg">Xem tất cả dịch vụ & quy trình →</a>
    </div>
    ```

- [ ] **Step 3: Thu gọn danh sách Sản Phẩm**
  * Ở section `#san-pham`, đổi tiêu đề phụ thành: "Hình ảnh một số công trình tiêu biểu của xưởng."
  * Chỉ giữ lại 3 thẻ sản phẩm trong `#galleryGrid` (Mặt bếp, Lavabo, Ngạch cửa). Xóa bỏ 3 ảnh còn lại.
  * Đổi thẻ `<button type="button" class="gallery-item" ...>` thành thẻ `<div>` tĩnh để tránh click mở Lightbox ở trang chủ (chỉ click mở ở trang Sản phẩm chuyên sâu).
  * Ở dưới lưới sản phẩm, thêm một nút liên kết dẫn đến trang Sản phẩm:
    ```html
    <div class="section-actions text-center" style="margin-top: 40px; text-align: center;">
      <a href="san-pham.html" class="btn btn-primary btn-lg">Xem thư viện sản phẩm đầy đủ (Lightbox) →</a>
    </div>
    ```

- [ ] **Step 4: Thu gọn danh sách Loại Đá**
  * Ở section `#loai-da`, bên dưới lưới hiển thị 3 thẻ card đá, thêm nút dẫn tới trang loại đá chi tiết:
    ```html
    <div class="section-actions text-center" style="margin-top: 40px; text-align: center;">
      <a href="loai-da.html" class="btn btn-primary btn-lg">Tìm hiểu chi tiết & bảng so sánh đá →</a>
    </div>
    ```

- [ ] **Step 5: Commit**
  Run: `git commit -am "feat: refactor index.html to act as homepage with summary sections"`

---

### Task 4: Tạo Trang Dịch Vụ Chi Tiết (`dich-vu.html`)

**Files:**
- Create: `dich-vu.html`

**Interfaces:**
- Consumes: CSS chung từ `css/styles.css` và JS từ `js/main.js`.
- Produces: Trang Dịch vụ chi tiết hoàn chỉnh.

- [ ] **Step 1: Tạo tệp `dich-vu.html`**
  Tạo file mới `dich-vu.html` chứa nội dung hiển thị chi tiết 6 dịch vụ cùng sơ đồ quy trình:
  ```html
  <!doctype html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dịch Vụ Gia Công Đá Granite & Marble | Xưởng đá Ngọc Cẩn</title>
    <meta name="description" content="Chi tiết các dịch vụ gia công đá granite/marble theo yêu cầu tại Xưởng đá Ngọc Cẩn: Mặt bếp, lavabo, cầu thang, ngạch thềm và quy trình sản xuất." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <div id="header-placeholder"></div>

    <main>
      <!-- Page Banner -->
      <section class="hero hero-subpage" style="padding: 60px 0 80px;">
        <div class="hero-bg">
          <img src="images/about_factory.webp" alt="Dịch vụ gia công đá" class="hero-img" />
          <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
          <span class="eyebrow eyebrow-dark">Dịch vụ tại NGOCCAN Granite</span>
          <h1>Dịch vụ gia công đá chuyên nghiệp</h1>
          <p class="hero-desc">Chúng tôi nhận cắt, mài, gia công và lắp đặt trọn gói tất cả các hạng mục đá hoa cương theo bản vẽ kỹ thuật hoặc số đo thực tế.</p>
        </div>
      </section>

      <!-- Grid Dịch Vụ Chi Tiết -->
      <section class="section section-white">
        <div class="container">
          <div class="section-heading">
            <h2>Các hạng mục gia công đá nổi bật</h2>
            <p>Xưởng đá Ngọc Cẩn mang đến những giải pháp hoàn thiện bằng đá chất lượng cao, bền vững theo năm tháng.</p>
          </div>

          <div class="grid grid-3 service-grid">
            <article class="card">
              <div class="img-wrap card-img">
                <img src="images/kitchen.webp" alt="Mặt bếp đá granite" loading="lazy" />
              </div>
              <div class="card-body">
                <h3>Mặt bếp đá granite</h3>
                <p>Gia công bo cạnh, khoét lỗ chậu âm/dương, lắp đặt hoàn thiện mặt bếp đảm bảo chịu lực, chống nước và chịu nhiệt tốt.</p>
                <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="card-link" style="margin-top: 15px; display: inline-block;">Liên hệ báo giá qua Zalo →</a>
              </div>
            </article>

            <article class="card">
              <div class="img-wrap card-img">
                <img src="images/lavabo.webp" alt="Lavabo đá" loading="lazy" />
              </div>
              <div class="card-body">
                <h3>Lavabo đá cao cấp</h3>
                <p>Nhận gia công lavabo đá tự nhiên nguyên khối hoặc ghép tấm tinh xảo, mài cạnh nhẵn bóng theo kích thước nhà tắm riêng biệt.</p>
                <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="card-link" style="margin-top: 15px; display: inline-block;">Liên hệ báo giá qua Zalo →</a>
              </div>
            </article>

            <article class="card">
              <div class="img-wrap card-img">
                <img src="images/threshold.webp" alt="Ngạch cửa, bậc thềm" loading="lazy" />
              </div>
              <div class="card-body">
                <h3>Ngạch cửa & Bậc thềm</h3>
                <p>Cắt đá chuẩn xác theo khuôn cửa, mài vát góc giảm độ sắc, tạo điểm nhấn chuyển tiếp sàn nhà sang trọng và bền bỉ.</p>
                <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="card-link" style="margin-top: 15px; display: inline-block;">Liên hệ báo giá qua Zalo →</a>
              </div>
            </article>

            <article class="card">
              <div class="img-wrap card-img">
                <img src="images/stairs.webp" alt="Ốp cầu thang đá" loading="lazy" />
              </div>
              <div class="card-body">
                <h3>Ốp lát cầu thang & Bậc cấp</h3>
                <p>Gia công đá ốp bậc nằm, bậc dựng cầu thang phối màu tinh tế. Mài bo tròn cạnh mặt đá bảo vệ an toàn tối đa cho gia đình.</p>
                <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="card-link" style="margin-top: 15px; display: inline-block;">Liên hệ báo giá qua Zalo →</a>
              </div>
            </article>

            <article class="card">
              <div class="img-wrap card-img">
                <img src="images/furniture.webp" alt="Bàn ghế đá trang trí" loading="lazy" />
              </div>
              <div class="card-body">
                <h3>Bàn ghế đá trang trí</h3>
                <p>Cắt mặt đá cho bàn trà phòng khách, bàn ăn gia đình, kệ bếp bằng đá tự nhiên/nhân tạo bền đẹp chống bám bẩn hiệu quả.</p>
                <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="card-link" style="margin-top: 15px; display: inline-block;">Liên hệ báo giá qua Zalo →</a>
              </div>
            </article>

            <article class="card">
              <div class="img-wrap card-img">
                <img src="images/custom.webp" alt="Gia công đá nghệ thuật theo yêu cầu" loading="lazy" />
              </div>
              <div class="card-body">
                <h3>Gia công theo thiết kế riêng</h3>
                <p>Gia công mặt đá hoa văn nghệ thuật, phào chỉ đá, trụ cột trang trí biệt thự theo bản vẽ chi tiết của kiến trúc sư.</p>
                <a href="https://zalo.me/0905035789" target="_blank" rel="noopener noreferrer" class="card-link" style="margin-top: 15px; display: inline-block;">Liên hệ báo giá qua Zalo →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Quy Trình Làm Việc -->
      <section class="section section-tint">
        <div class="container">
          <div class="section-heading" style="text-align: center; margin: 0 auto 50px;">
            <span class="eyebrow">Quy Trình</span>
            <h2>Quy trình cung cấp dịch vụ 5 bước</h2>
            <p style="max-width: 600px; margin: 15px auto 0;">Quy trình khép kín đảm bảo chất lượng gia công chuẩn xác và tiến độ thi công nhanh chóng cho mọi công trình.</p>
          </div>

          <div class="workflow-steps">
            <div class="workflow-step">
              <div class="step-number">01</div>
              <h4>Tiếp nhận yêu cầu</h4>
              <p>Khách hàng gửi kích thước, ảnh mẫu hoặc file thiết kế bản vẽ qua Hotline / Zalo.</p>
            </div>
            <div class="workflow-step">
              <div class="step-number">02</div>
              <h4>Tư vấn & Báo giá</h4>
              <p>Xưởng tư vấn chọn chất liệu đá phù hợp túi tiền và gửi báo giá chi tiết trong ngày.</p>
            </div>
            <div class="workflow-step">
              <div class="step-number">03</div>
              <h4>Khảo sát & Đo đạc</h4>
              <p>Thợ đến công trình đo đạc thực tế để đảm bảo đá gia công lắp ráp khít khao 100%.</p>
            </div>
            <div class="workflow-step">
              <div class="step-number">04</div>
              <h4>Gia công tại xưởng</h4>
              <p>Tiến hành cắt xẻ đá bằng máy và mài góc cạnh thủ công cẩn thận dưới tay nghề thợ lâu năm.</p>
            </div>
            <div class="workflow-step">
              <div class="step-number">05</div>
              <h4>Lắp đặt hoàn thiện</h4>
              <p>Vận chuyển sản phẩm và tiến hành lắp đặt, bắn silicon keo chống thấm hoàn chỉnh bàn giao.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div id="footer-placeholder"></div>

    <script src="js/main.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Commit**
  Run: `git add dich-vu.html`
  Run: `git commit -m "feat: create dedicated services page with workflow layout"`

---

### Task 5: Tạo Trang Loại Đá Chi Tiết (`loai-da.html`)

**Files:**
- Create: `loai-da.html`

**Interfaces:**
- Consumes: CSS chung từ `css/styles.css` và JS từ `js/main.js`.
- Produces: Trang Loại đá chi tiết cùng bảng so sánh kỹ thuật.

- [ ] **Step 1: Tạo tệp `loai-da.html`**
  Tạo file mới `loai-da.html` chứa nội dung giới thiệu chi tiết 3 loại đá kèm bảng so sánh:
  ```html
  <!doctype html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Các Loại Đá Granite, Marble, Quartz | Xưởng đá Ngọc Cẩn</title>
    <meta name="description" content="Tìm hiểu đặc tính, ưu điểm của đá granite tự nhiên, granite nhân tạo và đá marble cẩm thạch đang được gia công tại Xưởng đá Ngọc Cẩn." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <div id="header-placeholder"></div>

    <main>
      <!-- Page Banner -->
      <section class="hero hero-subpage" style="padding: 60px 0 80px;">
        <div class="hero-bg">
          <img src="images/hero_bg.webp" alt="Phân loại đá gia công" class="hero-img" />
          <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
          <span class="eyebrow eyebrow-dark">Đặc tính kỹ thuật</span>
          <h1>Các loại đá gia công phổ biến</h1>
          <p class="hero-desc">Thông tin chi tiết về ưu nhược điểm của từng loại đá giúp bạn lựa chọn đúng chất liệu cho công trình của mình.</p>
        </div>
      </section>

      <!-- Phân Tích Đá Chi Tiết -->
      <section class="section section-white">
        <div class="container">
          <div class="stone-details-list">
            <div class="stone-detail-item" style="display: grid; grid-template-columns: 1fr; gap: 30px; margin-bottom: 60px; align-items: center;">
              <div class="img-wrap" style="border-radius: var(--radius-lg); aspect-ratio: 16/10;">
                <img src="images/stone_natural.webp" alt="Cận cảnh đá granite tự nhiên" />
              </div>
              <div>
                <span class="eyebrow">Đá hoa cương tự nhiên</span>
                <h2 style="margin-top: 10px;">Đá Granite tự nhiên</h2>
                <p style="margin-top: 15px; color: var(--stone-600); line-height: 1.7;">Đá Granite tự nhiên được hình thành từ dòng dung nham đông nguội sâu dưới lòng đất qua hàng triệu năm. Đây là loại đá có độ bền cơ học cao nhất được dùng phổ biến trong xây dựng.</p>
                <ul style="margin-top: 15px; padding-left: 20px; color: var(--stone-600); line-height: 1.7;">
                  <li><strong>Ưu điểm:</strong> Chống trầy xước rất tốt, chịu nhiệt độ cao, vân đá độc bản tự nhiên không trùng lặp, chống phai màu khi tiếp xúc với nắng mưa.</li>
                  <li><strong>Ứng dụng tốt nhất:</strong> Bậc cấp ngoài trời, mặt tiền nhà, ốp cầu thang, ngạch cửa thềm, mặt bếp chịu lực.</li>
                </ul>
              </div>
            </div>

            <div class="stone-detail-item" style="display: grid; grid-template-columns: 1fr; gap: 30px; margin-bottom: 60px; align-items: center;">
              <div class="img-wrap" style="border-radius: var(--radius-lg); aspect-ratio: 16/10;">
                <img src="images/stone_artificial.webp" alt="Cận cảnh đá thạch anh nhân tạo" />
              </div>
              <div>
                <span class="eyebrow">Đá nhân tạo gốc thạch anh</span>
                <h2 style="margin-top: 10px;">Đá Granite nhân tạo (Quartz)</h2>
                <p style="margin-top: 15px; color: var(--stone-600); line-height: 1.7;">Được cấu tạo từ khoảng 90% bột đá thạch anh tự nhiên kết hợp keo polymer chuyên dụng tạo ra bề mặt đá đặc khít không xốp lỗ.</p>
                <ul style="margin-top: 15px; padding-left: 20px; color: var(--stone-600); line-height: 1.7;">
                  <li><strong>Ưu điểm:</strong> Độ cứng cực cao, chống thấm nước tuyệt đối, màu sắc và vân hoa văn đồng đều đồng bộ, dễ vệ sinh lau chùi dầu mỡ.</li>
                  <li><strong>Ứng dụng tốt nhất:</strong> Mặt bàn bếp cao cấp, bàn ăn gia đình hiện đại, lavabo mặt bàn nhà tắm.</li>
                </ul>
              </div>
            </div>

            <div class="stone-detail-item" style="display: grid; grid-template-columns: 1fr; gap: 30px; align-items: center;">
              <div class="img-wrap" style="border-radius: var(--radius-lg); aspect-ratio: 16/10;">
                <img src="images/stone_marble.webp" alt="Cận cảnh đá marble tự nhiên" />
              </div>
              <div>
                <span class="eyebrow">Đá cẩm thạch tự nhiên</span>
                <h2 style="margin-top: 10px;">Đá Marble cẩm thạch</h2>
                <p style="margin-top: 15px; color: var(--stone-600); line-height: 1.7;">Dòng đá có nguồn gốc biến chất từ đá vôi, sở hữu các đường vân mây bay bổng mượt mà và màu sắc tươi sáng vô cùng sang trọng.</p>
                <ul style="margin-top: 15px; padding-left: 20px; color: var(--stone-600); line-height: 1.7;">
                  <li><strong>Ưu điểm:</strong> Giá trị thẩm mỹ rất cao, vân mây độc đáo mang vẻ đẹp quý phái, mát mẻ điều hòa nhiệt độ phòng.</li>
                  <li><strong>Ứng dụng tốt nhất:</strong> Vách tivi phòng khách, mặt bàn trà sofa, bàn trang điểm, ốp tường trang trí nội thất.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bảng So Sánh Kỹ Thuật -->
      <section class="section section-tint">
        <div class="container">
          <div class="section-heading" style="text-align: center; margin-bottom: 50px;">
            <h2>Bảng đối chiếu thông số kỹ thuật</h2>
            <p>Bảng tóm tắt so sánh nhanh các đặc tính giúp bạn dễ dàng đưa ra quyết định mua sắm hợp lý.</p>
          </div>

          <div style="overflow-x: auto;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Đặc Tính Kỹ Thuật</th>
                  <th>Đá Granite Tự Nhiên</th>
                  <th>Đá Nhân Tạo (Quartz)</th>
                  <th>Đá Marble Cẩm Thạch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Độ cứng (Chống xước)</strong></td>
                  <td>★★★★★ (Cực kỳ cứng)</td>
                  <td>★★★★★ (Cực kỳ cứng)</td>
                  <td>★★★☆☆ (Trung bình)</td>
                </tr>
                <tr>
                  <td><strong>Chống thấm ố</strong></td>
                  <td>★★★★☆ (Khá tốt)</td>
                  <td>★★★★★ (Tuyệt đối)</td>
                  <td>★★★☆☆ (Dễ thấm ố)</td>
                </tr>
                <tr>
                  <td><strong>Kháng nhiệt (Ngoài trời)</strong></td>
                  <td>★★★★★ (Không ảnh hưởng)</td>
                  <td>★★★☆☆ (Chỉ dùng trong nhà)</td>
                  <td>★★★★☆ (Trung bình)</td>
                </tr>
                <tr>
                  <td><strong>Độ đồng đều vân</strong></td>
                  <td>★★☆☆☆ (Vân ngẫu nhiên)</td>
                  <td>★★★★★ (Vân đồng nhất)</td>
                  <td>★★★☆☆ (Vân ngẫu nhiên)</td>
                </tr>
                <tr>
                  <td><strong>Mức giá đầu tư</strong></td>
                  <td>Phổ thông - Trung cấp</td>
                  <td>Trung cấp - Cao cấp</td>
                  <td>Cao cấp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>

    <div id="footer-placeholder"></div>

    <script src="js/main.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Cập nhật responsive của grid stone-detail-item trong CSS**
  Mặc định grid đá sẽ hiển thị dọc trên điện thoại. Ta sẽ bổ sung CSS để chuyển hiển thị ngang trên màn hình máy tính lớn ở Task 7.

- [ ] **Step 3: Commit**
  Run: `git add loai-da.html`
  Run: `git commit -m "feat: create stone types page with detailed specs and comparison table"`

---

### Task 6: Tạo Trang Sản Phẩm & Mã Lọc Gallery Động (`san-pham.html` & `js/gallery.js`)

**Files:**
- Create: `san-pham.html`
- Create: `js/gallery.js`

**Interfaces:**
- Consumes: Thư mục ảnh `images/`, CSS từ `css/styles.css`.
- Produces: Trang sản phẩm tương tác, nạp Lightbox và bộ lọc danh mục động không tải lại trang.

- [ ] **Step 1: Tạo tệp `san-pham.html`**
  Tạo file mới `san-pham.html` chứa bộ lọc phân loại sản phẩm, lưới sản phẩm 6 ảnh đầy đủ kèm Lightbox:
  ```html
  <!doctype html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Thư Viện Sản Phẩm Đá Lắp Đặt Thực Tế | Xưởng đá Ngọc Cẩn</title>
    <meta name="description" content="Hình ảnh thực tế các sản phẩm đá mặt bếp, lavabo, cầu thang, ngạch cửa thềm được xưởng đá Ngọc Cẩn gia công tỉ mỉ." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <div id="header-placeholder"></div>

    <main>
      <!-- Page Banner -->
      <section class="hero hero-subpage" style="padding: 60px 0 80px;">
        <div class="hero-bg">
          <img src="images/about_finished.webp" alt="Thư viện sản phẩm hoàn thiện" class="hero-img" />
          <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
          <span class="eyebrow eyebrow-dark">Thư viện công trình</span>
          <h1>Ảnh sản phẩm gia công hoàn thiện</h1>
          <p class="hero-desc">Tuyển tập hình ảnh thực tế các hạng mục ốp lát đá granite, marble sắc nét do thợ xưởng đá Ngọc Cẩn lắp đặt.</p>
        </div>
      </section>

      <!-- Thư Viện Tương Tác -->
      <section class="section section-white">
        <div class="container">
          <!-- Các nút lọc danh mục -->
          <div class="gallery-filters">
            <button type="button" class="filter-btn active" data-filter="all">Tất cả sản phẩm</button>
            <button type="button" class="filter-btn" data-filter="kitchen">Mặt bếp</button>
            <button type="button" class="filter-btn" data-filter="lavabo">Lavabo</button>
            <button type="button" class="filter-btn" data-filter="stairs">Cầu thang / Ngạch</button>
            <button type="button" class="filter-btn" data-filter="furniture">Bàn ghế & Trang trí</button>
          </div>

          <!-- Lưới ảnh sản phẩm -->
          <div class="grid grid-3 gallery-grid" id="galleryGrid">
            <button type="button" class="gallery-item" data-category="kitchen" data-src="images/kitchen.webp" data-label="Mặt bếp đá granite">
              <div class="img-wrap aspect-square">
                <img src="images/kitchen.webp" alt="Mặt bếp đá granite" loading="lazy" />
              </div>
              <span class="gallery-caption">Mặt bếp đá granite</span>
            </button>

            <button type="button" class="gallery-item" data-category="lavabo" data-src="images/lavabo.webp" data-label="Lavabo đá marble tự nhiên">
              <div class="img-wrap aspect-square">
                <img src="images/lavabo.webp" alt="Lavabo đá marble" loading="lazy" />
              </div>
              <span class="gallery-caption">Lavabo đá</span>
            </button>

            <button type="button" class="gallery-item" data-category="stairs" data-src="images/threshold.webp" data-label="Ngạch thềm cửa đá granite đen bóng">
              <div class="img-wrap aspect-square">
                <img src="images/threshold.webp" alt="Ngạch cửa đá" loading="lazy" />
              </div>
              <span class="gallery-caption">Ngạch cửa đá</span>
            </button>

            <button type="button" class="gallery-item" data-category="stairs" data-src="images/stairs.webp" data-label="Cầu thang ốp đá cẩm thạch trắng vân xám">
              <div class="img-wrap aspect-square">
                <img src="images/stairs.webp" alt="Ốp cầu thang đá" loading="lazy" />
              </div>
              <span class="gallery-caption">Ốp cầu thang đá</span>
            </button>

            <button type="button" class="gallery-item" data-category="furniture" data-src="images/furniture.webp" data-label="Bàn trà sofa tròn mặt đá marble">
              <div class="img-wrap aspect-square">
                <img src="images/furniture.webp" alt="Bàn ghế đá" loading="lazy" />
              </div>
              <span class="gallery-caption">Bàn ghế đá</span>
            </button>

            <button type="button" class="gallery-item" data-category="furniture" data-src="images/custom.webp" data-label="Sản phẩm đá ghép tấm nghệ thuật nghệ thuật">
              <div class="img-wrap aspect-square">
                <img src="images/custom.webp" alt="Sản phẩm đá hoàn thiện nghệ thuật" loading="lazy" />
              </div>
              <span class="gallery-caption">Sản phẩm hoàn thiện nghệ thuật</span>
            </button>
          </div>
        </div>
      </section>
    </main>

    <div id="footer-placeholder"></div>

    <!-- LIGHTBOX (chỉ cần thiết cho trang sản phẩm) -->
    <div class="lightbox" id="lightbox" hidden>
      <div class="lightbox-inner">
        <button type="button" class="lightbox-close" id="lightboxClose" aria-label="Đóng">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <img class="lightbox-img" id="lightboxImg" src="" alt="" />
        <p class="lightbox-caption" id="lightboxCaption"></p>
      </div>
    </div>

    <script src="js/main.js"></script>
    <script src="js/gallery.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Tạo tệp `js/gallery.js`**
  Tạo tệp JS xử lý sự kiện lọc sản phẩm và kích hoạt Lightbox phóng to ảnh:
  ```javascript
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
  ```

- [ ] **Step 3: Commit**
  Run: `git add san-pham.html js/gallery.js`
  Run: `git commit -m "feat: create gallery page with visual filters and dedicated gallery.js"`

---

### Task 7: Cập Nhật Phong Cách CSS (`css/styles.css`)

**Files:**
- Modify: `css/styles.css`

**Interfaces:**
- Consumes: Các thẻ HTML và cấu trúc của trang dịch vụ, loại đá, sản phẩm mới.
- Produces: CSS trang trí giao diện bảng, quy trình 5 bước, bộ lọc ảnh sản phẩm và điều hướng active.

- [ ] **Step 1: Cập nhật file `css/styles.css`**
  Mở file `css/styles.css` và thêm khối CSS sau vào cuối tệp để bổ sung các định nghĩa phong cách cho các giao diện mới:
  ```css
  /* =========================================================
     Multi-page CSS additions
     ========================================================= */

  /* Menu Link Active State */
  .nav-desktop a.active {
    color: var(--amber-500) !important;
    font-weight: 700;
  }
  .mobile-menu nav a.active {
    background: var(--stone-900);
    color: var(--amber-500);
    font-weight: 700;
  }

  /* Subpage Hero */
  .hero-subpage {
    position: relative;
    padding: 60px 0 80px;
    background: var(--stone-950);
  }

  /* Quy Trình 5 Bước - Dịch Vụ */
  .workflow-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
  }
  @media (min-width: 768px) {
    .workflow-steps {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  .workflow-step {
    background: var(--white);
    padding: 30px 24px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--stone-200);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .workflow-step:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
  .step-number {
    font-size: 32px;
    font-weight: 800;
    color: var(--amber-500);
    opacity: 0.8;
    line-height: 1;
    margin-bottom: 12px;
  }
  .workflow-step h4 {
    font-size: 16px;
    font-weight: 700;
    color: var(--stone-900);
    margin: 0 0 10px 0;
  }
  .workflow-step p {
    font-size: 13px;
    color: var(--stone-600);
    line-height: 1.6;
    margin: 0;
  }

  /* Bộ lọc ảnh - Sản Phẩm */
  .gallery-filters {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }
  .filter-btn {
    background: transparent;
    border: 1px solid var(--stone-300);
    color: var(--stone-700);
    padding: 8px 20px;
    border-radius: var(--radius-full);
    font-size: 14px;
    font-weight: 600;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .filter-btn:hover,
  .filter-btn.active {
    background: var(--amber-500);
    color: var(--stone-950);
    border-color: var(--amber-500);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
  }
  .gallery-item {
    transition: opacity 0.35s ease, transform 0.35s ease;
  }
  .gallery-item.hidden {
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  /* Chi Tiết Loại Đá - Grid */
  @media (min-width: 768px) {
    .stone-details-list .stone-detail-item {
      grid-template-columns: 1fr 1.2fr !important;
      gap: 50px !important;
    }
    .stone-details-list .stone-detail-item:nth-child(even) > div:first-child {
      order: 2;
    }
  }

  /* Bảng So Sánh Kỹ Thuật - Loại Đá */
  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--stone-200);
    margin-top: 30px;
    font-size: 14px;
  }
  .comparison-table th,
  .comparison-table td {
    padding: 16px 20px;
    text-align: left;
    border-bottom: 1px solid var(--stone-200);
  }
  .comparison-table th {
    background: var(--stone-900);
    color: var(--white);
    font-weight: 700;
  }
  .comparison-table tr:last-child td {
    border-bottom: none;
  }
  .comparison-table tr:nth-child(even) {
    background: var(--stone-50);
  }
  .comparison-table td strong {
    color: var(--stone-900);
  }
  ```

- [ ] **Step 2: Commit**
  Run: `git commit -am "style: add responsive grid layouts, dynamic filter animations, comparison table, and workflow CSS"`

---

### Task 8: Chạy Máy Chủ Thử Nghiệm & Xác Minh

**Files:**
- None

**Interfaces:**
- Consumes: Toàn bộ mã nguồn dự án tĩnh.
- Produces: Kết quả kiểm tra tương tác thực tế của người dùng.

- [ ] **Step 1: Chạy máy chủ cục bộ**
  Khởi động một HTTP server ở cổng bất kỳ để truy cập web không bị CORS:
  Run: `npx -y serve`

- [ ] **Step 2: Kiểm tra định tuyến**
  * Nhấp chuyển tiếp giữa các trang Trang chủ -> Dịch vụ -> Sản phẩm -> Loại đá.
  * Xác nhận Header và Footer tải đầy đủ trên tất cả các trang con.
  * Kiểm tra nút liên kết "Giới thiệu" và "Liên hệ" từ các trang con có dẫn về đúng phần mỏ neo tương ứng của trang chủ `index.html#gioi-thieu` và `index.html#lien-he`.

- [ ] **Step 3: Kiểm tra bộ lọc và Lightbox ở trang Sản phẩm**
  * Mở trang `san-pham.html`. Click chọn bộ lọc "Mặt bếp" và kiểm tra xem chỉ còn hình ảnh mặt bếp hiển thị.
  * Click vào hình ảnh bất kỳ để mở rộng Lightbox.
  * Đóng Lightbox bằng nút (x), click vùng tối bên ngoài hoặc phím `Esc` để đóng.

- [ ] **Step 4: Kiểm tra hiển thị di động**
  * Co giãn trình duyệt về kích thước di động.
  * Nhấp mở/đóng Mobile Menu trên thanh Header để xác nhận hoạt động bình thường trên tất cả các trang con.
  * Kiểm tra bảng so sánh trên điện thoại di động có hiển thị thanh trượt ngang cuộn (overflow-x) để không bị vỡ giao diện.

- [ ] **Step 5: Đẩy thay đổi lên kho chứa**
  Sau khi kiểm thử hoàn tất thành công, đẩy toàn bộ code lên GitHub.
  Run: `git push`
