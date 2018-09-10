const http = require("http");
const fs = require("fs");

const port = 8080;

handleRequest = (req, res) => {
  const path = req.url;
  switch (!false){
    case (path === "/"):
      displayPage(path, req, res, "index")
      break;

    case (path === "/food"):
      displayPage(path, req, res, "food");
      break;
    
    case (path === "/movies"):
      displayPage(path, req, res, "movies");
      break;

    case (path === "/frameworks"):
      displayPage(path, req, res, "frameworks");
      break;
    
    default:
      break;
  };
};

displayPage = (url, req, res, filename) => {
  fs.readFile(`${__dirname}/${filename}.html`, function(err, data) {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server initialized and listening on port ${port}`);
});