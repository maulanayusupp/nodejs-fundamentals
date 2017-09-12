console.log("Starting App.");

/* nodemon - simple monitoring and automatically restart node application */

/* file system */
const fs = require('fs');

/* OS */
const os = require('os')

/* notes js */
const notes = require('./notes.js');

/* lodash */
const _ = require('lodash');

/* append file */
/*var user = os.userInfo();
fs.appendFile('greetings.txt', `Bro ${user.username}! Your are ${notes.age}`);*/

var filteredArray = _.uniq(['Yusup', 1, 'Maulana', 1, 2, 3, 4, 4, 5]);
console.log(filteredArray)