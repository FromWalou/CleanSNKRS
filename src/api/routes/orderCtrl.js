// Import
var models = require('../models');
var asyncLib = require('async');
var jwtUtils = require('../utils/jwt.utils');

// Const

// Routes
module.exports = {
	createOrder: function(req,res){
		// Get auth Header
    	var authHeader = req.headers['authorization'];
    	var pars       = jwtUtils.parseAuthorization(authHeader);
    	var userId     = jwtUtils.getUserId(pars);

    	// Params
    	var brand     = req.body.brand;
    	var model     = req.body.modele;
    	var stylecode = req.body.stylecode;
    	var color     = req.body.color;
    	var state     = req.body.state;
    	var rate      = req.body.rate;
    	var service   = req.body.service;
        var price     = req.body.price;

    	if ( service == null )
    		return res.status(400).json({ 'error': 'missing parameters' });

    	asyncLib.waterfall([
    		function(done){
    			models.User.findOne({
    				where: { id: userId }
    			})
    			.then(function(userFound) {
    				done(null, userFound);
    			})
    			.catch(function(err){
    				return res.status(500).json({ 'error': 'unable to verify user' });
    			})
    		},
    		function(userFound, done) {
    			if (userFound) {
    				models.Order.create({
    					brand: brand,
    					model: model,
    					stylecode: stylecode,
    					color: color,
    					state: state,
    					rate: rate,
    					service: service,
                        price: price,
                        UserId: userFound.id
    				})
    				.then(function(newOrder) {
    					done(newOrder);
    				});
    			}
    			else {
    				res.status(404).json({ 'error': 'user not found' });
    			}

    		},
    		], function(newOrder) {
                if (newOrder){
                    return res.status(201).json(newOrder);
                }
                else {
                    return res.status(500).json({'error': 'cannot create order'});
                }
    		})
	}
}