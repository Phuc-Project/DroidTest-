"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { DROIDTEST_CONFIG } from "@/lib/config";
import { OrderRecord, EmailsDeliveryModal } from "./emails-delivery-modal";
import { MessageSquare, Send, ShieldCheck, Zap } from "lucide-react";

interface BookingSectionProps {
  selectedPlan: string;
  onSelectPlan: (plan: string) => void;
  profile: string;
  onProfileChange: (prof: string) => void;
  onOrderCreated?: (order: OrderRecord) => void;
}

export function BookingSection({
  selectedPlan,
  onSelectPlan,
  profile,
  onProfileChange,
  onOrderCreated,
}: BookingSectionProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [appLink, setAppLink] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeOrder, setActiveOrder] = useState<OrderRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generateOrderId = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `DT-${y}${m}${d}-${rand}`;
  };

  const notifyViaTelegram = async (order: OrderRecord) => {
    const { TELEGRAM_NOTIFY } = DROIDTEST_CONFIG;
    if (!TELEGRAM_NOTIFY || !TELEGRAM_NOTIFY.ENABLED) return;
    const { BOT_TOKEN, CHAT_ID } = TELEGRAM_NOTIFY;
    if (!BOT_TOKEN || !CHAT_ID || BOT_TOKEN.includes("YOUR_")) return;

    const messageText =
      `🚀 *CÓ ĐƠN ĐĂNG KÝ MỚI TỪ WEBSITE DROIDTEST!*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🔖 *Mã đơn:* \`${order.id}\`\n` +
      `👤 *Khách hàng:* ${order.name}\n` +
      `📞 *SĐT / Zalo:* ${order.contact}\n` +
      `📱 *App / Link:* ${order.appLink || "Chưa cung cấp"}\n` +
      `📦 *Gói test:* ${order.planName}\n` +
      `⚙️ *Phân loại:* ${order.profile === "heavy" ? "App Nặng (Cụm 2 máy)" : "App Nhẹ (Cụm 4 máy)"}\n` +
      `💰 *Ước tính:* ${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(order.estimatedPrice)}\n` +
      `📝 *Ghi chú:* ${order.note || "Không có"}\n` +
      `⏰ *Thời gian:* ${new Date(order.createdAt).toLocaleString("vi-VN")}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👉 *Hãy nhắn Zalo cho khách để xác nhận link và kích hoạt 14 ngày!*`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: messageText,
          parse_mode: "Markdown",
        }),
      });
    } catch (err) {
      console.warn("Telegram alert error:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setErrorMessage("Vui lòng nhập Họ tên và Số Zalo/Hotline để liên hệ!");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const orderId = generateOrderId();
    const planInfo = DROIDTEST_CONFIG.PLANS[selectedPlan] || DROIDTEST_CONFIG.PLANS.standard;
    const calculatedPrice = planInfo.price + (profile === "heavy" ? 200000 : 0);

    const orderData: OrderRecord = {
      id: orderId,
      name: name.trim(),
      contact: contact.trim(),
      appLink: appLink.trim(),
      plan: selectedPlan,
      planName: planInfo.name,
      profile,
      estimatedPrice: calculatedPrice,
      note: note.trim(),
      createdAt: new Date().toISOString(),
      status: "waiting_testers_add",
      statusText: "Đã tiếp nhận - Sẵn sàng kích hoạt 14 ngày",
      currentDay: 0,
      totalDays: 14,
      testerEmails: DROIDTEST_CONFIG.TESTER_EMAILS,
    };

    // Save to LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem("droidtest_orders") || "[]");
      existing.unshift(orderData);
      localStorage.setItem("droidtest_orders", JSON.stringify(existing));
      localStorage.setItem("droidtest_active_order", JSON.stringify(orderData));
    } catch (err) {
      console.error("Local storage error:", err);
    }

    // Trigger Telegram notify
    await notifyViaTelegram(orderData);

    // Callback
    if (onOrderCreated) {
      onOrderCreated(orderData);
    }

    setActiveOrder(orderData);
    setIsModalOpen(true);
    setIsSubmitting(false);

    // Reset Form fields
    setName("");
    setContact("");
    setAppLink("");
    setNote("");
  };

  return (
    <section className="bg-secondary/30 section-padding-y border-b" id="booking">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
          <Tagline>ĐĂNG KÝ TRỰC TUYẾN 24/7</Tagline>
          <h2 className="heading-lg text-foreground font-bold">
            Đăng Ký Kiểm Thử – Nhận Ngay 12 Email Tester
          </h2>
          <p className="text-muted-foreground text-base">
            Điền thông tin ứng dụng để hệ thống tự động cấp ngay 12 tài khoản tester và kích hoạt chuỗi 14 ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto w-full">
          {/* Booking Form Card */}
          <Card className="lg:col-span-7 bg-card border rounded-2xl p-6 sm:p-8 shadow-lg">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMessage && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg px-3.5 py-2 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1.5">
                    Họ tên / Tên Studio Developer <span className="text-destructive">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Ví dụ: Nguyễn Văn A (Studio XYZ)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-10 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1.5">
                    Số điện thoại Zalo hoặc Hotline liên hệ <span className="text-destructive">*</span>
                  </label>
                  <Input
                    required
                    placeholder="0987.xxx.xxx hoặc Telegram @username"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="h-10 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1.5">
                    Link kiểm thử web opt-in hoặc Package Name
                  </label>
                  <Input
                    placeholder="https://play.google.com/apps/testing/com.xxx.app"
                    value={appLink}
                    onChange={(e) => setAppLink(e.target.value)}
                    className="h-10 text-sm font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1.5">
                      Gói dịch vụ
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => onSelectPlan(e.target.value)}
                      className="w-full h-10 bg-background border rounded-md px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="standard">Gói Tiêu Chuẩn – 1.290.000đ</option>
                      <option value="basic">Gói Cơ Bản – 790.000đ</option>
                      <option value="vip">Gói Trọn Gói A-Z – 2.490.000đ</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1.5">
                      Phân loại cấu hình máy ảo
                    </label>
                    <select
                      value={profile}
                      onChange={(e) => onProfileChange(e.target.value)}
                      className="w-full h-10 bg-background border rounded-md px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="light">App nhẹ - Cụm 4 máy</option>
                      <option value="heavy">App nặng - Cụm 2 máy (+200k)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1.5">
                    Ghi chú thêm (Tài khoản demo nếu có)
                  </label>
                  <Textarea
                    rows={3}
                    placeholder="Ví dụ: App cần login tài khoản test: user@demo.com / pass: 123456..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-bold text-sm h-11 gap-2 shadow-md mt-2"
                >
                  <Zap className="h-4 w-4" />
                  {isSubmitting ? "Đang xử lý..." : "🚀 ĐĂNG KÝ KIỂM THỬ & LẤY 12 EMAIL NGAY"}
                </Button>

                <p className="text-[11px] text-muted-foreground text-center">
                  ⚡ Sau khi bấm gửi, màn hình sẽ hiển thị ngay 12 email tester để bạn dán vào Google Play Console.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Direct Support & Warranty Side Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-foreground">
                Hỗ trợ kỹ thuật trực tiếp 24/7
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Cần tư vấn chọn gói, kiểm tra trước link opt-in hoặc giải đáp các thắc mắc về chính sách Google Play Console?
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={DROIDTEST_CONFIG.ZALO_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-card border hover:border-primary/50 transition-all rounded-xl p-4 flex items-center gap-3.5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    Chat trực tiếp qua Zalo Kỹ Thuật
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Phản hồi trong 5 phút – Hỗ trợ 24/7 ({DROIDTEST_CONFIG.HOTLINE})
                  </div>
                </div>
              </a>

              <a
                href={DROIDTEST_CONFIG.TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-card border hover:border-primary/50 transition-all rounded-xl p-4 flex items-center gap-3.5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 shrink-0">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    Chat qua Telegram Support
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Hỗ trợ quốc tế &amp; lập trình viên (@{DROIDTEST_CONFIG.TELEGRAM_USERNAME})
                  </div>
                </div>
              </a>
            </div>

            {/* Warranty Badge Card */}
            <Card className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5 shadow-none">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-sm text-emerald-600">
                    Cam kết an toàn tuyệt đối 100%
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Không đứt chuỗi 14 ngày. Cụm máy ảo chuẩn Android 15 nguyên bản với Google Play Services chính thức. Đảm bảo mở khóa nút xin quyền Production sau 14 ngày.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* 12 Email Delivery Modal */}
      <EmailsDeliveryModal
        order={activeOrder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
