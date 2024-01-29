const ress = require("./sub");
const newRess = require("./object-export");
const http = require("http");

http.createServer(function(req, res){
res.end("Hello customer")
console.log("in server")
}).listen(2000, function() {
console.log("server has started")
}) // the createserver is a promise. but the listen() method will only work if the createserver is true.


// ress.f1()
// ress.f2()
// newRess.login()
// newRess.loggout()
