require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const path         = require('path');
const cors = require('cors')
// const mongoose     = require('mongoose');
// const MongoStore = require('connect-mongo')(session)

// const session = require('express-session')
// const passport = require('./config/passport')


// mongoose
//   .connect(process.env.DB, {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001'] // process.env.NETIFLY_URL
  })
);


//mongoose config


// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: true,
//     cookie: {
//       maxAge: 6000000000
//     },
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       ttl: 24 * 6000 * 6000 
//     })
//   })
// )

//PAssport
// app.use(passport.initialize())
// app.use(passport.session())



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



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
const mailRoute = require('./routes/mailRoute')

app.use('/api', index);
// app.use('/api', mailRoute)


module.exports = app;