const Fs = require("fs");
const Ytdl = require("ytdl-core");

const args = process.argv.slice(2);

if (args.length === 2) {
    if (Ytdl.validateURL(args[0])) {
        Ytdl(args[0], {
            quality: "highest",
        }).pipe(Fs.createWriteStream(args[1] + ".mp4").on("finish", () => {
            console.log("Download complete and saved as " + args[1] + ".mp4");
        }));
    } else {
        console.log(args[0] + " isn't a valid youtube's video url");
    }
} else {
    console.log("Syntax error: node app.js <url>* <output>*");
}
