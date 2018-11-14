var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

models.sequelize.sync({force:true}).then(function () {
  models.listings.bulkCreate([
    {
    Company: 'Social Code',
    Position: 'Front End Developer',
    Location: 'Franklin, TN'
  },{
    Company: 'Backstreet Coders',
    Position: 'Back End Developer',
    Location: 'Orlando, FL'
  },{
    Company: 'Code of Conduct',
    Position: 'Junior Developer Full Stack',
    Location: 'Austin, TN'
  }, {
    Company: 'California Code Rush',
    Position: 'Full Stack Web Developer',
    Location: 'Sacramento, CA '
  },{
    Company: 'iCode',
    Position: 'Coding Mentor',
    Location: 'Seattle, WA'
  },{
    Company: 'BGHL Inc',
    Position: 'Front End Developer',
    Location: 'Las Vegas, NV' 
  },{
    Company: 'Code Blazers',
    Position: 'Senior Web Developer',
    Location: 'Fargo, ND'
  },{
    Company: 'Code Launchers',
    Position: 'Full Stack Web Developer',
    Location: 'Roanoke, VA'
  }])
  .then(() => {
    models.listings.findAll().then(listings => console.log(listings));
  });

 
  console.log('database synced');
});
models.sequelize.sync({alter:true}).then(function () {
  models.formInput.bulkCreate([
    {
    Name: '',
    Email: '',
    CurrentModule: ''
  }])
  .then(() => {
    models.formInput.findAll().then(formInput => console.log(formInput));
  });

  console.log('database is jacked');
});
module.exports = app;
