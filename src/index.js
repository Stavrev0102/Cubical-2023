const express = require('express');
const app = express();
const PORT = 3000;
const handlebarsConfig = require('./config/handlebarsConfig')

const expressConfig = require('./config/expressConfig');
expressConfig(app);

handlebarsConfig(app)

//Routes
app.get('/',(req,res) => {
res.render('index')
});

app.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}...`);})