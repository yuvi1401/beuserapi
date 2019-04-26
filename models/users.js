const connection = require('../db/connection');

exports.fetchAllUsers = () => connection('users').select('*');
exports.addUser = newUser =>
  connection('users')
    .insert(newUser)
    .returning('*');

exports.deleteUser = userid =>
  connection('users')
    .where({ userid })
    .del();
