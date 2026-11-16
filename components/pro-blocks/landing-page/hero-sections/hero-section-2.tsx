"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, PlayCircle, Smartphone, Activity } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Link from "next/link";

export function HeroSection2() {
  return (
    <section
      className="bg-secondary/40 section-padding-y relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col gap-3">
            {/* Tagline */}
            <Tagline>🚀 GIẢI PHÁP VƯỢT DUYỆT CLOSED TESTING 100% CAM KẾT</Tagline>
            
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl text-foreground font-extrabold tracking-tight">
              Dịch Vụ <span className="text-primary underline decoration-primary/40 underline-offset-4">12 Testers × 14 Ngày</span> Vượt Duyệt Google Play Console
            </h1>
            
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Vượt qua rào cản kiểm thử khắt khe của Google Play Console dành cho tài khoản cá nhân mới. Hệ thống 12 cụm máy Android 15 vật lý độc lập, tương tác tự nhiên mỗi ngày, telemetry sạch, cam kết 100% đủ điều kiện xin quyền Production.
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2.5 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                12 thiết bị Android 15 độc lập (IMEI, MAC, Android ID riêng biệt)
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Tương tác sâu 3–5 phút/ngày bằng thuật toán Monkey input tự nhiên
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Zero Gap – Cam kết 14 ngày không đứt chuỗi (Bảo hành test lại 100%)
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Tặng kèm bộ khung mẫu trả lời 20 câu hỏi khảo sát Google Play
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <Link href="#booking">
              <Button size="lg" className="w-full sm:w-auto font-semibold gap-2 shadow-md">
                ⚡ Đăng ký &amp; Lấy 12 Email ngay
              </Button>
            </Link>
            <Link href="#matrix">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium gap-2">
                <Activity className="h-4 w-4 text-primary" />
                Xem nhật ký telemetry mẫu
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Live Simulated Cluster Telemetry Card */}
        <div className="w-full flex-1 max-w-xl">
          <div className="bg-card border rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-sm text-foreground">
                  CỤM 12 MÁY TESTER ĐANG VẬN HÀNH
                </span>
              </div>
              <span className="text-xs bg-primary/10 text-primary font-mono px-2 py-0.5 rounded-full font-medium">
                Android 15 Build
              </span>
            </div>

            {/* Matrix Mini Preview */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 my-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-secondary/60 border rounded-lg p-2.5 flex flex-col gap-1 items-start"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-mono font-semibold text-foreground">
                      VM #{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-[11px] text-muted-foreground truncate w-full">
                    tester{String(i + 1).padStart(2, "0")}@...
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Clean IP</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cluster Stats Bar */}
            <div className="bg-muted/70 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Phân cụm:</span>
                <b className="text-foreground">Cụm 4 máy song song</b>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-500" />
                <span className="text-muted-foreground">Chuỗi liên tục:</span>
                <b className="text-emerald-600 font-mono">14 / 14 Ngày (100%)</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
