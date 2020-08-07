const express = require ('express');
const cors = require('cors');
const bodyParser =  require('body-parser');
const connectDB =  require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}))
app.use(cors());

app.get('/', (req, res) => res.send("API running"))



const PORT = process.env.PORT || 8080;