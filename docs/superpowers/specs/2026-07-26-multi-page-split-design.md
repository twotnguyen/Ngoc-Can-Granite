# Thiết Kế: Tách Trang Độc Lập Cho Dịch Vụ, Sản Phẩm và Loại Đá — Xưởng đá Ngọc Cẩn

* **Ngày lập:** 2026-07-26
* **Trạng thái:** Chờ phê duyệt (Draft)
* **Dự án:** Ngoc-Can-Granite Multi-page Split
* **Mục tiêu:** Chuyển đổi trang Landing Page đơn lẻ hiện tại thành một trang web đa trang chuyên nghiệp gồm Trang chủ, Dịch vụ, Sản phẩm và Loại đá nhằm tăng tính chuyên sâu về nội dung, tối ưu hóa trải nghiệm người dùng (UX) và cải thiện hiệu quả SEO.

---

## 1. Cấu Trúc Thư Mục & Phân Chia File
Để triển khai hệ thống đa trang sạch sẽ, chúng ta sẽ phân tách mã nguồn thành các file sau:

```text
Ngoc-Can-Granite/
├── css/
│   └── styles.css          # Mã nguồn CSS chung cho toàn bộ website
├── js/
│   ├── main.js             # Logic dùng chung (Tải Header/Footer, Mobile menu, Scroll header)
│   └── gallery.js          # [NEW] Logic lọc danh mục ảnh & Lightbox cho trang Sản phẩm
├── index.html              # Trang chủ (Tóm tắt năng lực, Giới thiệu & Liên hệ chính)
├── dich-vu.html            # [NEW] Trang giới thiệu chi tiết các dịch vụ gia công đá
├── san-pham.html           # [NEW] Trang thư viện hình ảnh thực tế tích hợp bộ lọc danh mục
├── loai-da.html            # [NEW] Trang chi tiết về các loại đá đang gia công
├── header.html             # [NEW] File HTML chứa cấu trúc Header dùng chung
└── footer.html             # [NEW] File HTML chứa cấu trúc Footer dùng chung
```

---

## 2. Thiết Kế Header & Footer Dùng Chung (Fetch Mechanism)
Để tránh trùng lặp code HTML và giúp bảo trì menu dễ dàng, phần Header và Footer sẽ được tách ra các file độc lập và tải tự động bằng JavaScript.

### 2.1. Cấu trúc Placeholder trên các file HTML chính
Tất cả các file `index.html`, `dich-vu.html`, `san-pham.html`, và `loai-da.html` sẽ chứa các thẻ rỗng thay thế cho khối header/footer cũ:
```html
<!-- Ở đầu thẻ <body> -->
<div id="header-placeholder"></div>

<!-- Nội dung chính của từng trang -->
<main>...</main>

<!-- Ở cuối thẻ <body> -->
<div id="footer-placeholder"></div>
```

### 2.2. Logic JavaScript Tải Tự Động (`js/main.js`)
Sử dụng API `fetch` của trình duyệt để nạp mã nguồn HTML vào các placeholder tương ứng khi trang web tải xong:
```javascript
document.addEventListener("DOMContentLoaded", function () {
  // 1. Tải Header dùng chung
  var headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("header.html")
      .then(response => {
        if (!response.ok) throw new Error("Không thể tải file header.html");
        return response.text();
      })
      .then(html => {
        headerPlaceholder.innerHTML = html;
        initMenuEvents();        // Khởi tạo sự kiện đóng mở mobile menu
        highlightActiveLink();   // Đánh dấu trang hiện tại trên menu
      })
      .catch(err => console.error("Lỗi nạp Header:", err));
  }

  // 2. Tải Footer dùng chung
  var footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then(response => {
        if (!response.ok) throw new Error("Không thể tải file footer.html");
        return response.text();
      })
      .then(html => {
        footerPlaceholder.innerHTML = html;
        // Cập nhật năm tự động ở footer
        var yearEl = document.getElementById("year");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      })
      .catch(err => console.error("Lỗi nạp Footer:", err));
  }
});
```

---

## 3. Nội Dung Chi Tiết Cho Từng Trang

### 3.1. Trang chủ (`index.html`)
* **Hero Banner:** Giữ nguyên thiết kế premium hiện tại.
* **Về chúng tôi (About):** Đoạn giới thiệu ngắn kèm cụm 3 ảnh xưởng/gia công.
* **Dịch vụ tiêu biểu:** Trưng bày 3 dịch vụ chính dưới dạng thẻ card, kèm link dẫn tới trang dịch vụ:
  ```html
  <a href="dich-vu.html" class="btn btn-outline-light">Xem tất cả dịch vụ →</a>
  ```
* **Sản phẩm hoàn thiện:** Grid hiển thị 3 sản phẩm nổi bật, kèm link:
  ```html
  <a href="san-pham.html" class="btn btn-outline-light">Xem thư viện sản phẩm đầy đủ →</a>
  ```
* **Các loại đá:** Giới thiệu ngắn gọn 3 dòng đá kèm liên kết tới trang Loại đá.
* **Liên hệ & Google Maps:** Giữ nguyên khung liên hệ chi tiết và bản đồ nhúng tại chân trang chủ.

### 3.2. Trang Dịch vụ (`dich-vu.html`)
* **Banner tiêu đề:** Thiết kế banner tối màu (glassmorphism/stone theme) với tiêu đề: "Dịch Vụ Gia Công Đá Granite & Marble".
* **Lưới dịch vụ (Service Grid):** Hiển thị đầy đủ 6 thẻ dịch vụ chi tiết (Bếp, Lavabo, Ngạch cửa, Cầu thang, Bàn ghế, Gia công theo bản vẽ). Mỗi dịch vụ có mô tả cụ thể hơn và nút CTA: "Gửi ảnh/bản vẽ báo giá qua Zalo".
* **Quy trình gia công 5 bước:** Bổ sung sơ đồ khối quy trình (Tiếp nhận -> Tư vấn & Báo giá -> Khảo sát thực địa -> Gia công tại xưởng -> Thi công lắp đặt hoàn thiện).

