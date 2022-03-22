const { query } = require("express");
const db = require("../../database/model");
const bcrypt = require('bcrypt');

const signIn = {};


//check if user exists in database
signIn.user = (request, response, next) => {
    console.log('request is', request.body)
    const username = request.body.username;
    const password = request.body.password;
    const rounds = 10;

            const queryString = `SELECT * FROM users WHERE username = '${username}';`

            db.query(queryString)
            .then((data) => {
                // console.log('data is', data);
                if (data.rows[0] === undefined) {
                    response.locals.user = {err: 'Username does not exist'}
                    return next();
                };
                bcrypt.compare(password, data.rows[0].password, (err, res) => {
                    // console.log('password is', password);
                    // console.log('real pass', data.rows[0].password)
                    if (err) {
                        console.log(err)
                        return 
                    }
                    if (res === true) {
                        console.log('logged in')
                        response.locals.user = data.rows[0];
                        return next();
                    } else {
                        console.log('incorrect password');
                        response.locals.user = {err: 'Incorrect password'};
                        return next();
                    }
                })
            })
            .catch((errObj) => {
                errObj.log = 'error in controller.signin.user';
                errObj.status = 400;
                errObj.message = {err: 'controller.signIn.user error'};
                return next(errObj);
            })
        }


module.exports = signIn;