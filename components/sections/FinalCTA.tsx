import ButtonCTA from "../ui/buttons/ButtonCTA";

export default function FinalCTA() {
  return (
    <section
      className="flex flex-col items-center gap-4 rounded-2xl bg-linear-to-r from-purple-950/40 via-[#0d0f12] to-purple-950/40 px-6 py-12 text-center shadow-[0_0_25px_rgba(152,16,250,0.15)]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/71/Deepslate_Tiles_%28texture%29_JE2.png/revision/latest?cb=20210224201032')",
      }}
    >
      <h2 className="font-minecraft text-xl text-white md:text-2xl">
        Bereit für deinen ersten Build?
      </h2>
      <p className="max-w-sm text-sm text-slate-400">
        Wähl eine Anleitung aus der Bibliothek und leg direkt mit dem ersten
        Schritt los.
      </p>
      <ButtonCTA href="/builds" label="Anleitungen ansehen" />
    </section>
  );
}
