"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, UserX, FileQuestion } from "lucide-react";

export function PolicyBarrierSection() {
  return (
    <section className="bg-background section-padding-y border-b" id="policy">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
          <Tagline>RÀO CẢN CỦA GOOGLE</Tagline>
          <h2 className="heading-lg text-foreground font-bold">
            Tại sao 70% Developers bị Google từ chối quyền phát hành?
          </h2>
          <p className="text-muted-foreground text-base">
            Từ tháng 11/2023, Google áp dụng chính sách mới cực kỳ nghiêm ngặt đối với tất cả tài khoản nhà phát triển cá nhân: Bắt buộc tối thiểu 12 tester kiểm thử liên tục trong 14 ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Barrier 1 */}
          <Card className="bg-secondary/40 border hover:border-destructive/40 transition-all">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <UserX className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-lg font-semibold">
                Tester không mở app đều đặn
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nhờ bạn bè, người thân tham gia nhưng họ thường xuyên quên mở app hằng ngày. Chỉ cần đứt chuỗi 1-2 ngày, thuật toán Google sẽ reset thời gian hoặc từ chối cấp quyền Production.
              </p>
            </CardContent>
          </Card>

          {/* Barrier 2 */}
          <Card className="bg-secondary/40 border hover:border-destructive/40 transition-all">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-lg font-semibold">
                Dùng công cụ bot rác / Trùng IP
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thuê các dịch vụ giá rẻ dùng tool spam click cùng 1 địa chỉ IP hoặc chung thông số phần cứng khiến AI của Google phát hiện hành vi giả mạo và khóa vĩnh viễn quyền xuất bản ứng dụng.
              </p>
            </CardContent>
          </Card>

          {/* Barrier 3 */}
          <Card className="bg-secondary/40 border hover:border-destructive/40 transition-all">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <FileQuestion className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-lg font-semibold">
                Không biết trả lời 20 câu hỏi
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sau 14 ngày, Google yêu cầu trả lời bảng hỏi 20 câu về phản hồi của tester, lỗi phát hiện và lộ trình cập nhật. Trả lời sơ sài, thiếu dữ liệu nhật ký thực tế sẽ bị Google từ chối ngay lập tức.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
