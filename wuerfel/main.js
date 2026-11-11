// Beispiel-Mod aus dem Mod-Repo: kommt über den Updater automatisch auf jeden PC mit CommandWave.
module.exports = (api) => {
  const zufall = (n) => 1 + Math.floor(Math.random() * n);
  api.command(["würfle", "(wirf|würfel) [einen] würfel", "würfeln"], () => `Ich habe eine ${zufall(6)} gewürfelt.`);
  api.command(["(wirf|werfe) [eine] münze", "kopf oder zahl"], () => (Math.random() < 0.5 ? "Kopf!" : "Zahl!"));
  api.command(["(nenne|sag) [mir] eine zahl zwischen eins und zehn", "(gib|sag) mir eine zufällige zahl"], () => `Die ${zufall(10)}.`);
};
