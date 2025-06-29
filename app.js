const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const apiRouter = require('./app_api/routes/index');


const app = express();

require("./app_api/models/db")
require('dotenv').config(); 


app.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'app_server/views/layouts/',
    partialsDir: path.join(__dirname, 'app_server/views/partials')

  })
);

// Enable CORS 
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept', "Authorization");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
})

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(passport.initialize()); 

app.use('/api', apiRouter);

// Wire in our authentication module 
var passport = require('passport'); 
require('./app_api/config/passport'); 

// Catch unauthorized error and create 401 
app.use((err, req, res, next) => { 
  if(err.name === 'UnauthorizedError') { 
    res 
      .status(401) 
      .json({"message": err.name + ": " + err.message}); 
} 
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
