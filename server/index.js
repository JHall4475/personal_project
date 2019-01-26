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
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
}))
app.use((req, res, next) => {
    console.log("Session");
    console.log(req.session)
    console.log("BODY")
    console.log(req.body)
     next();
})

massive(process.env.DATABASE_STRING)
.then(db => {
    app.set('db', db)
    console.log('Database is Connected Boss')
})
.catch(err => {
    console.log('Database connection error', err)
})

let requireAuth = (req, res, next) => {
    if (!req.session.user) {
        res.status(401).json("Not Logged in")
    } else {
        next();
    }
}

app.post('/api/register', controller.register)
app.post('/api/login', controller.loginUser)
app.post('/api/logoutUser', controller.logoutUser)
app.post('/api/weight/post', controller.weightPost)
app.put('/api/workout/post', controller.addToWorkout)
app.get('/api/workout/retrieve', controller.retrieveWorkout)
app.get('/api/user', (req, res) => {
    res.send(req.session.user)
})
app.delete('/api/workout/:id', controller.deleteWorkoutItem)
app.get('/api/weight/entries', controller.weightEntries)
app.get('/health', (req, res) => {
    return res.send('ok')
})
app.get('/api/weight/retrieve', controller.retrieveWeight)



app.listen(port, function(){
    console.log(`Server is running on ${port}`)
})