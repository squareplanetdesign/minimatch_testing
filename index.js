var args = require("minimist")(process.argv.slice(2));

var Minimatch = require("minimatch").Minimatch;



var pattern = "{**/*.js,**/!(*.spec.js),!(libraries)/**/*.js,!(test)/**/*.js}";
var mm = new Minimatch(pattern, { debug: args.debug });

var matches = [
    "main.js",
    "app/main.js",
];
var noMatches = [
    "libraries/lib.js",
    "libraries/lib1/lib.js",
    "test/lib.js",
    "test/lib1/lib.js",
    "main.spec.js",
    "app/main.spec.js",
];

matches.forEach(function(match) {
    console.log(mm.match(match), "Should include: " + match);
});

noMatches.forEach(function(match) {
    console.log(mm.match(match), "Should not include: " + match);
});
