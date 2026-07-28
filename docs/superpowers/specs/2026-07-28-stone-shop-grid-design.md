# Đặc Tả Thiết Kế: Cải Tiến Giao Diện Lưới Sản Phẩm Đồng Bộ Cho Trang Loại Đá

## 1. Mục Tiêu
Tái cấu trúc trang **Loại đá** (`loai-da.html`) từ dạng bố cục chia đôi nhiều chữ sang dạng lưới sản phẩm đồng bộ (giống phong cách trang Shop của Huy Phát). Giao diện mới sẽ hiển thị toàn bộ các mẫu đá cụ thể (23 mẫu đá con) dưới dạng thẻ lưới đồng bộ, cho phép lọc động tức thời thông qua thanh tab danh mục trên đầu.

---

## 2. Chi Tiết Bố Cục Trang Web Mới

### A. Khu Vực Lọc (Filter Tabs)
*   Nằm cố định bên dưới phần giới thiệu đầu trang.
*   **Các Tab Lọc:**
    *   `Tất cả (23)` -> hiển thị toàn bộ 23 mẫu đá.
    *   `Đá Tự Nhiên` -> hiển thị các mẫu thuộc nhóm `tu-nhien` (Granite, Marble, Quartzite, Onyx/Travertine).
    *   `Đá Nhân Tạo` -> hiển thị các mẫu thuộc nhóm `nhan-tao` (Quartz, Marble nhân tạo, Solid Surface).
    *   `Vật Liệu Giả Đá` -> hiển thị các mẫu thuộc nhóm `gia-da` (Đá nung kết, Trắng sứ, Terrazzo).

### B. Lưới Sản Phẩm (`.stone-shop-grid`)
*   Sử dụng CSS Grid thông minh: hiển thị 4 cột trên màn hình Full HD, 3 cột trên Laptop thường, 2 cột trên Máy tính bảng, 1 cột trên Điện thoại.
*   Không chia tách dòng chữ phân loại tiêu đề của 9 nhóm chính nữa để tạo cảm giác cửa hàng liền mạch.

### C. Thiết Kế Thẻ Sản Phẩm (`.stone-product-card`)
Mỗi thẻ sản phẩm sẽ gồm các thành phần sau:
1.  **Ảnh sản phẩm (60% chiều cao thẻ):** aspect-ratio 4:3, zoom 5% khi hover vào thẻ.
2.  **Nhãn xuất xứ (Badge):** Gắn đè góc trên bên trái ảnh (ví dụ: "Brazil", "Ấn Độ").
3.  **Nhãn nhóm đá (Category label):** Chữ xám nhỏ, viết hoa ở trên cùng phần chữ (ví dụ: `ĐÁ GRANITE TỰ NHIÊN`).
4.  **Tên sản phẩm (Title):** Chữ in hoa đậm màu đen sẫm (ví dụ: `KIM SA TRUNG`).
5.  **Mô tả ngắn (Short description):** 1-2 dòng mô tả đặc tính cốt lõi (ví dụ: "Nền đen sâu hạt ánh kim lấp lánh...").
6.  **Nút liên hệ Zalo:** Chiếm toàn bộ chiều rộng chân thẻ, nút màu xanh Zalo, dẫn trực tiếp đến link chat Zalo nhận tư vấn.

---

## 3. Danh Sách 23 Sản Phẩm Đá Được Cấu Hình

