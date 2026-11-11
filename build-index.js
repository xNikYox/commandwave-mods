// index.json für CommandWave erzeugen: jede Mod (Ordner mit mod.json) mit Version und SHA-256 je Datei.
//   node build-index.js
// Läuft auch automatisch bei jedem Push (GitHub Actions) – Mods einfach bearbeiten, Version erhöhen, hochladen.
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
  if (json.id !== d.name || !/^\d+(\.\d+){0,3}([-+][0-9A-Za-z.]+)?$/.test(json.version || "")) {
    console.error(`übersprungen: ${d.name} (id muss dem Ordnernamen entsprechen, version z. B. 1.0.0)`);
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
  mods.push({ id: json.id, version: json.version, name: json.name || json.id, description: json.description || "", path: d.name, script: !!json.main, files: files.sort((a, b) => a.path.localeCompare(b.path)) });
}
mods.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(path.join(root, "index.json"), JSON.stringify({ mods }, null, 2) + "\n");
console.log(`index.json: ${mods.length} Mods`);
for (const m of mods) console.log(`  ${m.id} ${m.version}`);
