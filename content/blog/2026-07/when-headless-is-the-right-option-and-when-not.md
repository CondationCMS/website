---
title: 'When headless is the right option and when not'
seo:
  description: ''
  keywords: ''
  author: ''
publish_date: 2026-07-25T00:00:00Z
template: blog-entry.html
unpublish_date: null
published: true
postType: general
---

wenn du einen hammer hast, sieht jedes problem wie ein nagel aus. so ähnlich könnte man auch die aktuelle situation bei headless cms sehen. aber wei bei der hammer analogie, ist auch ein headless cms nicht immer die optimal wahl. genauso ist ein traditionelles cms nicht immer die richtige wahl.

## Unterschiede

schauen wir uns zu allererst die Unterschiede beide 

### traditionel

Oft auch als Monolith bezeichnet ist es in der REgel ein all-in-one system. Sowohl redaktionssystem, als auch auslieferung laufen auf dem gleichen system. das übernimmt die auslieferung an den client und rendered die daten mittels eines templates.
Traditionelle System sind stark, wenn es bei der Ausgabe um HTML geht.
Ein vorteil dieser systeme, sie wissen wer ihre daten wie verwendet, daher kann sowohl der Editor-Experience also auch die Vorschau optimal umgesetzt werden.

Der Betrieb iste häufig einfacher, da die gesamtheit aus weniger systemen vesteht. klar, wenn ein system für alles verantwortlich ist. allerdings macht genau dieser punkt es auch anfälliger, da wenn das system ausfällt, alles ausfällt, vorrausgesetzt, dass system unterstützt kein clustering.

Inhalte werden in der REgel seitenorientiert gepflegt, daher verfügen diese systeme häufig über die "schöneren" editoren und page builder.

### headless

ein headless system ist dagegen ist im prinzip nur ein einfacher datentopf, der daten speichert und über eine schnittstelle bereitstellt. die daten werden als roh daten geliefert und müssen vom client noch gerendered werden. und client meint hier nicht unbedingt einen browser, es kann einen bleliebige applikation sein und ds rendereing kann auch serverseitig (SSR) stattfinden.
headless system sind gut, wenn es um die bespielung unterschiedlicher KAnäle geht. so kann sowohl eine webseit aus den daten gebaut werden wie mit dem selben datenstand auch verschiedene divices beliefert werden.

Headless ist die Architektur der wahl, wenn es um die integration in andere Systeme geht. Und weil es meistens um Integration geht, ist einen vorschau auch nicht immer wichtig, bzw. muss nicht ins CMS integriert sein. Ob irgendetwas auf einen display korrekt angezeigt wird, sollte am besten auf dem Display geprüft werden.

Hier geht es um die verwaltung von inhalten, die irgendwo irgendwie verwendet werden. ein fancy page builder ist nicht nötig. daten werden in den meisten fällen über formulare gepflegt.


## der flexible allrounder

der punkt geht ganz klar an headless systeme. sie unterstützen alle usecases mehr oder weniger gut.
und wenn ich jetzt schon die party der headless hersteller sehen kann, muss ich sagen, nur weil sie jeden usecase abbilden können, heißt es nicht, dass sie jeden usecase gleich gut umsetzten können und IMMER besser sind als traditionelle system.

## warum also überhaupt noch traditionell

Hey, ich kann doch mit headless alle meinen Anforderungen irgendwie um setzten. wieso mach ich es mir nicht einfach und verwende nur noch headless. 
weißt du noch, hammer und nagel. was ich eingangs erwähnt habe.

nicht immer ist es von nöten, unterschiedliche devices mit daten versorgen zu können. Ist das Ziel einen einfache Firmenwebseite mit Blog und einigen Landigpages, kann dafür natürlich ein headless system verwendet werden. allerdings kann das system seine stärken hier nicht ausspielen und ist in vielen fällen sogar hinderlich. Hinderlich, weil es in den meisten Fällen immer ein Entwickler das Frontendanpassen muss, wenn neue Daten (Zum Beispiel Produkte) gepflegt und angezeigt werden soll.
Einen Vorschau, auch mit noch nicht veröffentlichten Daten, ist immer etwas tricky. Ich habe zar oben geschrieben, für headless ist es nicht immer nötig, aber für den usecase Webseite, möchte eigentlich jeder immer einen vernünfitige Vorschau.
Zum anderen wird gerade für webseite auch hier immer mit SSR gearbeitet, was somit einen weitere schicht einführt und den betrieb um eine komplexitöt erweitert.