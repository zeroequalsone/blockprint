import Image from "next/image";
import Link from "next/link";

const featuredBuilds = [
  {
    path: {
      href: "/builds/1-overgrown-library",
      image: "/builds/1-overgrown-library/1-overgrown-library.webp",
    },
    name: "Verwachsene Bibliothek",
    blocks: 363,
    sections: 0,
    difficulty: "Leicht",
  },
  {
    path: {
      href: "",
      image: "/ComingSoon.webp",
    },
    name: "COMING SOON.",
    blocks: 0,
    sections: 0,
    difficulty: "None",
  },
  {
    path: {
      href: "",
      image: "/ComingSoon.webp",
    },
    name: "COMING SOON.",
    blocks: 0,
    sections: 0,
    difficulty: "None",
  },
];

export default function FeaturedBuilds() {
  return (
    <section id="featured" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-minecraft text-xl text-white">
          Neu in der Bibliothek
        </h2>
        <Link
          href="/builds"
          className="text-xs text-purple-400 transition-colors hover:text-purple-300"
        >
          Alle ansehen →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredBuilds.map((build, i) => (
          <Link
            key={`${i}-${build.name}`}
            href={build.path?.href}
            className="group relative rounded-2xl border border-white/10 bg-[#12151e] p-5 transition-all hover:shadow-[0_0_25px_rgba(152,16,250,0.25)]"
          >
            <Image
              alt={`${build.name} Build`}
              src={build.path.image}
              width={1920/2}
              height={1080/2}
              className="mb-3 h-36 md:h-48 w-full items-center justify-center rounded-xl bg-[#12151e] object-cover"
              priority
            />
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-white">{build.name}</span>
              <span className="rounded-md border border-amber-500/40 bg-amber-950/40 px-1.5 py-0.5 font-minecraft text-[10px] text-amber-300">
                {build.difficulty}
              </span>
            </div>
            <div className="text-xs text-slate-500">
              {build.blocks.toLocaleString("de-DE")} Blöcke • {build.sections}{" "}
              Bauabschnitte
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
