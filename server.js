const express = require('express');
const server = express();
const router = require('./routers/route');
const userRoutes = require('./routers/userRoute');
// const connectDB = require('./database/user');
const connectDB = require('./database/connections');

require('dotenv').config();

const port = 8080;
const PORT = process.env.PORT || port;

 
server.use('/', router);


 
// server.get('/', (req,res)=> {
//     res.send('Hello Divine ,,,,,,,, Jigu');
// });

// Serve static files from the front folder
server.use(express.static('frontend'));
// Serve static files from the front folder

// connectDB.connectDb(); // connect to database
// server.use(express.json({extended:false}));
// server.use('/api/userModel', require('./Api/userApi'));//




// Connect to database
connectDB.connectDB();

// Middleware
server.use(express.json());

// Routes
server.use('/api', userRoutes);

server.listen(PORT, () => {
    console.log(`Web Server is listening at port ${PORT}}`);
  });


