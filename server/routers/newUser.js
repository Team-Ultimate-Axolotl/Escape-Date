const express = require('express');

const router = express.Router();

const newUser = require('../controllers/newUserController')

router.post('/newUser', newUser.create, (req, res) => {
    return res.header('Access-Control-Allow-Origin', '*').status(200)
})

//router.delete('/newUser)





module.exports = router;