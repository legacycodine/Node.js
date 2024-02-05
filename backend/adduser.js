// file system module
const fs = require('fs');

// const data = fs.readFileSync('readme.html', 'utf-8');
// console.log(data);

// TO READ A FILE
// const data = fs.readFileSync('datasource.json', 'utf-8');
// let newData = JSON.parse(data);
// console.log(newData)



// TO WRITE TO A FILE

function adduser(username, age) {
    const dataStruc = {
        username : null,
        age: null
    }
    
    const data = fs.readFileSync('datasource.json', 'utf-8');
    let newData = JSON.parse(data);
    // console.log(newData)
    
    let prop = Object.create(dataStruc)
    // the parameters passed in will serve as the values for the new field that will be pushed into the data structure/database/json file
    prop.username = username
    prop.age = age
    newData.push(prop)
    
    fs.writeFileSync('datasource.json', JSON.stringify(newData));
    console.log(newData)


}

function getuser(){
    const data = fs.readFileSync('datasource.json', 'utf-8');
    let newData = JSON.parse(data);
    console.log(newData)
    return newData;
}


module.exports = {adduser, getuser};
// module.exports = adduser;