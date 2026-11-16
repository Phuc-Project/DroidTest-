"use client";

import React from "react";
import { Zap } from "lucide-react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-lg tracking-tight select-none ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <Zap className="h-4 w-4 fill-current" />
      </div>
      <span className="text-foreground">
        DroidTest<span className="text-primary">.Studio</span>
      </span>
    </div>
  );
};
