// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, resp){
//   // Print the name of the file for which request is made.
// //   console.log("Request for demo file received.");
//   fs.readFile("html/index.html",function(error, data){
//     if (error) {
//       resp.writeHead(404);
//       resp.write('Contents you are looking for-not found');
//       resp.end();
//     }  else {
//       resp.writeHead(200, {
//         'Content-Type': 'text/html'
//       });
//       resp.write(data.toString());
//       resp.end();
//     }
//   });
// });

// server.listen(8081, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:8081/');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public/html')));

app.use(function(req, res) {
  res.status(400);
  return res.send(`404 Error: Resource not found`);
});

app.listen(port, () => {
  console.log(`App listening  on port ${port}`);
})