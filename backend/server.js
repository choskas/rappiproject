require('dotenv').config();
import express from 'express';
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cors = require('cors');



//express
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'),() => {
    console.log('server on port' , app.get('port'))
})

//routes
app.get('/', (req, res, next) => {
    res.send('ola bb')
})

// mongoose
mongoose
  .connect(process.env.DB, {useNewUrlParser: true,  useUnifiedTopology: true })
  .then(x => {
      console.log('connected to db')
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

//express-session
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 6000000000
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 6000 * 6000 
    })
  })
)

// cors
app.use(cors({origin: true, credentials: true}));

const index = require('./routes/index')
app.use(bodyParser.json());
app.use('/api', index)


// app.get('/api/generalInfo', (req, res) =>{
//     res.send([{
//         name: 'oscar'
//     },
// {
//     name: 'gola'
// }])
// })



module.exports = app;