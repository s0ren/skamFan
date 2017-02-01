/** Made 31-01-2017 **/

function prepareSeasons(event, ui)
{
    console.log("ready to load Seasons");

    $.get("http://www.dr.dk/mu-online/api/1.3/list/view/seasons?id=skam&onlyincludefirstepisode=true&limit=15&offset=0",
        function(res, code) {
            console.debug(code + ": " + JSON.stringify(res));

            // check lige om indholdes er bare lidt i orden...
            if (res.Items && res.TotalSize > 0)
            {
                $('#seasons a').remove();
                var newContent = '';
                for (var i in res.Items)
                {
                    // <a href="#episodes" data-role="button" data-slug="">Sæson 1</a>
                    newContent += '<a href="#episodes" data-role="button" data-slug="'+res.Items[i].Slug+'">Sæson ' + res.Items[i].SeasonNumber + '</a>';
                }
                $(newContent).appendTo('#seasons');
                $('#seasons').enhanceWithin();
                $('#seasons').one('click', prepareSeason);
            }

        }
    )
}

function prepareSeason(event, ui)
{}

$(document).ready( // når siden er loaded
    function(){
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
