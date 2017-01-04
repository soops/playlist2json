var playlist2json = require("./index.js");
var prompt = require("prompt");
var fs = require("fs");

prompt.message = "playlist2json";
console.log("playlist2json CLI // v1.0.0");
prompt.start();

prompt.get([{
    name: "inputFile",
    description: "Enter the location of your iTunes XML playlist file",
    type: "string",
    pattern: /^[\w,\s-]+\.[A-Za-z]{3}$/,
    warning: "Must be a valid filename.",
    required: true
}, {
    name: "outputFile",
    description: "Enter the location where you want to store JSON output",
    type: "string",
    pattern: /^[\w,\s-]+\.[A-Za-z]{3}$/,
    warning: "Must be a valid filename.",
    required: true,
    before: function (v) {
        console.log(prompt.history('inputFile').value.replace(/\.[0-9a-z]+$/i, ".json"))
        return prompt.history('inputFile').value.replace(/\.[0-9a-z]+$/i, ".json");
    }
}], (err, result) => {
    fs.readFile(result.inputFile, (err, data) => {
        if (err) throw err;
        fs.writeFile(result.outputFile, JSON.stringify(playlist2json.convert(data)), (err) => {
            if (err) throw err;
            console.log("Finished converting your playlist into JSON successfully.")
        });
    });
})