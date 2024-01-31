//file system module
const fs = require("fs");

//READ FILES
// fs.readFile('readme.txt', function(err, data){
// console.log(data)
// });

// const data = fs.readFileSync('readme.html', 'utf-8')
// console.log(data)
// you may have a project that require you to read or writefiles to be displayed in a page.

const data2 = fs.readFileSync("datasource.json", "utf-8");
let newData = JSON.parse(data2);
console.log(newData);

//hold the file name and the content that will be sent
function addUser(username, age) {
  //create a dataStructure
  const dataStruc = {
    username: null,
    age: null,
  };

  const data3 = fs.readFileSync("datasource.json", "utf-8");
  let newData3 = JSON.parse(data3);
  console.log(newData3);
  let prop = Object.create(dataStruc);
  prop.username = username;
  prop.age = age;
  newData3.push(prop);

  //write into datasource.json filr using fs.writefileSync\

  fs.writeFileSync("datasource.json", JSON.stringify(newData3));
}
 module.exports = addUser
/*
WRITE FILE
this write Damilola inside the datasource.json file.
fs.writeFileSync("datasource.json", "Damilola")
*/