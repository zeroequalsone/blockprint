import Link from "next/link";

type Props = {
  href: string;
  label: string;
};
export default function ButtonCTA({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="relative group rounded-xl border px-5 py-2.5 font-minecraft text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none bg-purple-500 text-white border-purple-400 shadow-[0_4px_0_0_var(--color-purple-600)] hover:bg-purple-400 active:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer overflow-hidden"
    >
      {label}
      <span className="h-full w-10 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute top-0 -skew-x-20 -left-12 group-hover:left-[120%] transition-all duration-500 pointer-events-none"></span>
    </Link>
  );
}
