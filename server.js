const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
	const url = req.url;
	console.log("request was made: " + url);

	if (url === "/index" || url === "/") {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("<h2>index sayfasina hosgeldiniz</h2>");
	} else if (url === "/hakkimda") {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("<h2>hakkimda sayfasina hosgeldiniz</h2>");
	} else if (url === "/iletisim") {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("<h2>iletisim sayfasina hosgeldiniz</h2>");
	} else {
		res.writeHead(404, {"Content-Type": "text/html"});
	}

	res.end();
});

server.listen(port, () => {
	console.log("Server is listening on port " + port);
});
