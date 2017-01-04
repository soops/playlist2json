// playlist2json
// (c) 2016 Ethan Arterberry
// MIT License

exports.convert = function (playlist) {
    var xml = require("xml-js");
    var rawXMLToJSON = xml.xml2json(playlist, {spaces: 4, compact: false}); // the raw output of itunes converted to messy json
    var rawPlaylist = findByAttribute(JSON.parse(rawXMLToJSON)["elements"][0]["elements"][0]["elements"], "name", "dict")["elements"]; // the tracklist part of the output that was turned into JSON
    var playlistArray = [];
    
    for (var i = 1; i < rawPlaylist.length; i += 2) {
        playlistArray.push(getTrackInfo(rawPlaylist[i]));
    }
    
    return playlistArray;

    function findByAttribute (array, attribute, value) {
        // this is a quick function that finds an object in an array with a matching key and value
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i][attribute] === value) {
                return array[i];
            }
        }
    }

    function getTrackInfo (trackObject) {
        var currentValue = null;
        var scratchObject = {};

        for (var i = 1, len = trackObject["elements"].length; i < len; i += 2) {
            switch (trackObject["elements"][i]["name"]) {
                case "integer":
                    // set value as a number
                    currentValue = Number.parseInt(trackObject["elements"][i]["elements"][0]["text"], 10);
                    break;
                case "string":
                    // set value as a string
                    currentValue = trackObject["elements"][i]["elements"][0]["text"];
                    break;
                case "date":
                    // set value as a date object
                    currentValue = Date.parse(trackObject["elements"][i]["elements"][0]["text"]);
                    break;
                default:
                    currentValue = trackObject["elements"][i]["elements"][0]["text"];
                    break;
            }

            // set key (which is always the item before the value in the array) to value retrieved
            scratchObject[trackObject["elements"][i - 1]["elements"][0]["text"]] = currentValue;
        }
        return scratchObject;
    }
}