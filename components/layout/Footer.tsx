import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-7xl border-t border-white/10 py-8 text-sm">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image alt="Blockprint Logo" src={Logo} className="h-6 w-auto" />
          <span className="font-minecraft text-xs text-slate-500">
            © {new Date().getFullYear()} Blockprint
          </span>
        </div>

        <nav className="flex items-center gap-6 font-minecraft text-xs text-slate-400">
          <Link
            href="/builds"
            className="transition-colors hover:text-purple-400"
          >
            Anleitungen
          </Link>
          <Link
            href="/impressum"
            className="transition-colors hover:text-purple-400"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="transition-colors hover:text-purple-400"
          >
            Datenschutz
          </Link>

          <a
            href="https://github.com/zeroequalsone/blockprint"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-400 inline-flex gap-2 items-center"
          >
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>

      <p className="mt-6 text-center text-[11px] text-slate-600 md:text-left">
        Blockprint ist ein Fanprojekt und steht in keiner Verbindung zu Mojang
        Studios oder Microsoft. Minecraft ist eine Marke von Mojang Studios.
      </p>
    </footer>
  );
}