### 3.3. Trang Sản phẩm (`san-pham.html`)
* **Banner tiêu đề:** "Thư Viện Ảnh Sản Phẩm".
* **Thanh lọc danh mục (Filter Tabs):** 
  ```html
  <div class="gallery-filters">
    <button type="button" class="filter-btn active" data-filter="all">Tất cả</button>
    <button type="button" class="filter-btn" data-filter="kitchen">Mặt bếp</button>
    <button type="button" class="filter-btn" data-filter="lavabo">Lavabo</button>
    <button type="button" class="filter-btn" data-filter="stairs">Cầu thang & Thềm</button>
    <button type="button" class="filter-btn" data-filter="furniture">Bàn ghế & Trang trí</button>
  </div>
  ```
* **Lưới sản phẩm (Gallery Grid):** Gán các lớp phân loại tương ứng vào mỗi thẻ sản phẩm (Ví dụ: `.filter-kitchen`, `.filter-lavabo`).
* **Lightbox:** Giữ cấu trúc Lightbox nằm trong trang `san-pham.html` để phục vụ phóng to ảnh sản phẩm.

### 3.4. Trang Loại đá (`loai-da.html`)
* **Banner tiêu đề:** "Các Loại Đá Gia Công".
* **Thông tin chi tiết:** 3 phần giới thiệu riêng biệt cho Đá Granite tự nhiên, Đá Granite nhân tạo, và Đá Marble. Làm nổi bật: Ưu điểm nổi trội, Nhược điểm (nếu có), và Ứng dụng thực tế thích hợp nhất.
* **Bảng so sánh kỹ thuật:** Bảng trực quan so sánh 3 loại đá trên thang đo 5 sao về các tiêu chí: Độ cứng, Chống trầy, Chống thấm, Thẩm mỹ thẩm mỹ, và Mức giá thành.

---

## 4. Chi Tiết Thay Đổi Giao Diện (CSS)
Bổ sung các lớp CSS mới vào `css/styles.css` để định hình các thành phần mới:
* **Active link nổi bật trên menu:**
  ```css
  .nav-desktop a.active,
  .mobile-menu nav a.active {
    color: var(--amber-500);
    font-weight: 700;
  }
  ```
* **Bộ lọc ảnh sản phẩm:**
  ```css
  .gallery-filters {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }
  .filter-btn {
    background: transparent;
    border: 1px solid var(--stone-300);
    color: var(--stone-700);
    padding: 8px 18px;
    border-radius: var(--radius-full);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.25s ease;
  }
  .filter-btn:hover, .filter-btn.active {
    background: var(--amber-500);
    color: var(--stone-950);
    border-color: var(--amber-500);
  }
  /* Animation ẩn/hiện sản phẩm khi lọc */
  .gallery-item {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .gallery-item.hidden {
    display: none;
    opacity: 0;
    transform: scale(0.9);
  }
  ```
* **Bảng so sánh kỹ thuật:** Tạo kiểu bảng responsive cho trang Loại đá sạch đẹp, tối ưu hiển thị trên cả điện thoại di động.

---

## 5. Logic JavaScript Mới

### 5.1. File `js/gallery.js` (Chỉ tải trên trang `san-pham.html`)
Chứa toàn bộ logic xử lý bộ lọc ảnh sản phẩm và điều khiển Lightbox:
```javascript
(function () {
  "use strict";

  // Logic bộ lọc sản phẩm
  var filterButtons = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Đổi trạng thái nút bấm active
      filterButtons.forEach(btn => btn.classList.remove("active"));
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

  // Khởi tạo Lightbox tương tự trong main.js cũ nhưng chuyên biệt cho gallery
  // ...
})();
```

---

## 6. Kế Hoạch Kiểm Thử (Verification Plan)

### 6.1. Kiểm thử hiển thị và Định tuyến (Routing & Render)
* Chạy máy chủ cục bộ bằng Live Server hoặc lệnh Python/Node.
* Kiểm tra việc tải động Header và Footer có diễn ra thành công trên cả 4 trang hay không.
* Nhấp vào các liên kết trong menu ở Header và chân trang ở Footer để đảm bảo chuyển đổi trang mượt mà, không gặp lỗi `404 Not Found`.

### 6.2. Kiểm thử Trải nghiệm người dùng (UX)
* Kiểm tra tính năng làm nổi bật liên kết trang hiện tại (Active Menu Item) hoạt động chính xác khi người dùng chuyển trang.
* Kiểm tra bộ lọc sản phẩm trên trang `san-pham.html`: Khi chọn tab phân loại, các ảnh không thuộc phân loại phải biến mất, các ảnh khớp phân loại phải hiển thị đúng vị trí.
* Mở Lightbox trên trang sản phẩm để đảm bảo ảnh phóng to hoạt động bình thường và hiển thị chính xác tên/ảnh thực tế.

### 6.3. Kiểm thử SEO & Responsive
* Kiểm tra cấu trúc tiêu đề `<h1>` (mỗi trang con phải có đúng một thẻ `<h1>` duy nhất làm tiêu đề trang).
* Kiểm tra khả năng co giãn hiển thị (Responsive) của các trang mới trên màn hình di động thông qua Developer Tools của Chrome/Safari.
