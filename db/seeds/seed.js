const data = require('../data/users-data/users');

exports.seed = function(knex, Promise) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() =>
      knex('users')
        .insert(data)
        .returning('*')
    );
};
