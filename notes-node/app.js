console.log("Starting App.");

/* file system */
const fs = require('fs');

/* OS */
const os = require('os')

/* notes js */
const notes = require('./notes.js');


/* append file */
/*var user = os.userInfo();
fs.appendFile('greetings.txt', `Bro ${user.username}! Your are ${notes.age}`);*/

/* lodash */
const _ = require('lodash');
var filteredArray = _.uniq(['Maulana', 1, 'Yusup', 1, 2, 3, 4, 4, 5]);
console.log(filteredArray)