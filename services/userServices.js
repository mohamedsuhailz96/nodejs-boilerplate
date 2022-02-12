const models = require('../data/models');
const userModel = models.User;

let userServices = {
    getUsers: async (data) => {
        try {
            let userData = await userModel.findAll({
                raw: true
            });
            if (userData.length >= 0) {
                return {
                    success: true,
                    data: userData
                }
            } else if (userData.error) {
                throw new Error(JSON.parse(JSON.stringify(userData)));
            }
        } catch (err) {
            return {
                success: false,
                error: err
            }
        }
    },
    createUser: async (data) => {
        try {
            let userData = await userModel.create(data,{
                raw: true,
                returning: true
            });
            if (userData.error) {
                throw new Error(JSON.parse(JSON.stringify(userData)));
            }
            return {
                success: true,
                data: userData
            }
        } catch (err) {
            return {
                success: false,
                error: err
            }
        }
    }
}

module.exports = userServices;