// index.json für CommandWave erzeugen: jede Mod (Ordner mit mod.json) mit Version und SHA-256 je Datei.
//   node build-index.js
// Läuft auch automatisch bei jedem Push (GitHub Actions) – Mods einfach bearbeiten, Version erhöhen, hochladen.
// Mods mit "minApp" (brauchen eine neuere CommandWave) kommen in „modsMinApp“: CommandWave vor 2.0 liest nur „mods“
// und bekommt sie so nie; ab 2.0 werden sie übersprungen, solange die App zu alt ist.
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const mods = [];
for (const d of fs.readdirSync(root, { withFileTypes: true })) {
  if (!d.isDirectory() || d.name.startsWith(".")) continue;
  const dir = path.join(root, d.name);
  let json;
  try {
    json = JSON.parse(fs.readFileSync(path.join(dir, "mod.json"), "utf8"));
  } catch {
    continue;
  }
  const VERSION = /^\d+(\.\d+){0,3}([-+][0-9A-Za-z.]+)?$/;
  if (json.id !== d.name || !VERSION.test(json.version || "") || (json.minApp != null && !VERSION.test(String(json.minApp)))) {
    console.error(`übersprungen: ${d.name} (id muss dem Ordnernamen entsprechen, version/minApp z. B. 1.0.0)`);
    process.exitCode = 1;
    continue;
  }
  const files = [];
  const walk = (rel) => {
    for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
      if (e.name.startsWith(".")) continue;
      const r = rel ? rel + "/" + e.name : e.name;
      if (e.isDirectory()) walk(r);
      else files.push({ path: r, sha256: crypto.createHash("sha256").update(fs.readFileSync(path.join(dir, r))).digest("hex") });
    }
  };
  walk("");
  mods.push({ id: json.id, version: json.version, name: json.name || json.id, description: json.description || "", path: d.name, script: !!json.main,
    ...(json.minApp ? { minApp: json.minApp } : {}), files: files.sort((a, b) => a.path.localeCompare(b.path)) });
}
mods.sort((a, b) => a.id.localeCompare(b.id));
const index = { mods: mods.filter((m) => !m.minApp), modsMinApp: mods.filter((m) => m.minApp) };
fs.writeFileSync(path.join(root, "index.json"), JSON.stringify(index, null, 2) + "\n");
console.log(`index.json: ${mods.length} Mods (${index.modsMinApp.length} mit minApp)`);
for (const m of mods) console.log(`  ${m.id} ${m.version}${m.minApp ? " – braucht CommandWave " + m.minApp : ""}`);
