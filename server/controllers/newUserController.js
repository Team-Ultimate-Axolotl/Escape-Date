const { query } = require("express");
const db = require("../../database/model");
const bcrypt = require('bcrypt');

const newUser = {};

newUser.create = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const rounds = 10;

  let hashed;

  bcrypt.hash(password, rounds, (err, hash) => {

      if (err) {
          console.error(err)
          return
      }
      console.log('hash is: ', hash)
      hashed = hash;
    //   return hash;
  });
//   const hashPass = async () => {
//       const hashed = await bcrypt.hash(password, rounds);
//       return hashed;
      
      
//   }
//   hashPass().then(() => {
//       console.log()
//   })
//   console.log('REQUEST IS: ', req.body, hashed)
  console.log('HASHED: ', hashed);

    const queryString = `INSERT INTO users 
    (username, password, name, phone, 
    em1_name, em1_phone, em2_name, 
    em2_phone, em3_name, em3_phone)
    VALUES ('${req.body['username']}', 
    '${hashed}', 
    '${req.body['name']}', 
    '${req.body['phone']}', 
    '${req.body['em1_name']}', 
    '${req.body['em1_phone']}',
    '${req.body['em2_name']}',
    '${req.body['em2_phone']}', 
    '${req.body['em3_name']}', 
    '${req.body['em3_phone']}')
    RETURNING *;`;

    db.query(queryString)
      .then(() => {
        console.log('WE MADE IT')
        return next();
      })
      .catch((err) => {
        return next(err);
      });
}

module.exports = newUser;