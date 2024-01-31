const url = require('url');
//its a url but here its a string that can inherit string properties
const route = 'http://localhost:5000/addusers?username=Yusuf&age=23';
console.log(route);

//converts the route to a url, here is basically an object here SIMILAR TO JSON.parse
let ul = url.parse(route, true);
console.log(ul.hostname)// prints out localhost as the hostname.
console.log(ul.pathname); // prints out /addusers as the path.
console.log(ul.search); // prints out ?username=Yusuf&age=23 which are the query strings

 /* prints outusername=Yusuf&age=23, in this case the ? is not part of the query.
the query are theinformation of the user passed.
quary helps you to create an object
//anything that comes after the question mark ? is a query string,
// the true atrributed to a parse makes it able to convert the quary string to an object
*/
params = ul.query
console.log(params); // prints out [Object: null prototype] { username: 'Yusuf', age: '23' }
console.log(params.username); //prints out Yusuf