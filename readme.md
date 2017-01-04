# playlist2json
This is a simple script (which I intend to turn into it's own module at some point) that takes any [exported XML iTunes playlist](http://www.wikihow.com/Export-an-iTunes-Playlist) in the XML format and turns it into readable, usable JSON.

I intend to build something much larger based on this package, but for now, this is it. Stay tuned, folks.

## Usage
To get set up with `playlist2json`, all you need to do is install it through NPM (`npm install playlist2json`) and then start using it in your projects like so:
```
const playlist2json = require("playlist2json");
const playlistImport = ... // This is where your exported iTunes playlist data goes. However you retrieve it and store it is up to you.

console.log(playlist2json.convert(playlistImport)) // Just run the playlist2json.convert function and include the XML data you wish to convert, and it'll return the converted playlist in JSON format.
```
If you wanna play around more with it, you can download the GitHub repo and run `npm install` in its base directory. There is also a makeshift CLI of sorts which you can access by running `npm start` in the base directory of `playlist2json`.

## Example
In the `example` folder you can find a JSON tracklist of Run The Jewels 3 converted straight from an XML iTunes exported playlist of the album. The file `runthejewels-rtj3-prettyprint.json` was pretty printed with [JSON Formatter](https://jsonformatter.curiousconcept.com/), please take note that **this package will not pretty print any outputted JSON.**