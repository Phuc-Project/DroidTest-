"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { DROIDTEST_CONFIG } from "@/lib/config";

export function FaqSection2() {
  return (
    <section
      className="bg-secondary/20 section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            <Tagline>HỎI ĐÁP PHỔ BIẾN</Tagline>
            <h2 id="faq-heading" className="heading-lg text-foreground font-bold">
              Những Câu Hỏi Thường Gặp
            </h2>
            <p className="text-muted-foreground text-base">
              Tổng hợp những thắc mắc cốt lõi nhất về quy định Closed Testing của Google Play Console và cách vận hành cụm máy tại DroidTest Studio. Cần hỗ trợ thêm?{" "}
              <a
                href={DROIDTEST_CONFIG.ZALO_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline font-medium"
              >
                Nhắn tin Zalo Kỹ Thuật
              </a>
              .
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-4">
            <Accordion type="single" collapsible className="w-full">
              {/* FAQ 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                  Tôi có cần cung cấp mã nguồn (Source Code) hoặc mật khẩu Play Console không?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  <b>Tuyệt đối không!</b> Chúng tôi chỉ cần bạn thêm 12 địa chỉ email tester vào danh sách người thử nghiệm trên trang Play Console của bạn và gửi link web opt-in (link dạng <code className="text-xs bg-muted px-1.5 py-0.5 rounded">play.google.com/apps/testing/...</code>). Quyền tài khoản và source code của bạn luôn an toàn 100%.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                  Nếu trong quá trình test app của tôi bị crash hoặc cần đẩy bản vá thì sao?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Bạn chỉ cần đẩy bản cập nhật mới lên kênh kiểm thử kín trên Play Console. Hệ thống DroidTest tự động kiểm tra và cập nhật app lên phiên bản mới nhất trên toàn bộ 12 máy tester mà không bị mất chuỗi 14 ngày.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                  Google có phát hiện đây là máy ảo không?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Không. Mỗi máy ảo của chúng tôi sử dụng bản Android 15 nguyên bản với Google Play Services chính thức, mỗi máy có cấu hình phần cứng độc lập (Android ID, IMEI, MAC Address riêng biệt) và tương tác cảm ứng thật như một thiết bị vật lý cá nhân.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                  Sau 14 ngày làm thế nào để được cấp quyền Production?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Sau khi hoàn thành 14 ngày, nút “Đăng ký quyền phát hành chính thức” trên Play Console sẽ sáng lên. Bạn chỉ cần trả lời 20 câu hỏi khảo sát của Google (chúng tôi có cung cấp tài liệu mẫu hướng dẫn trả lời tỉ mỉ) và Google thường sẽ duyệt trong vòng 3–7 ngày làm việc.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 5 */}
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                  Chính sách bảo hành và cam kết hoàn tiền ra sao?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Chúng tôi cam kết bảo hành 100%. Nếu trong 14 ngày có bất kỳ ngày nào bị gián đoạn do lỗi hệ thống máy ảo, chúng tôi sẽ hoàn tiền 100% hoặc tiến hành chạy lại chuỗi 14 ngày hoàn toàn miễn phí cho bạn.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 6 */}
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                  Tôi có nhận được file báo cáo CSV để chứng minh với Google không?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Có. Sau 14 ngày bạn sẽ nhận được bảng tổng kết CSV gồm chi tiết từng phiên chạy: thời gian mở, thời lượng trải nghiệm, phiên bản ứng dụng và số lần ANR/Crash để bạn đính kèm trong biểu mẫu gửi Google.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
