# En vejviser for hvordan vi bygger skamFan

1.   Opsætning af projekt
    1.   phonegap create skamFan --template blank
    1.   git init
    1.   git sync...
    1.   github opstart
        * Elever laver git clone \<github-url\>
1.  Opbygning af markup
    1.  scripts og links i header
    1.  container-div og sections med `data-role="page"`
    1.  psoudo-indhold på siderne
1.  Dynamisk indhold
    1. sæsonner-siden
        1.  opret instans af `pagecontroller` object
        1.  opret handler til beforeshow event
        1.  i handler lav `switch-case` til forskellige sider
        1.  i `case 'seasons'`, kald funktionen prepareSeasons
        1.  i `prepareSeasons`
            1.  hent sæsoner med jQuery-ajax metoden `get`, med parametrene:
                * `<url>`
                    (DR-mu linket som findes i [links.md](links.md)
                *   `<success>` callback funktion
                    som udfører at behnadle returdata fra DR

            1.  Lav et if check på at res indeholder rimelige ting i `TotalSize`
                og at `Items` findes.
            1.  Lav et for-in-loop over `res.Items`, så vi gennemløber `Items` for
                alle sæsoner.
                1.  For hver sæson, tilføj en ny (link)knap med nummeret på sæsonen,
                    og slug i data-slug, til variablen `newContent`.
            1.  Fjern alle gamle knapper med `$('').remove()`.
            1.  Tilføj de nye knapper i `newContent` med `('#seasons').add(newContent)`
            1.  Søg for at JQM enhancer (link)knapperne ved at kalde `$('#seasons').enhanceWithin()`.
            1.  Til hver knap tilføger vi en eventhandler, for klik, med `$('#seasons
