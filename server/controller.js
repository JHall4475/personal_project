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
        db.get_user([req.body.username])
        .then( (user => {
            bcrypt.compare(req.body.password, user[0].password, (err, isCorrectPassword) => {
                if (!isCorrectPassword) {
                    console.log('error')
                    return res.status(500).send("error")
                }
                if(isCorrectPassword){
                    console.log('passwords match')
                    req.session.user = user[0]
                    res.send(req.session.user)
                }
                else{
                    console.log(err)
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
        db.add_new_weight([req.body.id, req.body.date, req.body.weight])
        res.status(200).send("Successfully added weight entry")
    },
    addToWorkout: (req, res) => {
        const db = req.app.get('db')
        db.add_to_workout([req.body.name, req.body.description, req.body.userId])
        res.status(200).send("Successfully added to Workout")
       
    },
    retrieveWorkout: (req, res) => {
        const db = req.app.get('db')
        db.get_workout([req.params.id])
        .then(result => {
            return res.status(200).send(result)
        })
        .catch(err => {
            return res.status(500).send(err.response)
        })
    },
    getLabels: (req, res) => {
        const db = req.app.get('db')
        db.get_labels()
        .then(result => {
            return res.status(200).send(result)
        })
        .catch(err => {
            return res.send(err)
        })
    },
    retrieveWeight: (req, res) => {
        const db = req.app.get('db')
        db.get_weight_entries([req.params.id])
        .then(result => {
            return res.status(200).send(result)
        })
        .catch(err => {
            return res.status(500).send(err.response)
        })
    },
    getLastWeight: (req, res) => {
        const db = req.app.get('db')
        db.get_last_weight([req.params.id])
        .then(result => {
            return res.status(200).send(result)
        })
        .catch(err => {
            return res.status(500).send(err.response)
        })
    },
    deleteWorkoutItem: (req, res) => {
        const db = req.app.get('db')
        //console.log(req.params.id)
        db.delete_workout_item([req.params.id])
        res.send("Successfully deleted Workout Item")
    },
    deleteWeightEntry: (req, res) => {
        const db = req.app.get('db')
        console.log(req.params.id)
        db.delete_weight_entry([req.params.id])
        res.send("Successfully deleted weight entry")
    },
    addBasalEntry:(req, res) => {
        const db = req.app.get('db')
        db.add_basal_entry([])
    }


}