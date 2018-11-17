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

massive(process.env.DATABASE_STRING)
.then(db => {
    app.set('db', db)
    console.log('Database is Connected Boss')
})
.catch(err => {
    console.log('Database connection error', err)
})

app.post('/api/register', controller.register)
app.post('/api/login', controller.loginUser)


app.get('/health', (req, res) => {
    return res.send('ok')
})



app.listen(port, function(){
    console.log(`Server is running on ${port}`)
})