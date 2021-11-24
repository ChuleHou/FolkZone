const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://dbHou:dbHou@cluster0.gzurt.mongodb.net/ricebookDatabase?retryWrites=true&w=majority'

mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, err=> {
        if(err) throw err;
        console.log('Successfully connected to the database')
    });

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

require('./src/hello.js')(app)
require('./src/auth.js')(app)
require('./src/articles.js')(app)
require('./src/profile.js')(app)
require('./src/following.js')(app)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    const addr = server.address();
    console.log(`Server listening at http://${addr.address}:${addr.port}`)
});