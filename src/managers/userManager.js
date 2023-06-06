
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { use } = require('../controllers/userController');

exports.register = (userData) => User.create(userData);

exports.login = async(username,password) => {
    const user = await User.findOne({ username })
    //check user exist
    if(!user){
        throw new Error('Cannot find username or password!');
    };
    //validate password
    const isValid = await bcrypt.compare(password,user.password);

    if(!isValid){
        throw new Error('Cannot find username or password!');
    }
    return user;
}
