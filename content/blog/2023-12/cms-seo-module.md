---
title: "[CMS] Bekommt ein SEO Module spendiert"
publish_date: 2023-12-05
template: blog-entry.html
seo:
    description: "Auch bei FlatFileCMS ist SEO ein wichtiger Bestandteil. Daher bekommt das cms ein seo-module spendiert!"
---

Bei meinem aktuellen Experiment, in dem es darum geht, wie gut **KI generierte Inhalte** bei Suchmaschinen ankommen. Versuche ich gerade Suchmaschinen möglichst schnell dazu zu bekommen, meine Inhalte zu indizieren.  
Eine Möglichkeit, dich ich dafür in Betracht gezogen habe, ist das Einreichen einer **Sitemap**.

Diese kann entweder manuell erstellt werden, was mit recht viel Aufwand verbunden ist, da man sie ja fast täglich aktualisieren muss.
Oder man kann einen Dienst dazu verwenden, der die Seite durchgeht und eine Sitemap generiert. Aber auch hier müsste ich wieder fast täglich eingreifen.  
Als kam mir die Idee, für mein CMS einfach ein **seo-module** zu erstellen, welches mir die manuelle Arbeit abnimmt und dynamisch die Sitemap erzeugt.

Dazu muss einfach das Module in der *site.yaml* aktiviert werden.
```yaml
modules:
  active:
    - seo-module
```

Danach steht die Sitemap unter folgender URL bereit und kann in der robots.txt eingetragen und/oder direkt an google übermittelt werden.
```http
https://dein-url.de/module/seo-module/sitemap.xml
```

Ich hoffe, dieser Schritt hilft, Inhalte schneller über Suchmaschinen auffindbar zu machen.