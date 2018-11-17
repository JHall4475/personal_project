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

}