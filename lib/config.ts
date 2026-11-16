/**
 * DROIDTEST STUDIO - HỆ THỐNG CẤU HÌNH QUẢN TRỊ VIÊN
 * Bạn có thể thay đổi thông tin liên hệ, giá các gói và token Telegram tại đây.
 */

export interface PlanConfig {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: { name: string; tooltip: string }[];
  highlighted?: boolean;
}

export const DROIDTEST_CONFIG = {
  // 1. Thông tin liên hệ
  ADMIN_NAME: "DroidTest Studio Support",
  HOTLINE: "0988.888.888",
  ZALO_PHONE: "0988888888",
  ZALO_LINK: "https://zalo.me/0988888888",
  TELEGRAM_USERNAME: "droidtest_support",
  TELEGRAM_LINK: "https://t.me/droidtest_support",
  EMAIL_SUPPORT: "hotro@droidtest.vn",
  WORKING_HOURS: "24/7 (Phản hồi trong 5 - 15 phút)",

  // 2. Nhận thông báo đơn về điện thoại qua Telegram Bot
  TELEGRAM_NOTIFY: {
    ENABLED: false, // Đổi thành true sau khi điền BOT_TOKEN và CHAT_ID
    BOT_TOKEN: "YOUR_TELEGRAM_BOT_TOKEN_HERE",
    CHAT_ID: "YOUR_TELEGRAM_CHAT_ID_HERE",
  },

  // 3. Webhook (tùy chọn: Google Sheets / Discord)
  WEBHOOK_URL: "",

  // 4. Danh sách 12 Email Google Tester
  TESTER_EMAILS: [
    "droidtester.v1.01@gmail.com",
    "droidtester.v1.02@gmail.com",
    "droidtester.v1.03@gmail.com",
    "droidtester.v1.04@gmail.com",
    "droidtester.v1.05@gmail.com",
    "droidtester.v1.06@gmail.com",
    "droidtester.v1.07@gmail.com",
    "droidtester.v1.08@gmail.com",
    "droidtester.v1.09@gmail.com",
    "droidtester.v1.10@gmail.com",
    "droidtester.v1.11@gmail.com",
    "droidtester.v1.12@gmail.com",
  ],

  // 5. Cấu hình các gói dịch vụ
  PLANS: {
    basic: {
      id: "basic",
      name: "Gói Cơ Bản",
      price: 790000,
      period: "/ứng dụng",
      description: "Phù hợp app nhỏ, tiện ích đơn giản cần đủ số lượng tester và số ngày theo quy định.",
      features: [
        { name: "Đủ 12 tester độc lập 14 ngày", tooltip: "12 thiết bị Android 15 độc lập, không dùng chung thông số" },
        { name: "Mở app & tương tác 2-3 phút/ngày", tooltip: "Thời lượng mở app và trải nghiệm hằng ngày đều đặn" },
        { name: "Tải app trực tiếp từ Play Store", tooltip: "Tải qua link web opt-in chính thức của Google Play" },
        { name: "Xuất báo cáo CSV sau 14 ngày", tooltip: "Nhật ký phiên test chi tiết nộp kèm chứng minh với Google" },
      ],
      highlighted: false,
    },
    standard: {
      id: "standard",
      name: "Gói Tiêu Chuẩn",
      price: 1290000,
      period: "/ứng dụng",
      description: "Gói được 85% Developers lựa chọn. Đảm bảo tỷ lệ xét duyệt cao nhất với tương tác sâu.",
      features: [
        { name: "Đủ 12 tester độc lập 14 ngày", tooltip: "Cụm máy ảo chuẩn Android 15 với Google Play Services" },
        { name: "Tương tác sâu 4-5 phút/ngày (Monkey input)", tooltip: "Tự động chạm cảm ứng, cuộn trang, trải nghiệm luồng app" },
        { name: "Tự động cập nhật nếu dev đẩy bản vá", tooltip: "Đẩy APK mới lên kênh test không bị gián đoạn chuỗi 14 ngày" },
        { name: "Tặng bộ mẫu trả lời 20 câu hỏi Google Play", tooltip: "Bộ khung trả lời chuẩn nghiệp vụ giúp vượt vòng xét duyệt" },
        { name: "Bảo hành test lại miễn phí 100% nếu đứt chuỗi", tooltip: "Cam kết hoàn tiền hoặc test lại 100% nếu có ngày bị gián đoạn" },
      ],
      highlighted: true,
    },
    vip: {
      id: "vip",
      name: "Gói Trọn Gói A-Z",
      price: 2490000,
      period: "/ứng dụng",
      description: "Hỗ trợ toàn diện từ chuẩn bị Store Listing đến khi app xuất hiện công khai trên Store.",
      features: [
        { name: "Tất cả quyền lợi của Gói Tiêu Chuẩn", tooltip: "Bao gồm toàn bộ tính năng và bảo hành của gói Tiêu chuẩn" },
        { name: "Soát lỗi Policy, Data Safety, Privacy Policy", tooltip: "Kiểm tra kỹ thuật tránh vi phạm chính sách của Google" },
        { name: "Soạn thảo riêng 20 câu hỏi phù hợp app", tooltip: "Đội ngũ kỹ thuật trực tiếp viết bản trả lời chuyên sâu" },
        { name: "Đồng hành 1-1 cho đến khi app LIVE chính thức", tooltip: "Hỗ trợ kháng cáo và giải trình nếu Google có thắc mắc" },
      ],
      highlighted: false,
    },
  } as Record<string, PlanConfig>,
};
