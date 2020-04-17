var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          // throw err;
          console.log('im inside messges get: ', err);
        }
        console.log(results); //<-- empty array
        // res.sendStatus(201);
        // if (results.length > 0) {
          res.json(results);
        // }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      let params = [req.body.message, req.body.username, req.body.roomname];
      console.log(params);
      models.messages.post(params, (err, results) => {
        if (err) {
          throw error;
          console.log('i failed here');
        }
        res.sendStatus(201);
        console.log('inside messages post: ', results);
      });
    }
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          throw err;
          console.log('i failed in users');
        }
        // res.sendStatus(201);
        console.log('inside user get: ', results);
        // if (results.length > 0) {
        //   res.json(results);
        // }
      });
    },
    post: function (req, res) {
      let params = [req.body.username];

      models.users.post( params, (err, results) => {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
        // res.json(results);
      });
    }
  }
};

// module.exports.users.post();
// module.exports.messages.post();
// module.exports.messages.get();
// module.exports.users.get();

