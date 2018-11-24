// Import
var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
var models = require('../models');
var asyncLib = require('async');

// Routes
module.exports = {
register: function(req, res) {
    
    // Params
    var name      = req.body.name;
    var firstname = req.body.firstname;
    var adress    = req.body.adress;
    var email     = req.body.email;
    var password  = req.body.password;
    var city      = req.body.city;
    var zip       = req.body.zip;
    var country   = req.body.country;

    if (email == null || password == null) {
      return res.status(400).json({ 'error': 'missing parameters' });
    }

    asyncLib.waterfall([
      function(done) {
        models.User.findOne({
          attributes: ['email'],
          where: { email: email }
        })
        .then(function(userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'unable to verify user' });
        });
      },
      function(userFound, done) {
        if (!userFound) {
          bcrypt.hash(password, 5, function( err, bcryptedPassword ) {
            done(null, userFound, bcryptedPassword);
          });
        } else {
          return res.status(409).json({ 'error': 'user already exist' });
        }
      },
      function(userFound, bcryptedPassword, done) {
        var newUser = models.User.create({
            name: name,
            firstname: firstname,
            adress: adress,
            email: email,
            password: bcryptedPassword,
            city: city,
            zip: zip,
            country: country
        })
        .then(function(newUser) {
          done(newUser);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'cannot add user' });
        });
      }
    ], function(newUser) {
      if (newUser) {
        return res.status(201).json({
          'userId': newUser.id
        });
      } else {
        return res.status(500).json({ 'error': 'cannot add user' });
      }
    });
  },
    login: function(req, res) {
    
    // Params
    var email    = req.body.email;
    var password = req.body.password;

    if (email == null ||  password == null) {
      return res.status(400).json({ 'error': 'missing parameters' });
    }

    asyncLib.waterfall([
      function(done) {
        models.User.findOne({
          where: { email: email }
        })
        .then(function(userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'unable to verify user' });
        });
      },
      function(userFound, done) {
        if (userFound) {
          bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
            done(null, userFound, resBycrypt);
          });
        } else {
          return res.status(404).json({ 'error': 'user not exist in DB' });
        }
      },
      function(userFound, resBycrypt, done) {
        if(resBycrypt) {
          done(userFound);
        } else {
          return res.status(403).json({ 'error': 'invalid password' });
        }
      }
    ], function(userFound) {
      if (userFound) {
        return res.status(201).json({
          'userId': userFound.id,
          'token': jwtUtils.generateTokenForUser(userFound)
        });
      } else {
        return res.status(500).json({ 'error': 'cannot log on user' });
      }
    });
  },
  getUserProfile: function (req, res) {
    // Get auth Header
    var authHeader = req.headers['authorization'];
    var pars       = jwtUtils.parseAuthorization(authHeader);
    var userId     = jwtUtils.getUserId(pars);

    if (userId < 0)
        return res.status(400).json({ 'error': userId });

    models.User.findOne({
        attributes: ['id', 'email', 'name', 'firstname', 'adress', 'city', 'zip', 'country'],
        where: { id: userId } 
    }).then(function(user) {
        if (user) {
            res.status(201).json(user);
        }
        else {
            res.status(404).json({ 'error': 'user not found getUserId' });
        }
    }).catch(function(err) {
        res.status(500).json({ 'error': 'cannot fetch user' });
    });
  },
  updateUserProfile: function(req, res) {
    // Getting auth header
    var authHeader  = req.headers['authorization'];
    var pars        = jwtUtils.parseAuthorization(authHeader);
    var userId      = jwtUtils.getUserId(pars);

    // Params
    var adress = req.body.adress;
    var city = req.body.city;
    var name = req.body.name;
    var firstname = req.body.firstname;
    var email = req.body.email;
    var country = req.body.country;
    var zip = req.body.zip;

    asyncLib.waterfall([
      function(done) {
        models.User.findOne({
          attributes: ['id', 'adress', 'city'],
          where: { id: userId }
        }).then(function (userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'unable to verify user' });
        });
      },
      function(userFound, done) {
        if(userFound) {
          userFound.update({
            adress: (adress ? adress : userFound.adress),
            city: (city ? city : userFound.city),
            name: (name ? name : userFound.name),
            firstname: (firstname ? firstname : userFound.firstname),
            email: (email ? email : userFound.email),
            country: (country ? country : userFound.country),
            zip: (zip ? zip : userFound.zip)
          }).then(function() {
            done(userFound);
          }).catch(function(err) {
            res.status(500).json({ 'error': 'cannot update user' });
          });
        } else {
          res.status(404).json({ 'error': 'unable to check id' });
        }
      },
    ], function(userFound) {
      if (userFound) {
        return res.status(201).json(userFound);
      } else {
        return res.status(500).json({ 'error': 'cannot update user profile' });
      }
    });
  }
}