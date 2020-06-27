var express = require("express");
var app = express();
var request = require("request")
var video = require('./video')
path = require('path')
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname + '/public')));

video();
const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')
 
let sitemap
 
app.get('/sitemap.xml', function(req, res) {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap)
    return
  }
 
  try {
    const smStream = new SitemapStream({ hostname: 'https://example.com/' })
    const pipeline = smStream.pipe(createGzip())
 
    // pipe your entries or directly write them.
    smStream.write({ url: '/about/',  changefreq: 'monthly',  priority: 0.7  })
    smStream.write({ url: '/services/',  changefreq: 'monthly',  priority: 0.7 })
    smStream.write({ url: '/pricing/', changefreq: 'monthly',  priority: 0.7 })    // changefreq: 'weekly',  priority: 0.5
	smStream.write({ url: '/contact/',  changefreq: 'monthly',  priority: 0.7  })
	smStream.write({ url: '/portfolio/',  changefreq: 'monthly',  priority: 0.7  })
	smStream.write({ url: '/404/',  changefreq: 'monthly',  priority: 0.7  })
	smStream.write({ url: '/legal/',  changefreq: 'monthly',  priority: 0.7  })
    smStream.end()
 
    // cache the response
    streamToPromise(pipeline).then(sm => sitemap = sm)
    // stream write the response
    pipeline.pipe(res).on('error', (e) => {throw e})
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
})
 
app.get("/", function(req, res){
	// body...
	res.render("index")
})

app.get("/about", function(req, res){
	// body...
	res.render("about")
})
app.get("/contact", function(req, res){
	// body...
	res.render("contact")
})
app.get("/portfolio", function(req, res){
	// body...
	res.render("portfolio")
})
app.get("/pricing", function(req, res){
	// body...
	res.render("pricing")
})
app.get("/services", function(req, res){
	// body...
	res.render("services")
})
app.get("/pricing", function(req, res){
	// body...
	res.render("pricing")
})
app.get("/legal", function(req, res){
	// body...
	res.render("legal")
})

app.get("/*", function(req, res){
	// body...
	res.render("404")
})

const port = process.env.port || 8081;
app.listen(port,function(){
	console.log("BM Web Design running");
});