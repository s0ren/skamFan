/** Made 31-01-2017 **/

function prepareSeasons(event, ui)
{
    console.log("ready to load Seasons");
    $.mobile.loading( 'show', {});
    // fjern 'gamle' knapper
    $('#seasons a').remove();

    $.get("http://www.dr.dk/mu-online/api/1.3/list/view/seasons?id=skam&onlyincludefirstepisode=true&limit=15&offset=0",
        function(res, code) {
            console.debug(code + ": " + JSON.stringify(res));

            // check lige om indholdes er bare lidt i orden...
            if (res.Items && res.TotalSize > 0)
            {
                var newContent = '';
                // gennemløb alle sæsoner i Items
                for (var i in res.Items)
                {
                    // lav en ny "knap" for hver sæson
                    // <a href="#episodes" data-role="button" data-slug="">Sæson 1</a>
                    newContent += '<a href="#episodes" data-role="button" data-slug="'+res.Items[i].Slug+'">Sæson ' + res.Items[i].SeasonNumber + '</a>';
                }
                // tilføj knapperne til DOM'en
                $(newContent).appendTo('#seasons');
                // lad JQM forbedre htmlen
                $('#seasons').enhanceWithin();
                // tilføj event handler til hver knap
                $('#seasons a').one('click', prepareSeason);
            }

        }
    ).always(function () {
        $.mobile.loading( 'hide', {});
    })
}

function prepareSeason(event, ui)
{
    console.log("Indlæser sæson " + this.dataset.slug );
    $.mobile.loading( 'show',
        {text: 'vent venligst',
        textVisible: true,
        theme: 'a',
        textonly: false,
        html: ''}
    );
    // fjern 'gamle' div'er
    $('#episodes div').remove();

    $.get('http://www.dr.dk/mu-online/api/1.3/list/view/season?id='+ this.dataset.slug +'&limit=15&offset=0',
        function(res, code){
            console.debug(code + ": " + JSON.stringify(res));

            // check lige om indholdes er bare lidt i orden...
            if (res.Items && res.TotalSize > 0)
            {
                var newContent = '';
                // gennemløb alle afsnit i Items
                for (var i in res.Items) {
                    // lav en ny "div" for hver sæson
                    // <div><a href="#episodeDetails">
                    //   <img src="xxx">
                    //   <h2>2 3-10</h2>
                    //   <h2>Jonas kysser Eva, men Noora ser det hele</h2>
                    // </a></div>
                    newContent += '<div>'
                        + '  <img src="'+ res.Items[i].PrimaryImageUri +'" width="50%">'
                        + '  <h2>'+ res.Items[i].Title +'</h2>'
                        + '  <p>'+ res.Items[i].Description +'</p>'
                        + '  <a href="#episodeDetails" data-role="button" data-slug="'+ res.Items[i].Slug +'">Se detaljer om afsnit</a>'
                        + '</div>';
                }
                // tilføj knapperne til DOM'en
                $(newContent).appendTo('#episodes');
                // lad JQM forbedre htmlen
                $('#episodes').enhanceWithin();
                // tilføj event handler til hver knap
                $('#episodes a').one('click', prepareDetail);
            }
        }
    ).always(function () {
        $.mobile.loading( 'hide', {});
    })
}

function prepareDetail(event, ui)
{
    console.log("Indlæser afsnit " + this.dataset.slug );

    $.get('http://www.dr.dk/mu-online/api/1.3/programcard/?id='+ this.dataset.slug,
        function(res, code){
            console.debug(code + ": " + JSON.stringify(res));
            // fjern 'gamle' markups
            $('#episodeDetails *').remove();

            // check lige om indholdes er bare lidt i orden...
            if (res && res.ProductionNumber.length > 0)
            {
                var newContent = '';
                // gennemløb alle afsnit i Items
                //for (var i in res.Items) {
                    // lav en ny "div" for hver sæson
                    // <img src="xxx">
                    // <h2>2 3-10</h2>
                    // <p>Jonas kysser Eva, men Noora ser det hele</p>
                    // <p>Clifhanger text...</p>
                    // <a href="http://dr.dk">se afsnit</a>
                    // <a href="http://www.imdb.com/title/tt5288312/">imdb site</a>
                    newContent +=  '<img src="'+ res.PrimaryImageUri +'" width="100%">'
                                +  '<h2>'+ res.Title +'</h2>'
                                +  '<p>'+ res.Description +'</p>'
                                +  '<p>Clifhanger, Måske fra imdb</p>'
                                +  '<a data-role="button" href="'+ res.PresentationUri +'">Se afnit på dr.dk</a>'
                                //+  '<br>'
                                +  '<a data-role="button" href="http://www.imdb.com/title/tt5288312/">imdb site</a>'
                //}
                // tilføj knapperne til DOM'en
                $(newContent).appendTo('#episodeDetails');
                // lad JQM forbedre htmlen
                $('#episodeDetails').enhanceWithin();
                // tilføj event handler til hver knap
                //$('#episodes a').one('click', prepareX);
            }
        }
    )
}

$(document).ready( // når siden er loaded
    function(){

        $(function(){
            $( "[data-role='header'], [data-role='footer']" ).toolbar();
        });

        var pageContainer = $("div#container").pagecontainer({
            beforeshow:
            function( event, ui){
                //hvilken side er vi ved at vise
                console.log("beforeshow: " + ui.toPage[0].id);

                switch(ui.toPage[0].id) {
                    case "seasons":
                        prepareSeasons(event, ui);
                        break;

                    case "landingpage":
                        break;
                }
        }
        })
    }
);
