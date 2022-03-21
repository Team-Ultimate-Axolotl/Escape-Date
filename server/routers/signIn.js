const express = require('express');

const router = express.Router();

const signIn = require('../controllers/signInController')


//this is the path for signing in 
router.post('/', signIn.user, (req, res) => {
    // console.log('HELLO WORLD')
    return res.status(200).json(res.locals.user)
} )


module.exports = router;