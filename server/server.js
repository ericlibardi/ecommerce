const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
//const morgan = require('morgan');
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

const bodyParser = require("body-parser");
const cors = require("cors");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(cors());

app.use('/products', require('./routes/products'))


//const passport = require('./passport');

//app.use(passport.initialize());

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});


//const connectDB =  require('./config/db');

//connectDB();

//app.use(express.json({extended: false}))

//app.get('/', (req, res) => res.send("API running"))
