import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-8 z-50 backdrop-blur-xs">
      <div className="text-white font-minecraft mx-auto w-full max-w-7xl flex items-center justify-between gap-16 h-16 p-4">
        <div className="relative select-none">
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
        <div className="flex items-center justify-center gap-8">
          <Link
            href={"/builds"}
            className="text-slate-300 hover:text-purple-400 active:text-purple-500 hover:drop-shadow-[0_0_5px_rgba(152,16,250,0.5)] transition-all"
          >
            Anleitungen
          </Link>

          <button className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 px-3 py-1.5 text-sm text-slate-400 hover:text-slate-200 transition-all cursor-pointer">
            <span>Anleitung suchen...</span>
            <kbd className="rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 border border-white/10">
              STRG K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
