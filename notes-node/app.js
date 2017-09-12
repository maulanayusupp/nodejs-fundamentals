console.log("Starting App.");

/* file system */
const fs = require('fs');

/* OS */
const os = require('os')

/* notes js */
const notes = require('./notes.js');
var result = notes.addNote();

console.log('Result: ', notes.add(9,-2));
/*var user = os.userInfo();
fs.appendFile('greetings.txt', `Bro ${user.username}! Your are ${notes.age}`);*/