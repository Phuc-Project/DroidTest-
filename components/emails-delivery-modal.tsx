"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, Download, MessageSquare, ExternalLink, Sparkles } from "lucide-react";
import { DROIDTEST_CONFIG } from "@/lib/config";

export interface OrderRecord {
  id: string;
  name: string;
  contact: string;
  appLink: string;
  plan: string;
  planName: string;
  profile: string;
  estimatedPrice: number;
  note: string;
  createdAt: string;
  status: string;
  statusText: string;
  currentDay: number;
  totalDays: number;
  testerEmails: string[];
}

interface EmailsModalProps {
  order: OrderRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EmailsDeliveryModal({ order, isOpen, onClose }: EmailsModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!order) return null;

  const copyEmailsComma = async () => {
    const text = order.testerEmails.join(", ");
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType("comma");
      setTimeout(() => setCopiedType(null), 3000);
    } catch {
      prompt("Sao chép 12 email dưới đây:", text);
    }
  };

  const copyEmailsLines = async () => {
    const text = order.testerEmails.join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType("lines");
      setTimeout(() => setCopiedType(null), 3000);
    } catch {
      prompt("Sao chép 12 email dưới đây:", text);
    }
  };

  const downloadReceipt = () => {
    const formatPrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(order.estimatedPrice);

    const content = `===================================================================
DROIDTEST STUDIO - PHIẾU TIẾP NHẬN ĐƠN HÀNG KIỂM THỬ GOOGLE PLAY
===================================================================
Mã đơn hàng       : ${order.id}
Thời gian tạo     : ${new Date(order.createdAt).toLocaleString("vi-VN")}
Khách hàng / Dev  : ${order.name}
Số Zalo / Hotline : ${order.contact}
Tên app / Package : ${order.appLink || "Chưa cung cấp"}
Gói dịch vụ       : ${order.planName}
Phân loại máy     : ${order.profile === "heavy" ? "App Nặng (Cụm 2 máy/lần)" : "App Nhẹ (Cụm 4 máy/lần)"}
Tổng chi phí      : ${formatPrice}
Ghi chú kèm theo  : ${order.note || "Không có"}

-------------------------------------------------------------------
DANH SÁCH 12 TÀI KHOẢN GOOGLE TESTER ĐƯỢC CẤP CHO BẠN:
-------------------------------------------------------------------
${order.testerEmails.map((em, i) => `${i + 1}. ${em}`).join("\n")}

DẠNG DANH SÁCH PHÂN CÁCH DẤU PHẨY (Dán thẳng vào Play Console):
${order.testerEmails.join(", ")}

-------------------------------------------------------------------
HƯỚNG DẪN 3 BƯỚC HOÀN TẤT TRONG 2 PHÚT:
-------------------------------------------------------------------
1. Đăng nhập https://play.google.com/console
2. Chọn Ứng dụng -> Kiểm thử kín (Closed Testing) -> Người thử nghiệm (Testers) -> Tạo danh sách email -> Dán 12 email ở trên vào -> Bấm LƯU THAY ĐỔI.
3. Bật liên kết tham gia trên web (Web opt-in link) và gửi link đó qua Zalo cho DroidTest Studio (${DROIDTEST_CONFIG.ZALO_LINK}) để bot khởi động 12 máy ảo chạy ngày 1.

Hotline / Zalo hỗ trợ kỹ thuật: ${DROIDTEST_CONFIG.HOTLINE}
Cảm ơn bạn đã lựa chọn DroidTest Studio! Chúc ứng dụng của bạn sớm vượt qua 14 ngày kiểm thử xuất sắc!
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Phieu_Tiep_Nhan_${order.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const zaloText = encodeURIComponent(
    `Chào DroidTest Studio! Mình vừa đăng ký đơn kiểm thử #${order.id}.\n` +
    `- Họ tên: ${order.name} (${order.contact})\n` +
    `- App: ${order.appLink || "Gửi sau"}\n` +
    `- Gói dịch vụ: ${order.planName}\n` +
    `- Mình đã thêm 12 email tester vào Play Console, nhờ Admin kích hoạt máy test giúp mình!`
  );

  const zaloUrl = `${DROIDTEST_CONFIG.ZALO_LINK}?text=${zaloText}`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              ĐÃ TIẾP NHẬN ĐƠN HÀNG
            </span>
          </div>
          <DialogTitle className="text-xl font-bold text-foreground mt-2">
            🎉 Đăng Ký Thành Công! Mã Đơn:{" "}
            <span className="font-mono text-primary">#{order.id}</span>
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Chào <b>{order.name}</b>, đơn kiểm thử <b>{order.planName}</b> đã được ghi nhận. Hãy sao chép 12 email bên dưới để thêm vào Google Play Console.
          </DialogDescription>
        </DialogHeader>

        {/* 12 Emails Box */}
        <div className="bg-secondary/40 border border-primary/30 rounded-xl p-4 my-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold text-foreground uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              12 EMAIL GOOGLE TESTER CỦA BẠN:
            </span>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 gap-1.5"
                onClick={copyEmailsComma}
              >
                {copiedType === "comma" ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Đã chép (Dấu phẩy)</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Sao chép (Dấu phẩy ",")</span>
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 gap-1.5"
                onClick={copyEmailsLines}
              >
                {copiedType === "lines" ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Đã chép (Từng dòng)</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Từng dòng</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
            {order.testerEmails.map((email, idx) => (
              <div
                key={email}
                className="bg-card border rounded-lg px-2.5 py-1.5 flex items-center justify-between text-xs font-mono"
              >
                <span className="text-muted-foreground font-semibold">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground truncate ml-2 font-medium">{email}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-muted-foreground mt-2">
            💡 <b>Mẹo:</b> Chọn <i>"Sao chép (Dấu phẩy ',')"</i> để dán toàn bộ 12 email vào ô danh sách tester trên Play Console chỉ trong 1 thao tác.
          </p>
        </div>

        {/* 3 Step Instructions */}
        <div className="bg-muted/40 border rounded-xl p-4 my-2 text-xs">
          <h4 className="font-semibold text-foreground mb-2">
            📌 3 BƯỚC HOÀN TẤT ĐỂ KÍCH HOẠT MÁY TEST:
          </h4>
          <ol className="list-decimal pl-4 space-y-1.5 text-muted-foreground leading-relaxed">
            <li>
              Mở{" "}
              <a
                href="https://play.google.com/console"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline font-medium"
              >
                Google Play Console
              </a>{" "}
              &gt; Ứng dụng &gt; <b>Kiểm thử kín (Closed testing)</b> &gt; Quản lý người thử nghiệm &gt; <b>Dán 12 email ở trên vào</b> &gt; Bấm <b>Lưu thay đổi</b>.
            </li>
            <li>
              Tại mục <b>Cách người thử nghiệm tham gia</b>, bật công tắc liên kết web và sao chép <b>Liên kết tham gia trên web (Web opt-in link)</b>.
            </li>
            <li>
              Bấm nút <b>"Xác nhận đơn qua Zalo"</b> bên dưới để gửi link opt-in cho Kỹ thuật viên DroidTest khởi động 12 máy ảo chạy ngày 1.
            </li>
          </ol>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col gap-2.5 pt-2 border-t">
          <a href={zaloUrl} target="_blank" rel="noreferrer" className="w-full">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold gap-2 shadow-md">
              <MessageSquare className="h-4 w-4" />
              Xác nhận đơn qua Zalo &amp; Bắt đầu chạy ngay
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 text-xs gap-1.5"
              onClick={downloadReceipt}
            >
              <Download className="h-3.5 w-3.5" />
              Tải phiếu tiếp nhận (.txt)
            </Button>
            <Button variant="ghost" className="text-xs" onClick={onClose}>
              Đóng
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
