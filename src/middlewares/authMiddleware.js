
const {SECRET} = require('../config/config');
const jwt = require('../lib/jwb')

exports.auth = async(req,res,next) => {

    const token = req.cookies['auth'];

    if(token){
        //VALIDATE TOKEN
        try {
            const decodedToken = await jwt.verify(token,SECRET);
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;

            next();

        } catch (error) {
            res.clearCookie('auth')
             res.redirect('/users/login')
        }
        
    } else {
        next()
    }
}

exports.isAuth = (req,res,next) => {
if(!req.user){
    return res.redirect('/users/login')
}
next();
}