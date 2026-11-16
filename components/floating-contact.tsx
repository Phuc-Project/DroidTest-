"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { DROIDTEST_CONFIG } from "@/lib/config";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <a
        href={DROIDTEST_CONFIG.ZALO_LINK}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm py-3 px-4 sm:px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="h-4 w-4" />
        <span>Chat Zalo Tư Vấn 24/7</span>
      </a>
    </div>
  );
}
