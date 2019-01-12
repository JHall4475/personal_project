const bcrypt = require('bcrypt-nodejs');

module.exports = {

    register: (req, res) => {
        const db= req.app.get('db');
        bcrypt.hash(req.body.password, null, null, (err, hash) => {
            if(err) {
                return res.send('Something went wrong during hashing')
            }
            db.add_new_user([req.body.username, hash])
            .then(() => {
                res.status(200).send('Added new user')
            })
            .catch((err) => {
                return res.send(500).send(err)
            })
        })
    },
    loginUser: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.get_user([req.body.username])
        .then( (user => {
            console.log('user', user)
            bcrypt.compare(req.body.password, user[0].password, function(err, isCorrectPassword) {
                if (err) {
                    console.log('error')
                    return res.send('Error:', err)
                }
                if(isCorrectPassword){
                    console.log('correct')
                    req.session.user = user[0]
                    res.send('Login Successful')
                }
                else{
                    console.log('else')
                    res.send('Email or Password is wrong')
                }
            })
        }))
        .catch((err) => {
            console.log('Database error', err)
            res.status(500).send(err)
        })
    },
    logoutUser: (req, res) => {
        delete req.session.user;
        res.status(200).json("Logged out")
    },
    
    weightPost: (req, res) => {
        const db = req.app.get('db')
        db.add_new_weight([req.body.date, req.body.weight])
        console.log(req.body)
        res.status(200).send("Successfully added weight entry")
    },
    addToWorkout: (req, res) => {
        const db = req.app.get('db')
        db.add_to_workout([req.body.name, req.body.description, req.body.userId])
        console.log(req.body)
        res.status(200).send("Successfully added to Workout")
       
    },
    weightEntries: (req, res) => {
        const db = req.app.get('db')
        db.get_weight_entries()
        .then(result => {
            return res.status(200).send(result)
        })
        .catch(err => {
            return res.send(err)
        })
    },
    retrieveWorkout: (req, res) => {
        const db = req.app.get('db')
        db.get_workout()
        .then(result => {
            return res.status(200).send(result)
        })
        .catch(err => {
            return res.send(err)
        })
    },
    deleteWorkoutItem: (req, res) => {
        const db = req.app.get('db')
        console.log(req.params.id)
        db.delete_workout_item([req.params.id])
        res.send("Successfully deleted Workout Item")
    }

}