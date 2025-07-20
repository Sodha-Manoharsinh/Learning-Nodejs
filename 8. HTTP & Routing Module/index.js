import http from "http";

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.statusMessage = "Poor";

  // shortcut for statuscode, status message and headers

  if (req.url === "/") {
    res.writeHead(202, "Perfect", { "content-type": "text/html" });
    res.end(
      "<h1>This is Homepage</h1><a href='/login'>Login</a><a href='/signup'>Signup</a>"
    );
  } else if (req.url === "/login") {
    res.writeHead(202, "Perfect", { "content-type": "text/html" });
    res.end(
      "<h1>This is Login</h1><a href='/'>HomePage</a><a href='/signup'>Signup</a>"
    );
  } else if (req.url === "/signup") {
    res.writeHead(202, "Perfect", { "content-type": "text/html" });
    res.end(
      "<h1>This is Signup</h1><a href='/'>HomePage</a><a href='/login'>Login</a>"
    );
  } else {
    res.statusCode = 404;
    res.statusMessage = "Poor";
    res.end(
      "<h1>Page under construction!!</h1><a href='/login'>Login</a><a href='/signup'>Signup</a>"
    );
  }
});

server.listen(5000, () => console.log("Server Started!!"));
