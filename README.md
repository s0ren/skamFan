# skamFan
An ap that lets a fan follow all the episodes of NRK's SKAM series.

(The rest of this is in danish...)

### Indhold
(...)

## Koncept
![Overblik over siderne](docs/images/page_flow_.png)


På appen kan man se en oversigt over hvor alle sæsoner,
hvis man klikker på en sæson, kan man se en liste over alle afsnit i sæsonen,
og klikker man på et afsnit kan man se dataljer om afsnittet. I tillæg er der links fra afsnitet,
til DRs side hvor lige det afsnit kan afspilles.
Linket til imdb er til hele seriens side.

![](docs/images/LandingPage.png)&nbsp;
![](docs/images/AllSeasons.png)&nbsp;
![](docs/images/Season.png)&nbsp;
![](docs/images/EpisodeDetalje.png)

## Eksterne datakilder
I dokumentet [links.md](links.md) beskrives de rest-api-sites som appen henter data fra.
Pt. er det kun DR's medieunivers på [dr.dk/mu-online](http://www.dr.dk/mu-online/Help/1.3), desværre kunne jeg ikke hitte ud af NRKs interface.

Alternativt kunne man også bruge imdb for info, samt andre steder hvor serien kan streames.
Der kunne også være sjovt at give adgang til decideret fan-info fra facebook, intagram o.l.

## Væktøjer og platform
Appen er lavet med Phonegap, og er i første omgang kun buildet til Android.
Men det burde være "lige til" at få den på IOS. Andre mobiler har jeg ikke adgang til,
eller konkret kendskab til.
Det er klogt at kigge på [Phonegap dokumentationen](http://docs.phonegap.com/),
som egentlig mest henviser til [Cordova dokumentationen](https://cordova.apache.org/docs/en/latest/).

Layout (og event-flow) er bygget op med [jQuery Mobile](http://api.jquerymobile.com/).

## Appens opbygning
### Markup


#### Single Page Design
```html
<!DOCTYPE html>
<html>
    <head>...</head>
    <body>

        <div id="container" >
            <div data-role="header" data-position="fixed" data-theme="a">
                ...
            </div>

            <section id="landingpage" data-role="page" data-theme="b">
                ...
            </section>
            <section id="seasons" data-role="page" data-theme="b">
                ...
            </section>
            <section id="episodes" data-role="page" data-theme="b">
                ...
            </section>
            <section id="episodeDetails" data-role="page" data-theme="b">
                ...
            </section>
        </div>

    </body> 
</html>
```

#### `data-` attributter
jQueryMobile bruger meget at styre hvad indholdet (i markupen) kan,
ved at kigge efter ekstra markering attributter på html-tags som starter med `data-`.
Disse attributter understøttes i html5 sådan at værdierne i `data-`atributterne er synlige fra javaScript,
som egenskaber på html-elementerne som hentes fra DOM-træet.
F.eks kan `<a href="..." data-slug="skam-2">`hentes i javaScript med `$('a').dataset.slug`.
Mange af disse `data-`attributter er bare markeinger som jQueryMobile bruger,
uden at vi selv skal bruge dem fra javaScriptet. JQueryMobile bruger disse
 internt.

##### data-role="page"
Viser at block-elementet kan bruges som en sidevisning i en one-page-site.
[Se jQM docs](http://api.jquerymobile.com/page/)
##### data-theme="a"
Vælge det tema elementet skal vises med. (Det kunne vi bruge et helt kursus på).
[Se jQM docs](http://themeroller.jquerymobile.com/)
##### data-role="header"
Viser at DIV elementet er en header som sidder øverst på siden.
[Se jQM docs](http://api.jquerymobile.com/header/)
### Scripts
#### Events
#### XHR get
### Sikkerhedsspecifikationer
Der er flere forskellige sikkerhedsmodeller for mobil apps.
Her tænker jeg mest på at brugeren ved hvad appen får adgang til,
og at den _ikke_ kan udføre andre ting.
I vores app er det mest kritiske problem at styre hvad den får adgang til på nettet.
Tidligere var whitelists specificeret i `config.xml`, og senere med plugin'en
`cordova-plugin-whitelist`.

I de nuværende udgaver af phonegap/cordova of på nutidige telefoner,
styres begrænsninger og tilladelser til netadgang via `CSP` med direktiver
i html filens head-tag.

### Content Security Policy (CSP)
[https://content-security-policy.com/](https://content-security-policy.com/)

I skamApp har jeg indsat dette i `index.html` `head`:
```html
<meta http-equiv="Content-Security-Policy"
    content="default-src 'self' *;
             style-src 'self' 'unsafe-inline';
             script-src 'self' ;
             connect-src *">
```
Så der er adgang til alt med `*`'erne.