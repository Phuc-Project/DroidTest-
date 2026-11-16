"use client";

import React, { useState, useEffect } from "react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle2, Clock, Smartphone, MessageSquare, Copy } from "lucide-react";
import { OrderRecord, EmailsDeliveryModal } from "./emails-delivery-modal";
import { DROIDTEST_CONFIG } from "@/lib/config";

interface OrderTrackerProps {
  lastOrder?: OrderRecord | null;
}

export function OrderTracker({ lastOrder }: OrderTrackerProps) {
  const [keyword, setKeyword] = useState("");
  const [foundOrder, setFoundOrder] = useState<OrderRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (lastOrder) {
      setKeyword(lastOrder.id);
      setFoundOrder(lastOrder);
      setHasSearched(true);
      return;
    }

    try {
      const active = JSON.parse(localStorage.getItem("droidtest_active_order") || "null");
      if (active) {
        setKeyword(active.id);
        setFoundOrder(active);
        setHasSearched(true);
      }
    } catch {}
  }, [lastOrder]);

  const handleSearch = () => {
    const term = keyword.trim().toLowerCase();
    if (!term) return;

    setHasSearched(true);
    let orders: OrderRecord[] = [];
    try {
      orders = JSON.parse(localStorage.getItem("droidtest_orders") || "[]");
    } catch {}

    const matched = orders.find(
      (o) =>
        o.id.toLowerCase() === term ||
        o.contact.toLowerCase().includes(term) ||
        (o.appLink && o.appLink.toLowerCase().includes(term))
    );

    if (matched) {
      setFoundOrder(matched);
    } else {
      setFoundOrder(null);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <section className="bg-background section-padding-y border-b" id="tracker">
      <div className="container-padding-x container mx-auto flex flex-col gap-8 md:gap-10">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>THEO DÕI TIẾN TRÌNH</Tagline>
          <h2 className="heading-lg text-foreground font-bold">
            Tra Cứu Tiến Độ Đơn Hàng 14 Ngày
          </h2>
          <p className="text-muted-foreground text-base">
            Nhập mã đơn hàng (VD: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">DT-20261116-4891</code>) hoặc số điện thoại Zalo để kiểm tra trạng thái và lấy lại 12 email tester.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto w-full flex gap-2">
          <Input
            placeholder="Nhập mã đơn hoặc SĐT Zalo đăng ký..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="h-11 font-mono text-sm"
          />
          <Button onClick={handleSearch} className="h-11 px-5 font-semibold gap-2 shrink-0">
            <Search className="h-4 w-4" />
            Tra cứu
          </Button>
        </div>

        {/* Result Container */}
        {hasSearched && (
          <div className="max-w-3xl mx-auto w-full">
            {foundOrder ? (
              <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-md flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
                  <div>
                    <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      ĐANG THEO DÕI
                    </span>
                    <h3 className="text-xl font-bold font-mono text-foreground mt-2">
                      #{foundOrder.id}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Khách hàng: <b>{foundOrder.name}</b> ({foundOrder.contact}) | Ngày tạo:{" "}
                      {new Date(foundOrder.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-muted-foreground block">Gói dịch vụ</span>
                    <span className="text-lg font-bold text-primary">
                      {foundOrder.planName}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground block">
                      {formatPrice(foundOrder.estimatedPrice)}
                    </span>
                  </div>
                </div>

                {/* 4-Step Stepper */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-2">
                  {/* Step 1 */}
                  <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                    <div className="h-8 w-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Bước 1</div>
                      <div className="text-[11px] text-muted-foreground">Tiếp nhận &amp; Cấp email</div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Bước 2</div>
                      <div className="text-[11px] text-muted-foreground">Gửi link Opt-in qua Zalo</div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground">Bước 3</div>
                      <div className="text-[11px] text-muted-foreground">
                        Chạy 14 Ngày ({foundOrder.currentDay || 0}/14)
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground">Bước 4</div>
                      <div className="text-[11px] text-muted-foreground">Mở Khóa Production</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    className="text-xs gap-1.5"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Lấy lại 12 Email Tester
                  </Button>
                  <a
                    href={DROIDTEST_CONFIG.ZALO_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <Button className="text-xs gap-1.5 font-semibold">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Nhắn Zalo Admin cập nhật tiến độ
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-secondary/40 border rounded-2xl p-8 text-center flex flex-col items-center gap-3">
                <span className="text-3xl">🔍</span>
                <h4 className="font-bold text-foreground text-base">
                  Không tìm thấy đơn hàng trên thiết bị này
                </h4>
                <p className="text-xs text-muted-foreground max-w-md">
                  Nếu bạn đã đăng ký từ thiết bị khác hoặc cần tra cứu tiến trình máy chạy thời gian thực, vui lòng nhắn tin trực tiếp qua{" "}
                  <a
                    href={DROIDTEST_CONFIG.ZALO_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline font-medium"
                  >
                    Zalo Kỹ Thuật
                  </a>{" "}
                  kèm mã đơn của bạn.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal Reopen */}
      <EmailsDeliveryModal
        order={foundOrder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
