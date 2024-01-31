const http = require("http");
const cors = require("cors");
const URL = require("url"); //imports the a url as a  core module.
const addUser = require("./fs");
const userList = require("./datasource.json");

const server = http.createServer(function (req, res) {
  // res.writeHead(200, { "Content-Type": "text/html" }); //how i want the browser to receive it, it should be statuscode 200, content-type tellls the browser how to process the page
  // res.write("<h1> send info</h1>");
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.write("[{'name: 'user', 'age': 4, 'gender': 'male'}]");
  // res.end();

  const data = [
    { username: "Naomi", age: "23" },
    { username: "Sefa", age: "14" },
    { username: "Eric", age: "11" },
  ];

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("welcome");
    res.end();
  } else if (req.url == "/users") {
    //the setHeader grants access to the other server that wants to access the url path.
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("welcome");
    res.end();
  } else if (req.url == "/adduser?username=Yusuf&age=23") {
    //get the url
    const newUrl = URL.parse(req.url, true);
    const params = newUrl.query;
    let u_name = params.username;
    let u_age = params.age;
    addUser(u_name, u_age);
    res.end("record added");
  } else if (req.url.startsWith("/addNewUser")) {
    const newUrl = URL.parse(req.url, true);
    const params = newUrl.query;
    let u_name = params.username;
    let u_age = params.age;
    addUser(u_name, u_age);
    res.end("record added Succesfully");

  } else if (req.url.startsWith("/getAddNewUser")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(userList));
    res.end("All users retrieved successfully");
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end();
  }
});
server.listen(4000, function () {
  console.log("server is running on port 4000");
});