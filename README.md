# CommandWave-Mods

Offizielle Mod-Quelle für [CommandWave](https://github.com/xNikYox/commandwave). Die App prüft dieses Repo beim Start und alle 6 Stunden und installiert neue und aktualisierte Mods automatisch (jede Datei per SHA-256 geprüft).

**Mod ändern:** Dateien bearbeiten, in der `mod.json` die `version` erhöhen (z. B. `1.0.0` → `1.1.0`), hochladen. Die `index.json` erzeugt GitHub Actions automatisch neu.

**Neue Mod:** Ordner anlegen (Name = `id`), `mod.json` hinein – Aufbau siehe [ANLEITUNG.md von CommandWave](https://github.com/xNikYox/commandwave/blob/main/ANLEITUNG.md#3-eigene-mods-schreiben).

| Mod | Inhalt |
|---|---|
| apps | Apps starten und schließen |
| browser | Browser-Tabs: schließen (auch nach Namen), neu, wechseln, wiederherstellen (ab CommandWave 1.1) |
| begruessung | Guten Morgen, Gute Nacht, Danke (nur mod.json) |
| hilfe | „Was kannst du?“ |
| medien | Lautstärke |
| musik | Lieder überspringen, Pause, „Was läuft gerade?“ – gezielt für Amazon Music, Spotify, Browser (ab CommandWave 1.1) |
| system | Ordner, Windows-Einstellungen, PC sperren |
| uhrzeit | Uhrzeit, Datum & Timer (Skript-Mod) |
| webseiten | Webseiten öffnen |
| wuerfel | Würfel, Münze, Zufallszahl (Skript-Mod) |
