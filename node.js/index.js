const fs = require('fs');
const path = require('path');
const async = require('async');

const filePathList = 'filePaths.txt';

function readFileAndPrint(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      logError(err);
      return callback(err);
    }
    
    console.log(`File Contents: ${content}`);
    callback();
  });
}

function logError(err) {
  const logStream = fs.createWriteStream('errors.log', {flags: 'a'});
  logStream.write(`${new Date().toISOString()} - ${err}\n`);
}

fs.readFile(filePathList, 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  
  const paths = data.split('\n');
  
  async.each(paths, readFileAndPrint, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('All files read'); 
    }
  });
});
