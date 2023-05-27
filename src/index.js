const express = require('express');
const app = express();
const PORT = 3000;
const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cubes',cubeController);
app.get('*',(req,res) => {
res.redirect('/404')
});


app.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}...`)});