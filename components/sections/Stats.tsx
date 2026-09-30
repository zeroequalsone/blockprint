import Image from "next/image";

type Stat = {
  alt: string;
  icon: string;
  label: string;
  value: string;
};

const stats: Stat[] = [
  { alt: "Paper Icon", icon: "/Paper.webp", label: "Anleitungen", value: "1" },
  {
    alt: "Bricks Icon",
    icon: "/Bricks.webp",
    label: "Blöcke gesamt",
    value: "363",
  },
  {
    alt: "Clock Icon",
    icon: "/Clock.webp",
    label: "Ø Bauzeit",
    value: "40 min",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-xl rounded-2xl border border-white/10 bg-[#12151e] p-4 text-center md:p-6">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-4">
          <Image
            alt={stat.alt}
            src={stat.icon}
            width={160}
            height={160}
            className="size-8"
            priority
          />
          <div>
            <p className="text-[10px] uppercase tracking-wide text-slate-500">
              {stat.label}
            </p>
            <p className="font-minecraft text-lg text-white">{stat.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
