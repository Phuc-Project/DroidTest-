"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Smartphone, Bot, Cpu, FileCheck2, ShieldCheck, Sparkles } from "lucide-react";

export function BentoGrid6() {
  return (
    <section className="bg-background section-padding-y border-b" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>LỢI THẾ VƯỢT TRỘI</Tagline>
          <h2 className="heading-lg font-bold">
            Công nghệ DroidTest Cluster – Vận hành chuẩn chỉ từng phiên
          </h2>
          <p className="text-muted-foreground text-base">
            Chúng tôi xây dựng hệ sinh thái 12 máy ảo Android 15 vật lý độc lập được tối ưu hóa đặc biệt theo tiêu chuẩn Google Play Telemetry.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-secondary/50 overflow-hidden rounded-xl border p-6 shadow-none lg:col-span-2 flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-bold">
                12 Thiết bị Độc Lập 100%
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mỗi máy ảo sở hữu Android ID, số IMEI, địa chỉ MAC và tài khoản Google cá nhân riêng biệt, đã xác minh số điện thoại thực. Tuyệt đối không trùng lặp thông số phần cứng hay dùng chung dải mạng IP.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
              <span className="bg-background/80 border px-3 py-1 rounded-full text-foreground">✓ IMEI độc lập</span>
              <span className="bg-background/80 border px-3 py-1 rounded-full text-foreground">✓ Android 15 Clean OS</span>
              <span className="bg-background/80 border px-3 py-1 rounded-full text-foreground">✓ Google Play Services Real</span>
            </div>
          </Card>

          {/* Regular Feature Card - Top Right */}
          <Card className="bg-secondary/50 overflow-hidden rounded-xl border p-6 shadow-none lg:col-span-1 flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-bold">
                Tương Tác Monkey Thông Minh
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                App được mở và trải nghiệm đều đặn 3–5 phút/ngày. Hệ thống tự động cuộn màn hình, chạm cảm ứng ngẫu nhiên và thử nghiệm các tính năng cốt lõi như người dùng thật.
              </p>
            </div>
            <div className="mt-4 text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              <span>Telemetry sạch 100% theo chuẩn Google</span>
            </div>
          </Card>

          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-secondary/50 overflow-hidden rounded-xl border p-6 shadow-none lg:col-span-1 flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-bold">
                Phân Cụm Máy Độc Quyền
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chia cụm 4 máy song song với ứng dụng nhẹ, hoặc cụm 2 máy phân bổ CPU/RAM cao với ứng dụng nặng/Game 3D. Đảm bảo ứng dụng chạy mượt mà không crash.
              </p>
            </div>
            <div className="mt-4 text-xs text-indigo-500 font-semibold">
              ⚡ Tự động tối ưu tài nguyên phần cứng
            </div>
          </Card>

          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-secondary/50 overflow-hidden rounded-xl border p-6 shadow-none lg:col-span-2 flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <FileCheck2 className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-bold">
                Cam Kết 100% Hoàn Tiền &amp; Báo Cáo CSV Minh Bạch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tặng kèm bộ khung mẫu 20 câu hỏi khảo sát thẩm định của Google Play Console đã được kiểm nghiệm duyệt thành công trên 100+ app. Nếu có bất kỳ ngày nào bị gián đoạn do lỗi kỹ thuật, chúng tôi hoàn tiền 100% hoặc test lại miễn phí.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5 text-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Bảo hành chuỗi 14 ngày</span>
              </div>
              <div className="flex items-center gap-1.5 text-foreground">
                <FileCheck2 className="h-4 w-4 text-primary" />
                <span>Xuất file CSV nhật ký từng phiên</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
