const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    const webtoken = !!req.headers.authorization ? req.headers.authorization.split(" ")[1] : "";

    try {
        jwt.verify(webtoken, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).json({
            "status": 401,
            "message": "Authorization Failed !!",
            "error": error
        });
    }
};