const app = require('express')();
const bodyparser = require('body-parser');
const CORS = require('cors');
const apiRouter = require('./routes/api');

app.use(bodyparser.json());
app.use(CORS());
app.use('/api', apiRouter);
app.use((err, req, res, next) => {
  if (err) console.log(err);
});

module.exports = app;
