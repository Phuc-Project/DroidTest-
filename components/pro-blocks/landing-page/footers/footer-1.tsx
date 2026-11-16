"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { DROIDTEST_CONFIG } from "@/lib/config";

export function Footer1() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 lg:gap-12">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-8 text-center">
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          <p className="text-xs text-muted-foreground max-w-lg">
            Hệ sinh thái kiểm thử khép kín 12 thiết bị Android 15 độc lập dành riêng cho các lập trình viên vượt duyệt Google Play Console (Closed Testing 14 ngày).
          </p>

          {/* Main Navigation */}
          <nav
            className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-muted-foreground"
            aria-label="Footer navigation"
          >
            <Link href="#policy" className="hover:text-foreground transition-colors">
              Chính sách Google
            </Link>
            <Link href="#features" className="hover:text-foreground transition-colors">
              Ưu điểm
            </Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">
              Quy trình
            </Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">
              Bảng giá
            </Link>
            <Link href="#calculator" className="hover:text-foreground transition-colors">
              Báo giá nhanh
            </Link>
            <Link href="#tracker" className="hover:text-foreground transition-colors">
              Tra cứu đơn
            </Link>
            <Link href="#faq" className="hover:text-foreground transition-colors">
              Hỏi đáp
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-6 text-xs text-muted-foreground lg:flex-row lg:justify-between">
          <p>© 2026 DroidTest Studio. All rights reserved. Chuyên nghiệp hóa dịch vụ kiểm thử Android &amp; Vượt duyệt Google Play Console.</p>

          <div className="flex items-center gap-4">
            <span>Hotline / Zalo: <b>{DROIDTEST_CONFIG.HOTLINE}</b></span>
            <span>•</span>
            <span>Hỗ trợ: <b>{DROIDTEST_CONFIG.WORKING_HOURS}</b></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
