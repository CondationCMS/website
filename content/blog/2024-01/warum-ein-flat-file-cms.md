---
title: "[CMS] Warum ein FlatFileCMS verwenden"
publish_date: 2024-01-08
template: blog-entry.html
seo:
    description: "Was spricht für und was gegen die Verwendung eines FlatFileCMS!"
---

Schon mal darüber nachgedacht, ein neues CMS für das nächste Projekt zu verwenden?
Vielleicht sogar ein FlatFileCMS?

Über Vor- und Nachteile dieser System wurde schon viel geschrieben, aber ich möchte meine 50-cent dazu beitragen.


## Sicherheit
Meiner Meinung nach ist die Tatsache, dass keine Datenbank verwendet wird einer der größte Sicherheitsvorteil.
SQL-Injections sind seit Jahren unter den [OWASP Top-Ten](https://owasp.org/www-project-top-ten/) und werden es vermutlich auch noch bleiben.

Ein zweiter Punkt, der zumindest bei manchen System zutrifft, es gibt kein Admin-Interface. Also auch keine Benutzerverwaltung oder Medienuploads, wodurch weitere Türen für Angreifer geschlossen werden.

Allerdings muss man hier ehrlich sein. Es gibt auch Sicherheitsrisiken die weiterhin bestehen. Vor Jahren gab es zum Beispiel einen Bug in der **Apache commons-fileupload** Bibliothek ind Verbindung mit **Apache Struts**, da hilft es auch nicht, wenn keine Datenbank eingesetzt wird.

## Release-Workflow
Da diese System einfache Dateien als Datenbank verwenden, können die ganzen Daten und Konfigurationen einfach in GIT abgelegt werden.

Ich glaube, es gibt nur wenige klassische CMS, bei denen es möglich ist, selbst die Konfiguration zu versionieren.

So kann man mit den Standardfeature wie Merge-Requests und Version-Historie arbeiten. Man kann Stände Taggen und nach belieben ältere Versionen wieder herstellen.

Meiner Meinung ein tolles Ding, dem man nicht zu wenig Beachtung geben sollte. Auch wenn andere Systeme auch Release-Workflows unterstützen, kann man hier im Zusammenspiel mit **GIT** (github oder bitbucket) richtig krasse Dinge machen.

## Performance
Na, das ist wirklich ein interessantes Theme. Die meisten FlatFile-System die ich mir bis jetzt angeschaut habe, sind in PHP implementiert. So weit ich weiß, man möge mir meinen Unwissenheit verzeihen, kann PHP keine Daten zwischen Requests teilen. Was so viel bedeutet, dass für jeden Request immer wieder alle nötigen Daten eingelesen werden müssen.
Häufig gib es hier Lösungen mit [memcached](https://memcached.org/) oder [redis](https://redis.io/). Aber das sind in fast alle Fällen zusätzliche Plugins und nicht im Standardprodukt enthalten.

Dank moderner Platten klappt der Zugriff relativ schnell und macht bei *"kleinen"* Projekten auch kein Problem. Bei großen Projekten kann es hier schon zu Problemen kommen, je nachdem wie umfangreich die Ordner- bzw. Navigations-Struktur ist.

Werden dann noch Queries unterstützt, die auf den Meta-Daten der einzelnen Inhalts-Dateien beruhen, kommt ein solches System vermutlich tatsächlich relativ schnell an seine Grenzen.


## Warum bin ich Fan dieser Systeme?

Sie sind zum einen einfach in der Benutzung. 

Inhalte werden in den meisten Fällen in Markdown gepflegt. Das nennen ich mal **distraction free**, besser kann man sich nicht auf das schreiben konzentrieren. Als Gegenteil fällt mir hier der WordPress Editor [Gutenberg](https://de.wordpress.org/gutenberg/) ein. Ja, der hat sein Daseinsberechtigung, aber flüssig Inhalte erstellen geht damit wohl eher nicht.

Bei der Gestaltung der Templates hat man meistens totale Freiheit oder wird nur wenig eingeschränkt. 

Also Software-Entwickler finde ich den GIT-Aspekt unglaublich charmant. Viele Open-Source System besitzen gar keinen Möglichkeit einen Release-Workflow zu gestalten. Bei den proprietären ist es dann teilweise zu Umständlich und kompliziert.



Bis dahin!