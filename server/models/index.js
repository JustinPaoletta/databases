var db = require('../db');

module.exports = {

  messages: {

    get: function (callback) {

      // let queryString = 'select messages.MessageID, messages.Message_text, messages.Created_at, messages.UserID, messages.Rooms from messages, users where messages.UserID = users.ID';

      let queryString = 'select messages.MessageID, messages.Message_text, messages.Created_at, messages.UserID, messages.Rooms from Messages LEFT OUTER JOIN Users on (messages.UserID = users.ID)';

      db.query(queryString, (error, results) => {
        if (error) {
          callback(error);
        }
        callback(null, results);
      });

    }, // a function which produces all the messages
    post: function (params, callback) {

      let queryString = 'insert into messages (Message_text, UserID, Rooms) values(?, (select ID from users where username = ? limit 1), ?)';

      db.query(queryString, params, (error, results) => {
        if (error) {
          callback(error);
        }
        callback(null, results);
      });
    }
  },

  users: {
  // Ditto as above.
    get: function (callback) {
      let queryString = 'select users.username from users';

      db.query(queryString, (error, results) => {
        if (error) {
          callback(error);
        }
        callback(null, results);
      });
    },
    post: function (params, callback) {

      let queryString = 'insert into users (username) values (?)';

      db.query(queryString, params, (error, results) => {
        if (error) {
          callback(error);
        }
        callback(null, results);
      });
    }
  }

};



