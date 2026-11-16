"use client";

import { Send, MailCheck, PlaySquare, Award } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection9() {
  return (
    <section
      className="bg-secondary/30 section-padding-y border-b"
      id="how-it-works"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>QUY TRÌNH HỢP TÁC</Tagline>
          <h2 className="heading-lg text-foreground font-bold">
            4 Bước Đơn Giản Để Vượt Duyệt
          </h2>
          <p className="text-muted-foreground text-base">
            Bạn không cần cung cấp tài khoản Google Play Console hay Source code. Mọi thông tin đều được bảo mật 100%.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-4 text-center bg-card border rounded-2xl p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Send className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-semibold text-primary uppercase">Bước 01</span>
              <h3 className="text-foreground font-semibold text-lg">Gửi Link Kiểm Thử</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bạn chỉ cần gửi link tham gia trên web (link dạng <code className="text-xs bg-muted px-1.5 py-0.5 rounded">play.google.com/apps/testing/...</code>) hoặc Package Name.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-4 text-center bg-card border rounded-2xl p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MailCheck className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-semibold text-primary uppercase">Bước 02</span>
              <h3 className="text-foreground font-semibold text-lg">Nhận 12 Email Tester</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hệ thống cấp ngay 12 email tester chính thức. Bạn chỉ cần sao chép 1-chạm và dán thẳng vào ô người thử nghiệm trên Play Console.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-4 text-center bg-card border rounded-2xl p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <PlaySquare className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-semibold text-primary uppercase">Bước 03</span>
              <h3 className="text-foreground font-semibold text-lg">Tự Động Test 14 Ngày</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cụm 12 máy ảo tự động tải app từ Play Store và chạy tương tác đều đặn 3–5 phút hằng ngày theo chuẩn telemetry Google.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center gap-4 text-center bg-card border rounded-2xl p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Award className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-semibold text-primary uppercase">Bước 04</span>
              <h3 className="text-foreground font-semibold text-lg">Nộp Đơn Lên Production</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hết 14 ngày, bạn nhận file CSV báo cáo hoàn tất và bộ câu trả lời phỏng vấn để mở khóa nút xin quyền phát hành chính thức thành công!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
