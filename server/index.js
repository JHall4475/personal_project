require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller =require('../server/controller');
const massive = require('massive');
const cors = require('cors');
const session = require('express-session');
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    return res.send('ok')
})



app.listen(port, function(){
    console.log(`Server is running on ${port}`)
})