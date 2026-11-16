import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DroidTest Studio – Dịch Vụ 12 Testers × 14 Ngày Vượt Duyệt Google Play Console",
  description:
    "Dịch vụ kiểm thử kín Closed Testing Google Play 12 testers 14 ngày liên tục. Cụm 12 máy ảo Android 15 thật độc lập, cam kết 100% đạt chuẩn xin quyền phát hành Production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body className={`${onest.variable} relative antialiased font-sans bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
