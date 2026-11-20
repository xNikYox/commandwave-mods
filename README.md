# CommandWave-Mods

Offizielle Mod-Quelle für [CommandWave](https://github.com/xNikYox/commandwave). Die App prüft dieses Repo beim Start und alle 6 Stunden und installiert neue und aktualisierte Mods automatisch (jede Datei per SHA-256 geprüft).

**Mod ändern:** Dateien bearbeiten, in der `mod.json` die `version` erhöhen (z. B. `1.0.0` → `1.1.0`), hochladen. Die `index.json` erzeugt GitHub Actions automatisch neu.

**Neue Mod:** Ordner anlegen (Name = `id`), `mod.json` hinein – Aufbau siehe [ANLEITUNG.md von CommandWave](https://github.com/xNikYox/commandwave/blob/main/ANLEITUNG.md#3-eigene-mods-schreiben).

**Braucht eine Mod eine neuere CommandWave**, steht in ihrer `mod.json` z. B. `"minApp": "2.0.0"`. Sie landet dann in der `index.json` unter `modsMinApp` – CommandWave vor 2.0 liest nur `mods` und bekommt sie nie, ab 2.0 wird sie übersprungen, solange die App zu alt ist (die installierte Version bleibt).

| Mod | Inhalt | ab CommandWave |
|---|---|---|
| apps | Apps starten und schließen (auch Englisch) | 1.3 |
| begruessung | Guten Morgen, Gute Nacht, Danke (nur mod.json) | 1.0 |
| browser | Browser-Tabs: schließen (auch nach Namen), neu, wechseln, wiederherstellen | 1.3 |
| dateien | Dateien finden und öffnen (Windows-Suchindex, Auswahl per Nummer) | 2.0 |
| diktieren | „Schreib was“ – tippt ins vorderste Fenster | 1.6 |
| discord | Mikro stumm, Stummschaltung aufheben, Taub schalten (Tastenkürzel) | 2.0 |
| erinnerungen | Erinnerungen mit Text, auch in einem Satz | 1.8 |
| fenster | Fenster minimieren, andocken, wechseln | 1.4 |
| hilfe | „Was kannst du?“ | 1.3 |
| lautstaerke | Lautstärke je App | 1.6 |
| medien | Lautstärke | 1.3 |
| musik | Lieder überspringen, Pause, „Was läuft gerade?“, Amazon Music | 1.8 |
| notizen | Merke dir …, Was habe ich mir gemerkt? | 2.0 |
| obs | OBS Studio: Aufnahme, Stream, Szene (obs-websocket 5) | 2.0 |
| rechnen | Rechnen & Umrechnen | 1.6 |
| routinen | Routinen per Sprache starten | 2.0 |
| screenshot | Screenshot (Bildschirm, Fenster) | 1.7 |
| spotify | „Spiel … auf Spotify“, Lied liken | 2.0 |
| suche | Im Internet suchen, auch in einem Satz | 1.8 |
| system | Ordner (OneDrive-fest), Windows-Einstellungen, PC sperren | 1.3 |
| systeminfo | Akku, Speicher, CPU, Laufzeit | 1.6 |
| uhrzeit | Uhrzeit, Datum & Timer (Skript-Mod) | 1.3 |
| webseiten | Webseiten öffnen | 1.3 |
| wecker | Wecker mit Musik, Schlummern | 1.7 |
| wuerfel | Würfel, Münze, Zufallszahl (Skript-Mod) | 1.0 |
