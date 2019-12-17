var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
// app.use('/', usersRouter);