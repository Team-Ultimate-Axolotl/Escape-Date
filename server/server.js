const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
// const cors = require = require('cors');
// const bodyParser = require('body-parser');
const signInRouter = require('./routers/signIn');
const newUser = require('./routers/newUser')
const dateRouter = require('./routers/dateRouter');


app.use(express.static(path.resolve(__dirname, '../src')))
app.use(express.json());

app.use('/login', signInRouter);

app.use('/session', newUser);

app.use('/newDate', dateRouter);


//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
    });
  
module.exports = app;