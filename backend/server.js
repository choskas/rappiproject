require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./config/passport')
const cors = require('cors');

mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    cookie: {
      maxAge: 6000000000
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 6000 * 6000 
    })
  })
)

//PAssport
app.use(passport.initialize())
app.use(passport.session())



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port' + ' ' + process.env.PORT);
 });




const index = require('./routes/index');
// const mailRoute = require('./routes/mailRoute')
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3001']
}))
app.use('/api', index);
// app.use('/api', mailRoute)


module.exports = app;