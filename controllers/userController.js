const userServices = require('../services/userServices');

let userController = {
    getUsers: async (req, res, next) => {
        try {
            let users = await userServices.getUsers();
            (users.success) ? res.status(200).json(users): res.status(500).json(users);
        } catch (err) {
            next(err);
        }
    },
    createUser: async (req, res, next) => {
        try {
            let user = await userServices.createUser(req.body);
            (user.success) ? res.status(200).json(user): res.status(500).json(user);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userController;