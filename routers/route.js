const routers = require('express').Router();
const routeController = require('../controllers/routerController');

// // /route/route.js
// const express = require('express');
// const router = express.Router();
// const controller = require('../controller/controller');

// // Define a route that can be extended in the future
// router.get('/', controller.homePage);

// module.exports = router;

routers.get('/', routeController.homePage);
routers.get('/home', routeController.home);

 
routers.get('/login', routeController.login);
 
routers.get('/logout', routeController.logout);

module.exports = routers;
 
