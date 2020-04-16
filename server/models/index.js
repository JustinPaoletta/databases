var db = require('../db');

module.exports = {
  messages: {
    get: function (res, response) {

      //results = all the messages,
      response.end(results);
    }, // a function which produces all the messages
    post: function (res, response) {
      //message and add to messages array,
      response.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};



