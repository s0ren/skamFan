/** Made 31-01-2017 **/

function  prepareSeasons(event, ui)
{
    console.log("ready to load Seasons");

    $.get("http://www.dr.dk/mu-online/api/1.3/list/view/seasons?id=skam&onlyincludefirstepisode=true&limit=15&offset=0",
        function(res, code) {
        console.log(code + ": " + JSON.stringify(res));
        }
    )
}

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
