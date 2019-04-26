exports.up = function(connection, Promise) {
  return connection.schema.createTable('users', usersTable => {
    usersTable
      .increments('id')
      .unique()
      .notNullable();
    usersTable.string('userid').notNullable();
    usersTable.string('givenName').notNullable();
    usersTable.string('familyName').notNullable();
    usersTable
      .string('email')
      .unique()
      .notNullable();
    usersTable.timestamp('created_at').defaultTo(connection.fn.now());
  });
};

exports.down = function(connection, Promise) {
  return connection.schema.dropTable('users');
};
