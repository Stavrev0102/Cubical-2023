const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const PORT = 3000;

//Express config(public folder)
app.use(express.static(path.resolve(__dirname,'public')))

//Set up handlebars
app.engine('hbs',handlebars.engine({
    extname:'hbs',
}));
app.set('view engine','hbs');
app.set('views','src/views')

//Routes
app.get('/',(req,res) => {
res.render('index')
});

app.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}...`);})