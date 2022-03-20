const { query } = require("express");
const db = require("../../database/model");
const bcrypt = require('bcrypt');

const signIn = {};


//check if user exists in database
signIn.user = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const rounds = 10;

    const hashed = bcrypt.hash(password, rounds, (err, hash) => {
        if (err) {
            console.error(err)
            return
        }
        return hash;
    })

    const queryString = `SELECT * FROM users WHERE username = ${username};`

    db.query(queryString)
    .then((data) => {
        const validation = bcrypt.compare(password, hashed, (err, res) => {
            if (err) {
                console.log(err)
                return 
            }
            return res;
        })
        if (validation === true) {
            res.locals.user = data.rows[0];
            return next();
        } else {
            res.locals.user = {err: 'Incorrect password'};
            return next();
        }
    })
    .catch((errObj) => {
        res.locals.user = {err: 'Username does not exist'};
        // errObj.log = 'error in controller.signin.user';
        // errObj.status = 400;
        // errObj.message = {err: 'controller.signIn.user error'};
        console.log('user doesnt exist')
        return next();
    })
};

module.exports = signIn;