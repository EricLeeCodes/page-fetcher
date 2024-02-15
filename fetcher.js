const siteToDownload = process.argv[2];
const downloadedPath = process.argv[3];

let byteCount = 0;


const fs = require('fs');
const request = require('request');

request(siteToDownload, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.


  fs.stat(downloadedPath, (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
      byteCount = stats.size;
    }
  });

  const content = body;
  fs.writeFile(downloadedPath, content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${byteCount} bytes to ${downloadedPath}`);
    }
  });

});










