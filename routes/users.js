const usersRouter = require('express').Router();

const {
  getAllUsers,
  postUser,
  deleteUserById
} = require('../controllers/users');

const { handle405 } = require('../error/index');
usersRouter
  .route('/')
  .get(getAllUsers)
  .post(postUser)
  .delete(deleteUserById)
  .all(handle405);

module.exports = usersRouter;
