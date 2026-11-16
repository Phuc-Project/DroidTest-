"use client";

import React, { useState } from "react";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import { PolicyBarrierSection } from "@/components/policy-barrier-section";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { MatrixDemo } from "@/components/matrix-demo";
import { PricingAndCalculator } from "@/components/pricing-and-calculator";
import { BookingSection } from "@/components/booking-section";
import { OrderTracker } from "@/components/order-tracker";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { FloatingContact } from "@/components/floating-contact";
import { OrderRecord } from "@/components/emails-delivery-modal";

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [appsCount, setAppsCount] = useState(1);
  const [profile, setProfile] = useState("light");
  const [lastOrder, setLastOrder] = useState<OrderRecord | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* 1. Navbar */}
      <LpNavbar1 />

      {/* 2. Hero Section */}
      <HeroSection2 />

      {/* 3. Tech Stack / Supported Platforms */}
      <LogoSection10 />

      {/* 4. Google Policy Barriers Section */}
      <PolicyBarrierSection />

      {/* 5. Developer Testimonial 1 */}
      <TestimonialsSection1
        quote="Nhờ cụm máy ảo DroidTest Studio chạy đều đặn mỗi ngày, ứng dụng Fintech của mình đã vượt qua vòng Closed Testing sau đúng 14 ngày mà không hề bị đứt chuỗi!"
        authorName="Hoàng Nam"
        authorRole="Indie Developer • Hà Nội"
        avatarSrc="/DavidPark.png"
      />

      {/* 6. Bento Grid - Technology & Advantages */}
      <BentoGrid6 />

      {/* 7. 4-Step Process */}
      <FeatureSection9 />

      {/* 8. Trust Metrics & Stats */}
      <StatsSection4 />

      {/* 9. Live 14-Day Telemetry Matrix Demo */}
      <MatrixDemo />

      {/* 10. Pricing & Interactive Multi-App Calculator */}
      <PricingAndCalculator
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        appsCount={appsCount}
        onAppsCountChange={setAppsCount}
        profile={profile}
        onProfileChange={setProfile}
      />

      {/* 11. Developer Testimonial 2 */}
      <TestimonialsSection1
        quote="Bộ mẫu 20 câu hỏi khảo sát Google Play của DroidTest cực kỳ chi tiết và sát thực tế. Tài khoản dev cá nhân của mình đã mở khóa nút Production ngay lần nộp đầu tiên."
        authorName="Minh Quân"
        authorRole="Game Studio Lead • TP. Hồ Chí Minh"
        avatarSrc="/MonicaKurt.png"
      />

      {/* 12. Lead Booking Form & 12 Tester Emails Delivery */}
      <BookingSection
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        profile={profile}
        onProfileChange={setProfile}
        onOrderCreated={(order) => setLastOrder(order)}
      />

      {/* 13. Order Progress Tracking Stepper */}
      <OrderTracker lastOrder={lastOrder} />

      {/* 14. FAQ Accordion */}
      <FaqSection2 />

      {/* 15. Footer */}
      <Footer1 />

      {/* 16. Floating Contact Button */}
      <FloatingContact />
    </main>
  );
}
