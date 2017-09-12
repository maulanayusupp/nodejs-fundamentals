console.log("Starting App.");

/* file system */
const fs = require('fs');

/* OS */
const os = require('os')

var user = os.userInfo();
fs.appendFile('greetings.txt', `Bro ${user.username}!`);