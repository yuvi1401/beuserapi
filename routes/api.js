const apiRouter = require('express').Router();

const userRouter = require('../routes/users');

const { handle405 } = require('../error/index');

apiRouter.use('/users', userRouter);
apiRouter.all('/', handle405);

module.exports = apiRouter;
