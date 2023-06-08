const router = require('express').Router();
const userManager = require('../managers/userManager');
const { extractErrorMessages } =  require('../utils/errorHelper')

//Register
router.get('/register',(req,res) => {
res.render('user/register')
});

router.post('/register', async(req,res) => {
    const {username , password, repeatPassword} = req.body;
    try {
        await userManager.register({ username,password,repeatPassword });
        res.redirect('/users/login')
    } catch (error) {
        const errorMessages = extractErrorMessages(error)
        console.log(errorMessages);
        res.status(400).render('user/register',{ errorMessages: errorMessages })
    }
});
 
router.get('/login',(req,res) => {
    res.render('user/login');
});

//Login
router.post('/login',async(req,res) => {
    try {
        const { username,password } = req.body;
    const token = await userManager.login(username,password);
    res.cookie('auth',token, { httpOnly:true })
    res.redirect('/')
    } catch (error) {
        const errorMessage = extractErrorMessages(error)
        res.status(404).render('404',{ errorMessages: errorMessage })
    }
    
});

//Logout
router.get('/logout',(req,res) => {
    res.clearCookie('auth');
    res.redirect('/')
})

module.exports = router