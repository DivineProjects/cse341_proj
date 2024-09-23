const express = require('express');
const server = express();
const router = require('./routers/route');
const connectDB = require('./database/connections')

 
server.use('/', router);


 
// server.get('/', (req,res)=> {
//     res.send('Hello Divine ,,,,,,,, Jigu');
// });

// Serve static files from the front folder
server.use(express.static('frontend'));
// Serve static files from the front folder

// connectDB.connectDb(); // connect to database
server.use(express.json({extended:false}));
server.use('/api/userModel', require('./Api/user'));//


const port = 3000;

server.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
  });


