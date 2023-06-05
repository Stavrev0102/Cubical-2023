
const User = require('../models/User');

exports.register = (userData) => User.create(userData);
exports.login = async(username,password) => {
    const user = await User.findOne({ username })

    if(!user){
        throw new Error('Cannot find username or password!')
    }
}