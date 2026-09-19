"use client";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { HiOutlineMenuAlt4, HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-8 z-50 w-full max-w-7xl mx-auto select-none">
      <div className="absolute top-0 left-0 w-full backdrop-blur-md rounded-lg flex flex-col">
        <div className="text-white font-minecraft flex items-center justify-between gap-16 h-16 p-4">
          {/* Logo */}
          <div className="relative">
            <Link href={"/"}>
              <Image
                alt="Blockprint Logo"
                src={Logo}
                className="h-8 w-full hover:drop-shadow-[0_0_5px_rgba(152,16,250,0.5)] active:drop-shadow-[0_0_15px_rgba(152,16,250,0.5)] transition-all"
                priority
              />
            </Link>
            <span className="absolute top-0 -right-12 border border-amber-500/40 bg-amber-950/40 px-2 py-0.5 text-[10px] uppercase text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)] rounded-md">
              Beta
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-8 h-full">
            <Link
              href={"/builds"}
              className="text-slate-300 hover:text-purple-400 active:text-purple-500 transition-all text-center rounded-lg border border-white/5 h-full flex items-center px-3"
            >
              Anleitungen
            </Link>

            <button className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 active:border-white/20 px-3 text-sm text-slate-400 active:text-slate-200 transition-all cursor-pointer h-full">
              <span>Anleitung suchen...</span>
              <kbd className="rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 border border-white/10">
                STRG K
              </kbd>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden relative cursor-pointer"
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <HiOutlineMenuAlt4
              size={24}
              className={`transition-all duration-300 ${
                isMobileOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <HiOutlineX
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileOpen && (
          <div className="md:hidden p-4 pt-0">
            <div className="flex flex-col-reverse gap-4 font-minecraft pt-4 border-t border-white/10">
              <Link
                href={"/builds"}
                className="text-slate-300 hover:text-purple-400 active:text-purple-500 transition-all w-full text-center py-2 rounded-lg border border-white/5"
              >
                Anleitungen
              </Link>

              <button className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 active:border-white/20 px-3 py-1.5 text-sm text-slate-400 active:text-slate-200 transition-all cursor-pointer">
                <span>Anleitung suchen...</span>
                <kbd className="rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 border border-white/10">
                  <HiOutlineSearch size={16} />
                </kbd>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
