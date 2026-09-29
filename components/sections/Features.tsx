import { Minecraft3DItem } from "../ui/MinecraftItem";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "magenta_bundle_filled",
    title: "Bauabschnitte",
    description:
      "Jeder Build ist in Bauabschnitte unterteilt, wie die nummerierten Tüten bei einem LEGO-Set. Jeder Abschnitt zeigt dir zu Beginn seine eigene Materialliste.",
  },
  {
    icon: "book_and_quill",
    title: "Schritt für Schritt",
    description:
      "Jeder Schritt zeigt dir den bisherigen Bauzustand und die neuen Teile, die dazukommen, genau wie in einer LEGO-Anleitung.",
  },
  {
    icon: "compass",
    title: "Da weitermachen, wo du warst",
    description:
      "Dein aktueller Schritt wird gespeichert. Ein Account ist nicht nötig.",
  },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3 place-items-center">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center text-center max-w-2xs"
        >
          <Minecraft3DItem path={feature.icon} />
          <div>
            <div className="font-minecraft mb-1 text-xl text-white">
              {feature.title}
            </div>
            <div className="text-xs text-slate-400">{feature.description}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
