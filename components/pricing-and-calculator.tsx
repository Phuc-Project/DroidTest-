"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Info, Calculator, Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { DROIDTEST_CONFIG, PlanConfig } from "@/lib/config";

interface PricingProps {
  selectedPlan: string;
  onSelectPlan: (planId: string) => void;
  appsCount: number;
  onAppsCountChange: (count: number) => void;
  profile: string;
  onProfileChange: (prof: string) => void;
}

export function PricingAndCalculator({
  selectedPlan,
  onSelectPlan,
  appsCount,
  onAppsCountChange,
  profile,
  onProfileChange,
}: PricingProps) {
  const plans = Object.values(DROIDTEST_CONFIG.PLANS);

  // Calculate pricing based on current selections
  const currentPlan = DROIDTEST_CONFIG.PLANS[selectedPlan] || DROIDTEST_CONFIG.PLANS.standard;
  let unitPrice = currentPlan.price;
  if (profile === "heavy") {
    unitPrice += 200000;
  }

  const subtotal = unitPrice * appsCount;
  let discount = 0;
  if (appsCount === 2) discount = 0.1;
  else if (appsCount >= 3 && appsCount < 5) discount = 0.15;
  else if (appsCount >= 5) discount = 0.2;

  const total = discount > 0 ? Math.round(subtotal * (1 - discount)) : subtotal;
  const discountPercent = Math.round(discount * 100);

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const scrollToBooking = (planId: string) => {
    onSelectPlan(planId);
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background section-padding-y border-b" id="pricing">
      <div className="container-padding-x container mx-auto flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
          <Tagline>CHI PHÍ MINH BẠCH</Tagline>
          <h2 className="heading-lg text-foreground font-bold">
            Bảng Giá Gói Dịch Vụ Kiểm Thử
          </h2>
          <p className="text-muted-foreground text-base">
            Chi phí tối ưu nhất thị trường giúp bạn tiết kiệm thời gian nhờ vả và loại bỏ 100% rủi ro bị Google từ chối cấp quyền phát hành.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch max-w-6xl mx-auto w-full">
          {plans.map((plan) => {
            const isFeatured = plan.highlighted;
            return (
              <Card
                key={plan.id}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all relative ${
                  isFeatured
                    ? "border-primary shadow-xl bg-card ring-1 ring-primary"
                    : "border bg-card/60 hover:border-foreground/30 shadow-sm"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span>KHUYÊN DÙNG ⭐</span>
                  </div>
                )}

                <CardContent className="flex flex-col gap-6 p-0 flex-1">
                  <div className="flex flex-col gap-2">
                    <h3 className={`text-xl font-bold ${isFeatured ? "text-primary" : "text-foreground"}`}>
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 py-2 border-y">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-foreground">
                      {formatVND(plan.price)}
                    </span>
                    <span className="text-muted-foreground text-xs">{plan.period}</span>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-3 flex-1">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Quyền lợi bao gồm:
                    </p>
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs">
                          <Check className="text-primary h-4 w-4 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground flex-1 leading-snug">
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="text-muted-foreground h-3.5 w-3.5 shrink-0 opacity-60 hover:opacity-100 cursor-pointer" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs text-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant={isFeatured ? "default" : "outline"}
                    className="w-full mt-4 font-semibold shadow-sm"
                    onClick={() => scrollToBooking(plan.id)}
                  >
                    Chọn {plan.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Live Multi-App Cost Calculator */}
        <div className="bg-secondary/40 border rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto w-full shadow-md" id="calculator">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                🧮 Báo Giá Nhanh &amp; Ưu Đãi Multi-App
              </h3>
              <p className="text-xs text-muted-foreground">
                Đăng ký từ 2 app trở lên để nhận chiết khấu tự động lên đến 20%.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Calculator Controls */}
            <div className="md:col-span-7 flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">
                  Số lượng ứng dụng cần test
                </label>
                <select
                  value={appsCount}
                  onChange={(e) => onAppsCountChange(parseInt(e.target.value, 10))}
                  className="w-full bg-background border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value={1}>1 Ứng dụng</option>
                  <option value={2}>2 Ứng dụng (Giảm 10%)</option>
                  <option value={3}>3 Ứng dụng (Giảm 15%)</option>
                  <option value={5}>5+ Ứng dụng (Giảm 20%)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">
                  Gói dịch vụ
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => onSelectPlan(e.target.value)}
                  className="w-full bg-background border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="basic">Gói Cơ Bản (790.000đ/app)</option>
                  <option value="standard">Gói Tiêu Chuẩn (1.290.000đ/app)</option>
                  <option value="vip">Gói Trọn Gói A-Z (2.490.000đ/app)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">
                  Độ nặng của ứng dụng
                </label>
                <select
                  value={profile}
                  onChange={(e) => onProfileChange(e.target.value)}
                  className="w-full bg-background border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="light">App nhẹ (Tiện ích, tin tức, công cụ, đọc sách) - Cụm 4 máy</option>
                  <option value="heavy">App nặng (Game 3D, ứng dụng đồ hoạ cao, stream) - Cụm 2 máy (+200k)</option>
                </select>
              </div>
            </div>

            {/* Calculator Summary */}
            <div className="md:col-span-5 bg-card border rounded-xl p-5 flex flex-col gap-3 text-center shadow-sm">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Tổng Chi Phí Trọn Gói 14 Ngày
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary">
                {formatVND(total)}
              </div>

              {discountPercent > 0 && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-lg py-1.5 px-2 text-xs font-semibold">
                  🎉 Đã áp dụng giảm giá {discountPercent}% cho combo {appsCount} app!
                </div>
              )}

              <Button
                className="w-full mt-2 font-semibold shadow-md"
                onClick={() => {
                  const el = document.getElementById("booking");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Đặt lịch với giá này ⚡
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
