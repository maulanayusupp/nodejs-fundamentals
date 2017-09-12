console.log("Starting App.");

/* file system */
const fs = require('fs');

/* OS */
const os = require('os')

/* notes js */
const notes = require('./notes.js');

var user = os.userInfo();
fs.appendFile('greetings.txt', `Bro ${user.username}!`);