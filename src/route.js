const express = require('express');
const route = express.Router();


route.get('/', middleware_validate_user);


// An example middleware function
var middleware_validate_user = function (req, res, next) {

    console.log(req.params.user);
    // ... perform some operations
    next(); // Call next() so Express will call the next middleware function in the chain.
}

module.exports = route;