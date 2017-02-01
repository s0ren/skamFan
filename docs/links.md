# Links til andre ressourcer

## DR rest api
* [DR MU-online API documentation](http://www.dr.dk/mu-online/Help/1.3)
 *  [List of seasons for the given series](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-1.3-list-view-seasons_id_onlyIncludeFirstEpisode_limit_offset)
   * [eksempel](http://www.dr.dk/mu-online/api/1.3/list/view/seasons?id=skam&onlyincludefirstepisode=true&limit=5&offset=0)
 * [Returns all episodes from the given season.](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-1.3-list-view-season_id_limit_offset)
   * [eksempel](http://www.dr.dk/mu-online/api/1.3/list/view/season?id=skam-2&limit=5&offset=0)
 * [Detailier om en udsendelse (programcard)](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-apiVersion-programcard-id_productionNumber)
   * [eksempel med id](http://www.dr.dk/mu-online/api/1.3/programcard/?id=skam-iii-2-10)
   * [eksempel med ProductionNumber](http://www.dr.dk/mu-online/api/1.3/programcard/?productionnumber=00921705310)
 * [Billede der hører til en udsendelse (eller måske til en serie...)](http://www.dr.dk/mu-online/Help/1.3/Api/GET-api-apiVersion-asset-id_width_height_crop_raw)
   * [Eksempel](http://asset.dr.dk/ImageScaler/?file=/mu-online/api/1.3/asset/587c9762a11f9f160871101f%2525253Fraw=True&w=340&scaleAfter=crop&quality=75)
   * Eksempel på et billede der er referet direkte:
   ![lille indsat billede](http://asset.dr.dk/ImageScaler/?file=/mu-online/api/1.3/asset/587c9762a11f9f160871101f%2525253Fraw=True&w=240&scaleAfter=crop&quality=75)


### JSON output
Fra eksemplet med programcard ovenfor,
har jeg hentet et svar, som kommer i JSON format.
Først vises det i rå og uformateret form. Derefter er de samme data indsat efter at have været en tur inde i WebStorm editoren og har fået formateret indoldet med `Reformat Code`.

__I rå form:__

```{"Description":"Norsk dramaserie.\nDen kønne 1.g'er Emma har fået et godt øje til Isak. Men selv er Isak brændt varm på en fyr - nemlig den lidt ældre Even. Nu forsøger han at finde ud af mere om ham.","ProductionNumber":"00921705310","PrimaryBroadcastStartTime":"2017-01-18T21:40:00Z","PrimaryBroadcast":{"BroadcastDate":"2017-01-18T00:00:00Z","AnnouncedStartTime":"2017-01-18T21:40:00Z","AnnouncedEndTime":"2017-01-18T22:10:00Z","ProductionCountry":"NORGE","ProductionYear":2017,"VideoWidescreen":true,"SubtitlesTTV":true,"VideoHD":true,"WhatsOnUri":"dr.dk/mas/whatson/1209237207813","Channel":"dr.dk/mas/whatson/channel/DR3","ChannelSlug":"dr3","IsRerun":false},"Chapters":[],"SecondaryAssets":[{"Kind":"VideoResource","Uri":"http://www.dr.dk/mu-online/api/1.3/bar/58801e6d6187a4123831d0ca","DurationInMilliseconds":1528520,"Downloadable":false,"RestrictedToDenmark":true,"StartPublish":"2017-01-18T21:15:00Z","EndPublish":"2017-02-16T22:59:00Z","Target":"SpokenSubtitles","Encrypted":false}],"Type":"ProgramCard","SeriesTitle":"Skam","SeriesSlug":"skam","SeriesUrn":"urn:dr:mu:bundle:582f03846187a416740499ab","SeasonTitle":"SKAM III","SeasonSlug":"skam-iii","SeasonUrn":"urn:dr:mu:bundle:586e2380a11f9f0ce8f402c0","PrimaryChannel":"dr.dk/mas/whatson/channel/DR3","PrimaryChannelSlug":"dr3","PrePremiere":false,"ExpiresSoon":false,"OnlineGenreText":"","PrimaryAsset":{"Kind":"VideoResource","Uri":"http://www.dr.dk/mu-online/api/1.3/bar/588212c46187a40fdc1519c4","DurationInMilliseconds":1528520,"Downloadable":false,"RestrictedToDenmark":true,"StartPublish":"2017-01-18T21:15:00Z","EndPublish":"2017-02-16T22:59:00Z","Target":"Default","Encrypted":false},"HasPublicPrimaryAsset":true,"AssetTargetTypes":"Default SpokenSubtitles","Slug":"skam-iii-2-10","Urn":"urn:dr:mu:programcard:586e2381a11f9f0ce8f402c2","PrimaryImageUri":"http://www.dr.dk/mu-online/api/1.3/bar/587c98a36187a406dcda45e6","PresentationUri":"https://www.dr.dk/tv/se/skam/skam-iii/skam-iii-2-10","Title":"Skam III (2:10)"}```

__Formateret:__

```json
{
     "Description": "Norsk dramaserie.\nDen kønne 1.g'er Emma har fået et godt øje til Isak. Men selv er Isak brændt varm på en fyr - nemlig den lidt ældre Even. Nu forsøger han at finde ud af mere om ham.",
     "ProductionNumber": "00921705310",
     "PrimaryBroadcastStartTime": "2017-01-18T21:40:00Z",
     "PrimaryBroadcast": {
       "BroadcastDate": "2017-01-18T00:00:00Z",
       "AnnouncedStartTime": "2017-01-18T21:40:00Z",
       "AnnouncedEndTime": "2017-01-18T22:10:00Z",
       "ProductionCountry": "NORGE",
       "ProductionYear": 2017,
       "VideoWidescreen": true,
       "SubtitlesTTV": true,
       "VideoHD": true,
       "WhatsOnUri": "dr.dk/mas/whatson/1209237207813",
       "Channel": "dr.dk/mas/whatson/channel/DR3",
       "ChannelSlug": "dr3",
       "IsRerun": false
     },
     "Chapters": [],
     "SecondaryAssets": [
       {
         "Kind": "VideoResource",
         "Uri": "http://www.dr.dk/mu-online/api/1.3/bar/58801e6d6187a4123831d0ca",
         "DurationInMilliseconds": 1528520,
         "Downloadable": false,
         "RestrictedToDenmark": true,
         "StartPublish": "2017-01-18T21:15:00Z",
         "EndPublish": "2017-02-16T22:59:00Z",
         "Target": "SpokenSubtitles",
         "Encrypted": false
       }
     ],
     "Type": "ProgramCard",
     "SeriesTitle": "Skam",
     "SeriesSlug": "skam",
     "SeriesUrn": "urn:dr:mu:bundle:582f03846187a416740499ab",
     "SeasonTitle": "SKAM III",
     "SeasonSlug": "skam-iii",
     "SeasonUrn": "urn:dr:mu:bundle:586e2380a11f9f0ce8f402c0",
     "PrimaryChannel": "dr.dk/mas/whatson/channel/DR3",
     "PrimaryChannelSlug": "dr3",
     "PrePremiere": false,
     "ExpiresSoon": false,
     "OnlineGenreText": "",
     "PrimaryAsset": {
       "Kind": "VideoResource",
       "Uri": "http://www.dr.dk/mu-online/api/1.3/bar/588212c46187a40fdc1519c4",
       "DurationInMilliseconds": 1528520,
       "Downloadable": false,
       "RestrictedToDenmark": true,
       "StartPublish": "2017-01-18T21:15:00Z",
       "EndPublish": "2017-02-16T22:59:00Z",
       "Target": "Default",
       "Encrypted": false
     },
     "HasPublicPrimaryAsset": true,
     "AssetTargetTypes": "Default SpokenSubtitles",
     "Slug": "skam-iii-2-10",
     "Urn": "urn:dr:mu:programcard:586e2381a11f9f0ce8f402c2",
     "PrimaryImageUri": "http://www.dr.dk/mu-online/api/1.3/bar/587c98a36187a406dcda45e6",
     "PresentationUri": "https://www.dr.dk/tv/se/skam/skam-iii/skam-iii-2-10",
     "Title": "Skam III (2:10)"
   }
```

Fra javascript:
```javascript
var programcard = {"Description":"Norsk dramaserie.\nDen kønne 1.g'er Emma har fået et godt øje til Isak. Men selv er Isak brændt varm på en fyr - nemlig den lidt ældre Even. Nu forsøger han at finde ud af mere om ham.","ProductionNumber":"00921705310","PrimaryBroadcastStartTime":"2017-01-18T21:40:00Z","PrimaryBroadcast":{"BroadcastDate":"2017-01-18T00:00:00Z","AnnouncedStartTime":"2017-01-18T21:40:00Z","AnnouncedEndTime":"2017-01-18T22:10:00Z","ProductionCountry":"NORGE","ProductionYear":2017,"VideoWidescreen":true,"SubtitlesTTV":true,"VideoHD":true,"WhatsOnUri":"dr.dk/mas/whatson/1209237207813","Channel":"dr.dk/mas/whatson/channel/DR3","ChannelSlug":"dr3","IsRerun":false},"Chapters":[],"SecondaryAssets":[{"Kind":"VideoResource","Uri":"http://www.dr.dk/mu-online/api/1.3/bar/58801e6d6187a4123831d0ca","DurationInMilliseconds":1528520,"Downloadable":false,"RestrictedToDenmark":true,"StartPublish":"2017-01-18T21:15:00Z","EndPublish":"2017-02-16T22:59:00Z","Target":"SpokenSubtitles","Encrypted":false}],"Type":"ProgramCard","SeriesTitle":"Skam","SeriesSlug":"skam","SeriesUrn":"urn:dr:mu:bundle:582f03846187a416740499ab","SeasonTitle":"SKAM III","SeasonSlug":"skam-iii","SeasonUrn":"urn:dr:mu:bundle:586e2380a11f9f0ce8f402c0","PrimaryChannel":"dr.dk/mas/whatson/channel/DR3","PrimaryChannelSlug":"dr3","PrePremiere":false,"ExpiresSoon":false,"OnlineGenreText":"","PrimaryAsset":{"Kind":"VideoResource","Uri":"http://www.dr.dk/mu-online/api/1.3/bar/588212c46187a40fdc1519c4","DurationInMilliseconds":1528520,"Downloadable":false,"RestrictedToDenmark":true,"StartPublish":"2017-01-18T21:15:00Z","EndPublish":"2017-02-16T22:59:00Z","Target":"Default","Encrypted":false},"HasPublicPrimaryAsset":true,"AssetTargetTypes":"Default SpokenSubtitles","Slug":"skam-iii-2-10","Urn":"urn:dr:mu:programcard:586e2381a11f9f0ce8f402c2","PrimaryImageUri":"http://www.dr.dk/mu-online/api/1.3/bar/587c98a36187a406dcda45e6","PresentationUri":"https://www.dr.dk/tv/se/skam/skam-iii/skam-iii-2-10","Title":"Skam III (2:10)"}';

var afsnitBillede = programcard.PrimaryImageUri;
var onlyDK = programcard.PrimaryAsset.RestrictedToDenmark;
...
