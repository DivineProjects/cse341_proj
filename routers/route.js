const routers = require('express').Router();
const routeController = require('../controllers/routerController');


routers.get('/', routeController.home);
routers.get('/home', routeController.home);

 
routers.get('/login', routeController.login);
 
routers.get('/logout', routeController.logout);

module.exports = routers;
 
