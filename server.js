
const express = require('express');
const server = express();
const router = require('./routers/route');
 
server.use('/', router);


 
// server.get('/', (req,res)=> {
//     res.send('Hello Divine ,,,,,,,, Jigu');
// });

// Serve static files from the front folder
server.use(express.static('frontend'));
// Serve static files from the front folder


const port = 3000;

server.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
  });


