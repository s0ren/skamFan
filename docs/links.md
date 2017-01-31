# Links til andre ressourcer

## DR rest api
* [DR MU-online API documentation](http://www.dr.dk/mu-online/Help/1.3)
 *  [List of seasons for the given series](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-1.3-list-view-seasons_id_onlyIncludeFirstEpisode_limit_offset)
   * [eksempel](http://www.dr.dk/mu-online/api/1.3/list/view/seasons?id=skam&onlyincludefirstepisode=true&limit=5&offset=0)
 * [Returns all episodes from the given season.](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-1.3-list-view-season_id_limit_offset)
   * [eksempel](http://www.dr.dk/mu-online/api/1.3/list/view/season?id=skam-2&limit=5&offset=0)
 * [Detailier om en udsendelse (programcard)](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-apiVersion-programcard-id_productionNumber)
   * [eksempel](http://www.dr.dk/mu-online/api/1.3/programcard/?id=skam-iii-2-10)
 * [Billede der hører til en udsendelse (eller måske til en serie...)](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-apiVersion-asset-id_width_height_crop_raw)
   * [Eksempel](http://asset.dr.dk/ImageScaler/?file=/mu-online/api/1.3/asset/587c9762a11f9f160871101f%2525253Fraw=True&w=340&scaleAfter=crop&quality=75)

### JSON output

```http://www.dr.dk/mu-online/api/1.3/programcard/?id=skam-iii-2-10```