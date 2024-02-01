const http = require('http');
const cors = require('cors');
const fs = require('fs');
const userActivity = require('./adduser');
const URL = require('url');

const data = [
                { username: 'Naomi', age: 21 },
                { username: 'Kachie', age: 22 },
                { username: 'Ella', age: 12 }
            ]


var server = http.createServer(function (req, res) {

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("THIS IS THE HOME PAGE")
        res.end()
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("THIS IS THE ABOUT PAGE")
        res.end()
    }
    // else if (req.url == '/user') {
    //     res.setHeader('Access-Control-Allow-Origin', '*')
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.write(JSON.stringify(data));
    //     res.end()
    // }
    else if (req.url == '/user') {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const gotData = userActivity.getuser()
        res.write(JSON.stringify(gotData));
        res.end();
    }
    else if (req.url == '/adduser?username=Ben&age=32') {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        // parses the req.url into a string and sets the query to true to ensure it remains a string
        const newUrl = URL.parse(req.url, true)
        // store the query of the parsed url into a variable
        const params = newUrl.query
        // store the properties of the query into different variables
        let username = params.username
        let age = params.age
        // Then the username and age is passed as the parameters for the function
        userActivity(username, age);
        res.end("record added");
    }
    else if (req.url.startsWith('/addNewUser')) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const newUrl = URL.parse(req.url, true)
        const params = newUrl.query
        let username = params.username
        let age = params.age
        userActivity.adduser(username, age);
        // userActivity(username, age);
        res.end("record added successfully");
    }
    else if (req.url == '/contacts') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("THIS IS THE CONTACT PAGE")
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write("THIS PAGE DOES NOT EXIST")
        res.end()
    }
    console.log('in server')
})

server.listen(3500, function () {
    console.log('Server has started')
})