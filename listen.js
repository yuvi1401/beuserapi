const app = require('./app');
app.listen(9090, err => {
  if (err) console.log(err);
  else console.log('server 9090 listening');
});
