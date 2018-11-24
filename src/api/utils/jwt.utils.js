// Import
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'ze3smd0lfks5dfm4lsk67rkf89dmsflk9voqp1dn5sd34ds7f';

// Exported function
module.exports = {
	generateTokenForUser: function(userData) {
		return jwt.sign({
			userId: userData.id
		},
		JWT_SIGN_SECRET,
		{
			expiresIn: '1h'
		})
	},
	parseAuthorization: function(authorization) {
		return (authorization != null) ? authorization.replace('Bearer ', '') : null;
	},
  	getUserId: function(authorization) {
    	var userId = -1;
    	var token = authorization;
    	if(token != null) {
      		try {
        		var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        		if(jwtToken != null)
          		userId = jwtToken.userId;
          		else {
          			return ("test");
          		}
      		} catch(err) { }
    	}
    	return userId;
  }
}