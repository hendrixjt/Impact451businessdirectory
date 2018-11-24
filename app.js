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

models.sequelize.sync({force: true}).then(function () {
  models.formInput.bulkCreate([
    {
    Name: '',
    Email: '',
    CurrentModule: ''
  }])
  .then(() => {
    models.formInput.findAll().then(formInput => console.log(formInput));
  });

  models.listings.bulkCreate([
    {
    Company: 'Social Code',
    Position: 'Front End Developer',
    Location: 'Franklin, TN',
    Email: 'socialcode@gmail.com',
    Phone: '615-791-0001'
  },{
    Company: 'Backstreet Coders',
    Position: 'Back End Developer',
    Location: 'Orlando, FL',
    Email: 'helloworld@backstreetcoders.com',
    Phone: '407-246-2356'
  },{
    Company: 'Code of Conduct',
    Position: 'Junior Developer Full Stack',
    Location: 'Austin, TN',
    Email: 'hr@codeofconduct.com',
    Phone: '512-556-0102'
  }, {
    Company: 'California Code Rush',
    Position: 'Full Stack Web Developer',
    Location: 'Sacramento, CA ',
    Email: 'busyrich@ccr.com',
    Phone: '916-867-5309'
  },{
    Company: 'Code Blazers',
    Position: 'Senior Web Developer',
    Location: 'Fargo, ND',
    Email: 'employment@codeblazers.com',
    Phone: '701-241-0451'
  },{
    Company: 'Code Launchers',
    Position: 'Full Stack Web Developer',
    Location: 'Roanoke, VA',
    Email: 'richard.key@codelaunchers.com',
    Phone: '540-342-6025'
  }])
  .then(() => {
    models.listings.findAll().then(listings => console.log(listings));
  });

  console.log('database is jacked');
});
module.exports = app;
