"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const TECH_PLATFORMS = [
  "Google Play Console",
  "Android 15 Native",
  "Flutter Framework",
  "React Native",
  "Unity 3D Engine",
  "Kotlin & Jetpack Compose",
  "Unreal Engine",
  "Capacitor / Cordova",
];

export function LogoSection10() {
  return (
    <section className="bg-secondary/20 border-b py-10 lg:py-12">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex max-w-xl flex-col items-center text-center">
            <Tagline variant="ghost">HỖ TRỢ 100% CÁC NỀN TẢNG VÀ CÔNG NGHỆ APP</Tagline>
            <p className="text-xs text-muted-foreground mt-1">
              Được tin tưởng bởi hơn 120+ Studio &amp; Indie Developers trên toàn quốc
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-4xl mx-auto">
            {TECH_PLATFORMS.map((platform) => (
              <span
                key={platform}
                className="bg-card border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-2xs hover:text-foreground hover:border-primary/50 transition-colors"
              >
                ⚡ {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
