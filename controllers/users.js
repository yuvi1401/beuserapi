const { fetchAllUsers, addUser, deleteUser } = require('../models/users');

exports.getAllUsers = (req, res, next) =>
  fetchAllUsers()
    .then(users => {
      res.status(200).send({
        users
      });
    })
    .catch(next);

exports.postUser = (req, res, next) =>
  addUser(req.body)
    .then(([user]) => {
      res.status(201).send({ user });
    })
    .catch(next);

exports.deleteUserById = (req, res, next) => {
  const { userid } = req.params;

  deleteUser(userid)
    .then(deleteBlock => res.status(204).send())
    .catch(next);
};
