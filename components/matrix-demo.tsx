"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export function MatrixDemo() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  const vms = [
    { name: "VM #01", email: "droidtester.v1.01@gmail.com", device: "Pixel 8 Pro", os: "Android 15" },
    { name: "VM #02", email: "droidtester.v1.02@gmail.com", device: "Galaxy S24", os: "Android 15" },
    { name: "VM #03", email: "droidtester.v1.03@gmail.com", device: "Xiaomi 14", os: "Android 15" },
    { name: "VM #04", email: "droidtester.v1.04@gmail.com", device: "OnePlus 12", os: "Android 15" },
    { name: "VM #05", email: "droidtester.v1.05@gmail.com", device: "Pixel 7a", os: "Android 15" },
    { name: "VM #06", email: "droidtester.v1.06@gmail.com", device: "Galaxy A55", os: "Android 15" },
    { name: "VM #07", email: "droidtester.v1.07@gmail.com", device: "Sony Xperia 1 VI", os: "Android 15" },
    { name: "VM #08", email: "droidtester.v1.08@gmail.com", device: "Pixel Fold", os: "Android 15" },
    { name: "VM #09", email: "droidtester.v1.09@gmail.com", device: "Galaxy Z Flip 5", os: "Android 15" },
    { name: "VM #10", email: "droidtester.v1.10@gmail.com", device: "Asus ROG Phone 8", os: "Android 15" },
    { name: "VM #11", email: "droidtester.v1.11@gmail.com", device: "Motorola Edge 50", os: "Android 15" },
    { name: "VM #12", email: "droidtester.v1.12@gmail.com", device: "Nothing Phone (2)", os: "Android 15" },
  ];

  return (
    <section className="bg-secondary/20 section-padding-y border-b" id="matrix">
      <div className="container-padding-x container mx-auto flex flex-col gap-8 md:gap-10">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>BẰNG CHỨNG THỰC TẾ</Tagline>
          <h2 className="heading-lg text-foreground font-bold">
            Báo Cáo Nhật Ký 14 Ngày Chuẩn Mực
          </h2>
          <p className="text-muted-foreground text-base">
            Minh họa ma trận theo dõi từng máy tester theo ngày do DroidTest tự động trích xuất. Nhật ký này được cấp cho bạn để làm bằng chứng xác thực với Google.
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="bg-card border rounded-2xl p-4 sm:p-6 shadow-md overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="py-3 px-3 font-semibold text-foreground">Máy ảo (Tester Account)</th>
                <th className="py-3 px-2 font-semibold text-foreground">Thiết bị</th>
                {days.map((d) => (
                  <th key={d} className="py-3 px-1.5 text-center font-mono font-medium text-muted-foreground">
                    N{d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {vms.map((vm, idx) => (
                <tr key={vm.name} className="hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-medium text-foreground">
                    <div className="flex flex-col">
                      <span>{vm.name}</span>
                      <span className="text-[11px] text-muted-foreground">{vm.email}</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-2 text-muted-foreground whitespace-nowrap">
                    {vm.device}
                  </td>
                  {days.map((d) => (
                    <td key={d} className="py-2.5 px-1.5 text-center">
                      <span
                        className="inline-block h-3.5 w-3.5 rounded-full bg-emerald-500 shadow-2xs"
                        title={`Ngày ${d}: Hoàn thành 4 phút tương tác - 0 Crash`}
                      ></span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-500"></span>
                Phiên test hoàn thành chuẩn telemetry (3–5 phút)
              </span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                168 / 168 Phiên test đạt chuẩn 100%
              </span>
            </div>
            <span className="font-mono text-primary font-semibold">
              DroidTest Auto-Telemetry Engine v2.4
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
