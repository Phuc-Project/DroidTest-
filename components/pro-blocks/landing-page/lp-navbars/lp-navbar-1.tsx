"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Chính sách Google", href: "#policy" },
  { label: "Ưu điểm", href: "#features" },
  { label: "Quy trình", href: "#how-it-works" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Báo giá nhanh", href: "#calculator" },
  { label: "Tra cứu đơn", href: "#tracker" },
  { label: "Hỏi đáp", href: "#faq" },
] as const;

interface NavMenuItemsProps {
  className?: string;
  onItemClick?: () => void;
}

const NavMenuItems = ({ className, onItemClick }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href} onClick={onItemClick}>
        <Button variant="ghost" className="w-full md:w-auto text-sm font-medium">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-background/95 backdrop-blur-md sticky top-0 isolate z-50 border-b py-3 md:py-3.5">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end items-center gap-4 lg:gap-6 md:flex">
          <NavMenuItems />
          <Link href="#booking">
            <Button className="font-semibold shadow-sm">
              ⚡ Đặt lịch test ngay
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-3 pb-3 md:hidden">
            <NavMenuItems onItemClick={closeMenu} />
            <Link href="#booking" onClick={closeMenu}>
              <Button className="w-full font-semibold">
                ⚡ Đặt lịch test ngay
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
