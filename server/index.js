require('dotenv').config();
const path = require('path')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controller = require('../server/controller');
var massive = require('massive');
var cors = require('cors');
var session = require('express-session');
var port = 8080;

app.use(cors());
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
}))



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

app.get('/health', (req, res) => { return res.send('ok') })
app.get('/api/workout/retrieve/:id', controller.retrieveWorkout)
app.get('/api/user', (req, res) => { res.send(req.session.user) })
app.get('/api/weightretrieve/:id', controller.retrieveWeight)
app.get('/api/chart/labels', controller.getLabels)

app.post('/api/register', controller.register)
app.post('/api/login', controller.loginUser)
app.post('/api/logoutUser', controller.logoutUser)
app.post('/api/weight/post', controller.weightPost)
app.post('/api/basal/post', controller.addBasalEntry)
app.post('/api/caloric/post', controller.addCaloricNeeds)
app.post('/api/ideal/post', controller.updateIdealWeight)
app.post('/api/profile/update', controller.updateProfile)

app.put('/api/workout/post', controller.addToWorkout)

app.delete('/api/workout/:id', controller.deleteWorkoutItem)
app.delete('/api/weight/:id', controller.deleteWeightEntry)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})


app.listen(port, () => console.log(`listening on ${port}`)
)