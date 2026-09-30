import ButtonCTA from "@/components/ui/buttons/ButtonCTA";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 pt-16 text-center md:pt-24">
      <h1 className="font-minecraft max-w-2xl text-3xl leading-tight text-white md:text-5xl">
        Minecraft-Bauten wie eine LEGO-Anleitung.
      </h1>
      <p className="max-w-md text-sm text-slate-400 md:text-base">
        Blockprint führt dich Schritt für Schritt durch jeden Build, mit einer
        eigenen Materialliste pro Bauabschnitt - genau wie bei einem LEGO-Set.
      </p>
      <ButtonCTA href="/builds" label="Anleitungen durchstöbern" />
    </section>
  );
}
