# playlist2json
This is a simple script (which I intend to turn into it's own module at some point) that takes any [exported XML iTunes playlist](http://www.wikihow.com/Export-an-iTunes-Playlist) in the XML format and turns it into readable, usable JSON.

I intend to build something much larger based on this package, but for now, this is it. Stay tuned, folks.

## Usage
To get set up with `playlist2json`, install it through NPM.
```
npm install playlist2json
```
If you wanna play around more with it, you can download the GitHub repo and run `npm install` in its base directory. There is also a makeshift CLI of sorts which you can access by running `npm start` in the base directory of `playlist2json`.

## Example
In the `example` folder you can find a JSON tracklist of Run The Jewels 3 converted straight from an XML iTunes exported playlist of the album. The file `runthejewels-rtj3-prettyprint.json` was pretty printed with [JSON Formatter](https://jsonformatter.curiousconcept.com/), please take note that **this package will not pretty print any outputted JSON.**