| ID | Tên Đá | Nhóm Lọc (`data-group`) | Thể Loại (`data-category`) | Nhãn Nhóm Hiển Thị | Xuất Xứ | Ảnh | Mô tả |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | KIM SA TRUNG | tu-nhien | granite | ĐÁ GRANITE TỰ NHIÊN | Ấn Độ | stone_granite_natural.png | Nền đen hạt ánh kim lấp lánh, chịu nhiệt và chống trầy xước rất tốt. |
| 2 | ĐEN ABSOLUTE | tu-nhien | granite | ĐÁ GRANITE TỰ NHIÊN | Ấn Độ | stone_granite_natural.png | Màu đen tuyền bóng gương tuyệt đối, mang lại phong cách hiện đại, độ cứng cao. |
| 3 | TRẮNG SUỐI LAU | tu-nhien | granite | ĐÁ GRANITE TỰ NHIÊN | Việt Nam | stone_granite_natural.png | Màu trắng xám muối tiêu, giá thành rẻ, bền bỉ thích hợp lót cầu thang, tam cấp. |
| 4 | VOLAKAS HY LẠP | tu-nhien | marble | ĐÁ MARBLE TỰ NHIÊN | Hy Lạp | stone_marble_natural.png | Vân xám loang mềm mại trên nền trắng sứ sang trọng bậc nhất. |
| 5 | CARRARA Ý | tu-nhien | marble | ĐÁ MARBLE TỰ NHIÊN | Ý | stone_marble_natural.png | Vân xám dạng sợi mảnh đan xen tinh tế, dòng đá cẩm thạch hoàng gia kinh điển. |
| 6 | DARK EMPERADOR | tu-nhien | marble | ĐÁ MARBLE TỰ NHIÊN | Tây Ban Nha | stone_marble_natural.png | Màu nâu ấm điểm vân chỉ trắng nghệ thuật, tạo không gian ấm cúng. |
| 7 | TAJ MAHAL | tu-nhien | quartzite | ĐÁ QUARTZITE TỰ NHIÊN | Brazil | stone_quartzite_natural.png | Nền vàng kem mịn như ngọc, chống xước cực tốt, dòng đá đắt giá và đẳng cấp. |
| 8 | CRISTALLO | tu-nhien | quartzite | ĐÁ QUARTZITE TỰ NHIÊN | Brazil | stone_quartzite_natural.png | Đá thạch anh tinh thể trong mờ, cho phép đèn LED xuyên qua tạo hiệu ứng lung linh. |
| 9 | ONYX MẬT ONG | tu-nhien | onyx | ĐÁ TRANG TRÍ ĐẶC BIỆT | Việt Nam | stone_marble_natural.png | Khả năng xuyên sáng vượt trội, vân sóng rực rỡ thích hợp làm vách tivi LED. |
| 10 | TRAVERTINE | tu-nhien | travertine | ĐÁ TRANG TRÍ ĐẶC BIỆT | Ý | stone_marble_natural.png | Vân lỗ rỗng tổ ong cổ điển màu kem ấm, chuyên ốp mặt tiền Địa Trung Hải. |
| 11 | VICOSTONE CALACATTA | nhan-tao | quartz | ĐÁ THẠCH ANH NHÂN TẠO | Việt Nam | stone_quartz_artificial.png | Vân xám/vàng lớn chạy uốn lượn mạnh mẽ trên nền trắng tinh khiết. |
| 12 | TRẮNG TUYẾT TRƠN | nhan-tao | quartz | ĐÁ THẠCH ANH NHÂN TẠO | Việt Nam | stone_quartz_artificial.png | Tông trắng tinh khôi tối giản, bề mặt trơn nhẵn chống bám bẩn cực tốt. |
| 13 | SPARKLING WHITE | nhan-tao | quartz | ĐÁ THẠCH ANH NHÂN TẠO | Việt Nam | stone_quartz_artificial.png | Màu trắng gương có hạt thạch anh lấp lánh phản quang dưới ánh đèn. |
| 14 | KEM OMAN NHÂN TẠO | nhan-tao | marble-nhan-tao | ĐÁ MARBLE NHÂN TẠO | Oman/TQ | stone_marble_artificial.png | Nền kem mịn đồng nhất, giá hợp lý, thích hợp cho cầu thang lớn. |
| 15 | TRẮNG VÂN MÂY MỜ | nhan-tao | marble-nhan-tao | ĐÁ MARBLE NHÂN TẠO | Việt Nam | stone_marble_artificial.png | Vân loang nhẹ mềm mại tinh tế, phù hợp cho kệ trang trí, bàn trà. |
| 16 | TRẮNG ACRYLIC TRƠN | nhan-tao | solid-surface | ĐÁ SOLID SURFACE | Hàn Quốc | stone_solid_surface.png | Ghép nối liền mạch không tì vết, uốn cong mọi chi tiết thiết kế độc đáo. |
| 17 | TERRAZZO SOLID | nhan-tao | solid-surface | ĐÁ SOLID SURFACE | Hàn Quốc | stone_solid_surface.png | Nền thạch anh đan xen hạt đá màu pastel ngẫu nhiên thời thượng. |
| 18 | CALACATTA NUNG KẾT | gia-da | nung-ket | ĐÁ NUNG KẾT & PORCELAIN | Ý/Ấn Độ | stone_sintered.png | Vân chạy xuyên cạnh 3D sắc nét, siêu cứng, chịu lực và chống trầy xước tuyệt đối. |
| 19 | XÁM XI MĂNG | gia-da | nung-ket | ĐÁ NUNG KẾT & PORCELAIN | Ấn Độ | stone_sintered.png | Bề mặt matte sần nhẹ màu bê tông hiện đại, chống trơn trượt tối đa. |
| 20 | TRẮNG SỨ DẺO | gia-da | trang-su | ĐÁ TRẮNG SỨ | Trung Quốc | stone_porcelain_white.png | Trắng sứ siêu bóng, đúc đặc chống thấm ố và chịu lực va đập cực cao. |
| 21 | TRẮNG SỨ VÂN MÂY | gia-da | trang-su | ĐÁ TRẮNG SỨ | Trung Quốc | stone_porcelain_white.png | Vân cẩm thạch in sắc nét phủ lớp men bóng gương thời thượng. |
| 22 | MICRO TERRAZZO | gia-da | terrazzo | ĐÁ TERRAZZO NHÂN TẠO | Việt Nam | stone_terrazzo.png | Hạt thạch anh nhỏ li ti rải đều trên nền xi măng trắng mài láng mịn. |
| 23 | TERRAZZO HẠT LỚN | gia-da | terrazzo | ĐÁ TERRAZZO NHÂN TẠO | Việt Nam | stone_terrazzo.png | Các mảnh đá cẩm thạch màu sắc pastel to sinh động phong cách retro. |

---

## 4. Tác Động Giao Diện & SEO
Để tránh mất mát thông tin hữu ích hỗ trợ SEO, chúng ta sẽ di chuyển toàn bộ phần giới thiệu bằng chữ chi tiết về ưu điểm, hạn chế và ứng dụng của 9 nhóm đá xuống bên dưới Lưới sản phẩm, đóng gói lại dưới dạng một **"Cẩm nang hướng dẫn chọn chất liệu đá"** gọn gàng bằng hiệu ứng Accordion (đóng mở). Khách hàng muốn đọc sâu có thể click xem, vừa bảo vệ mật độ từ khóa SEO vừa giữ trang sạch đẹp.
