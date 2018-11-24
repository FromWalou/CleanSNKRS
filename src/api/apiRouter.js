// Import
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');
var orderCtrl = require('./routes/orderCtrl');

// Router
exports.router = (function() {
	var apiRouter = express.Router();

	// Users routes
	apiRouter.route('/users/register/').post(usersCtrl.register);
	apiRouter.route('/users/login/').post(usersCtrl.login);
	apiRouter.route('/users/profile/').get(usersCtrl.getUserProfile);
	apiRouter.route('/users/profile/').put(usersCtrl.updateUserProfile);

	// Orders routes
	apiRouter.route('/order/new').post(orderCtrl.createOrder);

	return apiRouter;
})();