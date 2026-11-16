# DROIDTEST STUDIO – NEXT.JS SAAS LANDING PAGE

Phiên bản nâng cấp giao diện chuẩn **Modern SaaS** (Next.js 15, React 19, Tailwind CSS v4, Radix UI & Lucide Icons) tích hợp toàn bộ các tính năng nghiệp vụ của DroidTest Studio:

---

## 🌟 TÍNH NĂNG ĐÃ TÍCH HỢP ĐẦY ĐỦ

1. **Bộ Tính Giá Tương Tác & Ưu Đãi Multi-App (`components/pricing-and-calculator.tsx`)**:
   - Chọn số lượng ứng dụng (1, 2, 3, 5+ app).
   - Tự động áp dụng chiết khấu combo 10%, 15%, 20%.
   - Chọn gói (Cơ bản 790k, Tiêu chuẩn 1.290k, Trọn gói 2.490k).
   - Chọn cấu hình máy (App nhẹ cụm 4 máy, App nặng cụm 2 máy +200k).
   - Hiển thị tiền tệ VND tức thì và đồng bộ với Form đặt lịch.

2. **Form Đăng Ký Trực Tuyến & Cấp 12 Email Tester Ngay (`components/booking-section.tsx` & `components/emails-delivery-modal.tsx`)**:
   - Tự động sinh mã đơn hàng độc nhất `#DT-YYYYMMDD-XXXX`.
   - Lưu trữ đơn hàng vào trình duyệt qua LocalStorage.
   - Gửi thông báo tự động về điện thoại Admin qua **Telegram Bot API**.
   - Cửa sổ Modal popup cấp ngay 12 Email Google Tester:
     - Nút **Sao chép (Dấu phẩy ",")** dán thẳng vào Play Console 1 thao tác.
     - Nút **Sao chép (Từng dòng)**.
     - Nút **Xác nhận đơn qua Zalo** (soạn sẵn tin nhắn link chốt đơn).
     - Nút **Tải phiếu tiếp nhận (.txt)**.

3. **Tra Cứu Tiến Độ Đơn Hàng 14 Ngày (`components/order-tracker.tsx`)**:
   - Tra cứu theo Mã đơn hoặc Số điện thoại Zalo.
   - Hiển thị Stepper 4 bước trực quan: Tiếp nhận -> Gửi opt-in -> Đang test X/14 ngày -> Mở khóa Production.
   - Thao tác nhanh: Lấy lại 12 email hoặc Nhắn Zalo admin cập nhật tiến độ.

4. **Ma Trận Báo Cáo Telemetry 14 Ngày Mẫu (`components/matrix-demo.tsx`)**:
   - Minh họa bảng nhật ký 12 máy ảo tester × 14 ngày không đứt chuỗi.

5. **Rào Cản & Lợi Thế Vượt Trội (`components/policy-barrier-section.tsx` & BentoGrid)**:
   - Phân tích rào cản chính sách mới của Google Play Console.
   - Trình diễn 12 thiết bị Android 15 độc lập, tương tác Monkey thông minh.

6. **Hỏi Đáp Thường Gặp (FAQ Accordion)**:
   - 6 câu hỏi cốt lõi về bảo mật source code, cập nhật bản vá, 20 câu hỏi phỏng vấn Google Play, chính sách hoàn tiền 100%.

7. **Nút Chat Zalo Nổi (Floating Contact Button)**:
   - Cố định góc phải màn hình kèm hiệu ứng phát sáng chuyển đổi khách hàng tiềm năng.

---

## 🚀 CÁCH KHỞI CHẠY DỰ ÁN

### 1. Cài đặt thư viện:
```bash
cd "mind-space-nextjs"
npm install
```

### 2. Chạy môi trường Development:
```bash
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000`

### 3. Build Production:
```bash
npm run build
npm run start
```

---

## ⚙️ CẤU HÌNH ADMIN (`lib/config.ts`)

Mở file `lib/config.ts` để cập nhật thông tin của bạn:
- **Hotline, Số Zalo, Link Zalo**: Khách hàng bấm nút sẽ chuyển hướng tới Zalo của bạn.
- **Telegram Bot Alert**: Điền `BOT_TOKEN` và `CHAT_ID` để nhận thông báo có khách đặt đơn ngay trên điện thoại.
- **12 Email Google Tester**: Điền danh sách 12 tài khoản tester chính thức của bạn vào mảng `TESTER_EMAILS`.
