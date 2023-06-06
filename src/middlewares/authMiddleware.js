
const {SECRET} = require('../config/config');
const jwt = require('../lib/jwb')

exports.auth = async(req,res,next) => {

    const token = req.cookies['auth'];

    if(token){
        //VALIDATE TOKEN
        try {
            const user = await jwt.verify(token,SECRET);
            req.user = user;
            next();

        } catch (error) {
            res.clearCookie('auth')
             res.redirect('/users/login')
        }
        
    } else {
        next()
    }
}