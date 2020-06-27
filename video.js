// Declare Vars & Read Files

var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');
var movie_webm, movie_mp4, movie_ogg;
// ... [snip] ... (Read index page)
fs.readFile(path.resolve(__dirname,"logo7.mp4"), function (err, data) {
    if (err) {
        throw err;
    }
    movie_mp4 = data;
});
// ... [snip] ... (Read two other formats for the video)

// Serve & Stream Video

http.createServer(function (req, res) {
    // ... [snip] ... (Serve client files)
    var total;
    if (reqResource == "/logo7.mp4") {
        total = movie_mp4.length;
    }
    // ... [snip] ... handle two other formats for the video
    var range = req.headers.range;
    var positions = range.replace(/bytes=/, "").split("-");
    var start = parseInt(positions[0], 10);
    var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
    var chunksize = (end - start) + 1;
    if (reqResource == "/logo7.mp4") {
        res.writeHead(206, {
            "Content-Range": "bytes " + start + "-" + end + "/" + total,
                "Accept-Ranges": "bytes",
                "Content-Length": chunksize,
                "Content-Type": "video/mp4"
        });
        res.end(movie_mp4.slice(start, end + 1), "binary");
    }
    // ... [snip] ... handle two other formats for the video
}).listen(8888, function(){
  console.log("Video Server Is Running")
});