const express = require('express');
const app = express();
const PORT = 3000;
const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');
const routes = require('./routes');

const mongoose = require('mongoose');
const dbConnect = require('./config/dbConfig')

dbConnect()
.then(() => {console.log('DB connect successfully!')})
.catch((err) => {console.log('DB Error',err)});


    expressConfig(app);
    handlebarsConfig(app);

    app.use(routes);
    app.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}...`)});

