"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>UY TÍN &amp; SỐ LIỆU</Tagline>
            <h2 className="heading-lg text-foreground font-bold">Cam kết bằng kết quả thực tế</h2>
            <p className="text-muted-foreground text-base">
              Chúng tôi đồng hành cùng các lập trình viên vượt qua mọi đợt siết chặt chính sách của Google Play Console.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-secondary/40 rounded-xl border p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0">
                <span className="text-primary text-3xl font-bold font-mono md:text-4xl">
                  100%
                </span>
                <h3 className="text-foreground font-semibold text-base">
                  Tỷ lệ đủ điều kiện
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Tất cả ứng dụng chạy tại DroidTest đều mở khóa nút xin quyền Production thành công.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/40 rounded-xl border p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0">
                <span className="text-primary text-3xl font-bold font-mono md:text-4xl">
                  120+
                </span>
                <h3 className="text-foreground font-semibold text-base">
                  Ứng dụng hoàn thành
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Đã hoàn thành kiểm thử kín cho hơn 120 dự án từ tiện ích đến game phức tạp.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/40 rounded-xl border p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0">
                <span className="text-primary text-3xl font-bold font-mono md:text-4xl">
                  14 Ngày
                </span>
                <h3 className="text-foreground font-semibold text-base">
                  Zero Gap liên tục
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Cam kết không đứt chuỗi dù chỉ 1 phiên test, bảo hành hoàn tiền 100%.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/40 rounded-xl border p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0">
                <span className="text-primary text-3xl font-bold font-mono md:text-4xl">
                  24/7
                </span>
                <h3 className="text-foreground font-semibold text-base">
                  Hỗ trợ kỹ thuật 1-1
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Hỗ trợ trực tiếp qua Zalo &amp; Telegram giải đáp chính sách và soát lỗi kỹ thuật.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
