const router = require('express').Router();
const userManager = require('../managers/userManager');

//Register
router.get('/register',(req,res) => {
res.render('user/register')
});

router.post('/register', async(req,res) => {
    const {username , password, repeatPassword} = req.body;
    await userManager.register({ username,password,repeatPassword });

    res.redirect('/users/login')
});

router.get('/login',(req,res) => {
    res.render('user/login');
});

//Login
router.post('/login',async(req,res) => {
    const { username,password } = req.body;
    const token = await userManager.login(username,password);

    res.cookie('auth',token, { httpOnly:true })
    res.redirect('/')
});

//Logout
router.get('/logout',(req,res) => {
    res.clearCookie('auth');
    res.redirect('/')
})

module.exports = router