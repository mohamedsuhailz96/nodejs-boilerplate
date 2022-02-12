const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/userController.js'),
    authorization = require('../middlewares/authorization'),
    validators = require('../validators/userValidators');


router.get('/', userController.getUsers);

router.post('/', validators.createUser, userController.createUser);

module.exports = router;